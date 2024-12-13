import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface SubmitDialogProps {
  time: number;
  foul: string;
}

export const SubmitDialog = ({ time, foul }: SubmitDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-fit h-fit text-3xl py-3 px-10 font-bold" >전송</Button>
      </DialogTrigger>
      <DialogContent className="w-96">
        <DialogHeader className="flex flex-col gap-5">
          <DialogTitle className="text-5xl font-bold">확인</DialogTitle>
          <DialogDescription className={"text-lg flex flex-col gap-2"}>
            <div>시간</div>
            <div className="text-3xl font-bold text-black whitespace-nowrap">
              {time > 60000 && `${Math.floor(time / 60000)}분`}
              &nbsp;
              {time > 1000 && `${Math.floor((time % 60000) / 1000)}.`}
              {time % 1000}초
            </div>
          </DialogDescription>
          <hr />
          <DialogDescription className={"text-lg mt-5 flex flex-col gap-2"}>
            <div>반칙 내용</div>
            <div className="text-xl font-bold ">{foul}</div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-row justify-center gap-5">
          <Button variant={"destructive"}>취소</Button>
          <Button variant={"default"}>전송</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}