import {ComponentProps} from "react";
import {RichText as CMSRichText} from "@graphcms/rich-text-react-renderer"


type RichTextProps = ComponentProps<typeof CMSRichText>

export const RichText = ({...props}: RichTextProps) => {
  return <CMSRichText {...props}></CMSRichText>
}