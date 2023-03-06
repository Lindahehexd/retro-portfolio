import Markdown from "markdown-to-jsx";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
} from "@chakra-ui/react";

const markdown = `
  # 簡介
  聊天GO主讓
  <br/><br/>
  <p align="center">
  <img src="/profile2.png" alt="image" style="margin: 0 auto;">
</p>

  # 功能
  未登入用戶可以:
        - 查看當前IP
        - 搜尋看板
        - 瀏覽文章
        - 搜尋文章
<br/><br/>

  登入後用戶可以:
        - 加入看板/退訂看板 
        - 建立看板
        - 修改看板內的關於看板
        - 修改看板圖片
        - 收藏看板，並即時顯示於下拉選單
        - 搜尋看板
        - 建立文章+圖片
        - 按讚/倒讚(會計數)
        - 可以發送推文、噓文、一般註記
        - 登入後會記住按讚/倒讚內容
        - 查看當前IP
        - 搜尋文章
        - 修改看板簡介
<br/><br/>

# 圖片預覽
<p align="center">
<img src="/profile2.png" alt="image">
</p>

<p align="center">
<img src="/profile2.png" alt="image">
</p>
  <br/><br/>

  <p align="center">
<img src="/profile2.png" alt="image">
</p>
  <br/><br/>

  <p align="center">
<img src="/profile2.png" alt="image">
</p>
  <br/><br/>

  <p align="center">
<img src="/profile2.png" alt="image">
</p>
  <br/><br/>

  <p align="center">
<img src="/profile2.png" alt="image">
</p>
  <br/><br/>



  `;

const Project2Modal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button boxShadow="4px 4px " bg="gray.100" border="3px solid black" borderRadius="lg" onClick={onOpen}>
        Open Modal
      </Button>

      <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent border="4px solid black" boxShadow="7px 7px black">
          <ModalHeader fontSize="4xl">Pttit</ModalHeader>
          <ModalCloseButton />
          <ModalBody color="black" fontWeight={600} fontSize="lg">
            <Markdown>{markdown}</Markdown>
          </ModalBody>

          <ModalFooter>
            <Button
              mr={3}
              boxShadow="4px 4px "
              bg="gray.100"
              border="3px solid black"
              borderRadius="lg"
              onClick={onClose}
            >
              關閉視窗
            </Button>

            <Button
              mr={3}
              boxShadow="4px 4px "
              bg="gray.100"
              border="3px solid black"
              borderRadius="lg"
              onClick={onClose}
            >
              前往連結
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Project2Modal;
