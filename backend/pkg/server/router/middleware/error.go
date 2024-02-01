package middleware

import (
	"bytes"
	"encoding/json"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/nicksnyder/go-i18n/v2/i18n"

	"github.com/veops/oneterm/pkg/conf"
	"github.com/veops/oneterm/pkg/server/controller"
)

type bodyWriter struct {
	gin.ResponseWriter
	body *bytes.Buffer
}

func (w bodyWriter) Write(b []byte) (int, error) {
	return w.body.Write(b)
}

func Error2Resp() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		if strings.Contains(ctx.Request.URL.String(), "session/replay") {
			ctx.Next()
			return
		}

		wb := &bodyWriter{
			body:           &bytes.Buffer{},
			ResponseWriter: ctx.Writer,
		}
		ctx.Writer = wb

		ctx.Next()

		obj := make(map[string]any)
		json.Unmarshal(wb.body.Bytes(), &obj)
		if len(ctx.Errors) > 0 {
			if v, ok := obj["code"]; !ok || v == 0 {
				obj["code"] = ctx.Writer.Status()
			}

			if v, ok := obj["message"]; !ok || v == "" {
				e := ctx.Errors.Last().Err
				obj["message"] = e.Error()

				ae, ok := e.(*controller.ApiError)
				if ok {
					lang := ctx.PostForm("lang")
					accept := ctx.GetHeader("Accept-Language")
					localizer := i18n.NewLocalizer(conf.Bundle, lang, accept)
					obj["message"] = ae.Message(localizer)

				}
			}
		}
		bs, _ := json.Marshal(obj)
		wb.ResponseWriter.Write(bs)
	}
}
