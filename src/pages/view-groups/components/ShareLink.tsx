import Button from '@components/Button'
import { Input } from '@components/InputField'

type PropType = {
  shareableLink: string;
  onCopyLink: () => void;
}
const ShareLink: React.FC<PropType> = ({ shareableLink, onCopyLink }) => {
  return (
    <section className="mb-4">
      <label className="font-semibold text-gray-500 text-sm">Share Link <span className="font-light">(public draw)</span>
        <a href={shareableLink} target="_blank">
          <i className="fa fa-external-link ml-2 cursor-pointer" aria-label="New Tab" title="New tab" />
        </a>
      </label>
      <div className="flex items-center border border-gray-300 my-2">
        <Input className="w-2xl">
          <Input.Field readOnly value={shareableLink} aria-label="Shareable Link" disabled className='pr-12' />
          <Input.Right>
            <Button
              onClick={onCopyLink}
              aria-label="Copy to clipboard"
              className="bg-gray-300 border-1 border-gray-300 p-[10px]"
              title="Copy to clipboard"
            >
              <i className="fa fa-clipboard text-gray-600" />
            </Button>
          </Input.Right>
        </Input>
      </div>
    </section>
  )
}

export default ShareLink