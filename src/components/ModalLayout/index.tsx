import React from 'react';
import {
  Modal,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import styled from 'styled-components/native';
import Toast from 'react-native-toast-message';
import StyledText from '@components/common/StyledText';
import responsive from '@utils/responsive';
import toastStyle from '@styles/toastStyle';

const KeyboardAvoidingContainer = styled(KeyboardAvoidingView)`
  flex: 1;
`;

const Overlay = styled(View)`
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const ModalContainer = styled(View)`
  width: ${responsive(320)}px;
  max-width: 560px;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: ${responsive(10, 'height')}px;
  padding: ${responsive(30, 'height')}px 0 ${responsive(20, 'height')}px 0;
`;

const ModalTitle = styled(StyledText)`
  font-family: ${(props) => props.theme.FONT_WEIGHTS.MEDIUM};
  font-size: ${responsive(16, 'height')}px;
  margin-bottom: ${responsive(15, 'height')}px;
`;

const ModalDescription = styled(StyledText)`
  font-family: ${(props) => props.theme.FONT_WEIGHTS.LIGHT};
  font-size: ${responsive(13, 'height')}px;
  letter-spacing: ${responsive(-0.5, 'height')}px;
  color: gray;
  margin-top: ${responsive(-10, 'height')}px;
  margin-bottom: ${responsive(15, 'height')}px;
`;

const ModalContent = styled(View)`
  width: 88%;
  justify-content: center;
  align-items: center;
`;

interface ModalProps {
  visible: boolean;
  title?: string;
  description?: string;
  content: React.ReactNode;
  onClose: () => void;
}

const ModalLayout: React.FC<ModalProps> = ({
  visible,
  title,
  description,
  content,
  onClose,
}) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <KeyboardAvoidingContainer
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <TouchableWithoutFeedback onPress={onClose}>
          <Overlay>
            <TouchableWithoutFeedback>
              <ModalContainer>
                {title && <ModalTitle>{title}</ModalTitle>}
                {description && (
                  <ModalDescription>{description}</ModalDescription>
                )}
                <ModalContent>{content}</ModalContent>
              </ModalContainer>
            </TouchableWithoutFeedback>
          </Overlay>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingContainer>
      <Toast
        config={toastStyle}
        position="bottom"
        bottomOffset={responsive(60, 'height')}
        visibilityTime={2000}
      />
    </Modal>
  );
};

export default ModalLayout;
