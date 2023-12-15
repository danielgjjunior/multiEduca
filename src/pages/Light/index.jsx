import React from "react";

import { Button, Img, Line, List, Text } from "components";

const LightPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex font-roboto h-[700px] justify-end mx-auto pl-0.5 pt-0.5 relative w-full">
        <div className="md:h-[1106px] sm:h-[766px] h-[768px] max-w-[1318px] mt-auto mx-auto md:px-5 w-full">
          <div className="md:h-[1106px] sm:h-[766px] h-[768px] m-auto w-full">
            <div className="absolute bg-gray-50 flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto p-[19px] w-[6%]">
              <Img
                className="h-[22px] mb-[699px] mt-[7px]"
                src="images/img_settings.svg"
                alt="settings"
              />
            </div>
            <div className="absolute flex md:flex-col flex-row md:gap-10 h-max inset-[0] items-end justify-between m-auto w-[97%]">
              <div className="flex flex-col items-start justify-start w-1/5 md:w-full">
                <div className="flex flex-row gap-[29px] items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-start pb-16 w-[33%]">
                    <Img
                      className="h-14"
                      src="images/img_thumbsup.svg"
                      alt="thumbsup"
                    />
                    <Text
                      className="text-blue_gray-800 text-xs"
                      size="txtRobotoRomanRegular12"
                    >
                      Dashboard
                    </Text>
                    <div className="md:h-14 h-[59px] relative w-full">
                      <Img
                        className="absolute h-14 inset-x-[0] mx-auto top-[0]"
                        src="images/img_reply.svg"
                        alt="reply"
                      />
                      <Text
                        className="absolute bottom-[0] inset-x-[0] mx-auto text-blue_gray-800 text-xs w-max"
                        size="txtRobotoRomanRegular12"
                      >
                        Turmas
                      </Text>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-14 items-end justify-start mt-3 pt-[17px] px-[17px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group8.svg')",
                      }}
                    >
                      <Text
                        className="mt-[23px] text-blue_gray-800 text-xs"
                        size="txtRobotoRomanRegular12"
                      >
                        Minhas tarefas
                      </Text>
                    </div>
                    <div className="h-[63px] md:h-[72px] mt-4 relative w-full">
                      <Img
                        className="absolute h-14 inset-x-[0] mx-auto top-[0]"
                        src="images/img_television.svg"
                        alt="television"
                      />
                      <Text
                        className="absolute bottom-[0] left-[10%] text-blue_gray-800 text-xs"
                        size="txtRobotoRomanRegular12"
                      >
                        Calendário
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="italic mt-[25px] text-blue_gray-800 text-xl"
                    size="txtRobotoItalicThin20"
                  >
                    Dashboard Geral
                  </Text>
                </div>
                <Img
                  className="h-14 mt-[124px]"
                  src="images/img_user.svg"
                  alt="user"
                />
                <Img
                  className="h-14 mt-4"
                  src="images/img_user_gray_50.svg"
                  alt="user_One"
                />
              </div>
              <div className="flex flex-col md:gap-10 gap-[138px] items-start justify-start md:mt-0 mt-[25px] w-[32%] md:w-full">
                <Text
                  className="italic text-blue_gray-800 text-xl"
                  size="txtRobotoItalicThin20"
                >
                  Perfil do Aluno{" "}
                </Text>
                <div className="sm:gap-5 gap-8 grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                  <div className="border border-gray-200 border-solid flex flex-1 flex-col items-end justify-start p-4 rounded-lg w-full">
                    <div className="flex flex-col gap-12 items-start justify-start mb-[34px] mt-2 w-[95%] md:w-full">
                      <div className="flex flex-row items-start justify-between w-full">
                        <div className="bg-orange-200 h-12 rounded-lg w-12"></div>
                        <Img
                          className="h-6 w-6"
                          src="images/img_notification.svg"
                          alt="notification"
                        />
                      </div>
                      <Text
                        className="text-blue_gray-800 text-sm"
                        size="txtRobotoRomanMedium14"
                      >
                        Área Multimidia
                      </Text>
                    </div>
                  </div>
                  <div className="border border-gray-200 border-solid flex flex-1 flex-col items-end justify-start p-4 rounded-lg w-full">
                    <div className="flex flex-col items-start justify-start my-2 w-[95%] md:w-full">
                      <div className="flex flex-row items-start justify-between w-full">
                        <Button className="bg-red-A200 flex h-12 items-center justify-center p-3 rounded-lg w-12">
                          <Img
                            className="h-6"
                            src="images/img_grid.svg"
                            alt="grid"
                          />
                        </Button>
                        <Img
                          className="h-6 w-6"
                          src="images/img_notification.svg"
                          alt="notification"
                        />
                      </div>
                      <Text
                        className="mt-[49px] text-blue_gray-800 text-sm"
                        size="txtRobotoRomanMedium14"
                      >
                        Notas
                      </Text>
                      <Text
                        className="mt-[9px] text-blue_gray-800 text-xs"
                        size="txtRobotoRomanRegular12"
                      >
                        Verificar Notas
                      </Text>
                    </div>
                  </div>
                  <div className="border border-gray-200 border-solid flex flex-1 flex-col md:gap-10 gap-[73px] items-end justify-start p-4 rounded-lg w-full">
                    <Img
                      className="h-6 mt-2 w-6"
                      src="images/img_notification.svg"
                      alt="notification"
                    />
                    <div className="flex flex-col gap-[9px] items-start justify-start mb-2">
                      <Text
                        className="text-blue_gray-800 text-sm"
                        size="txtRobotoRomanMedium14"
                      >
                        Chat
                      </Text>
                      <Text
                        className="text-blue_gray-800 text-xs"
                        size="txtRobotoRomanRegular12"
                      >
                        Conversar com a Turma e Professores
                      </Text>
                    </div>
                  </div>
                  <div className="border border-gray-200 border-solid flex flex-1 flex-col md:gap-10 gap-[73px] justify-end p-2 rounded-lg w-full">
                    <Img
                      className="h-6 md:ml-[0] ml-[137px] mr-2 mt-4 w-6"
                      src="images/img_notification.svg"
                      alt="notification"
                    />
                    <div className="flex flex-col gap-[9px] items-start justify-start mx-auto">
                      <Text
                        className="text-blue_gray-800 text-sm"
                        size="txtRobotoRomanMedium14"
                      >
                        Biblioteca{" "}
                      </Text>
                      <Text
                        className="leading-[16.00px] text-blue_gray-800 text-xs w-full"
                        size="txtRobotoRomanRegular12"
                      >
                        Verificar Minhas anotações e livros
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Line className="absolute bg-gray-50 h-px right-[0] top-[10%] w-[95%]" />
            <div className="absolute flex md:flex-col flex-row md:gap-5 items-end justify-start right-[4%] top-[2%] w-[89%]">
              <Img
                className="h-6 md:mt-0 my-2 w-6"
                src="images/img_megaphone.svg"
                alt="megaphone"
              />
              <Text
                className="mb-[3px] ml-6 md:ml-[0] md:mt-0 mt-[7px] text-2xl md:text-[22px] text-blue_gray-800 sm:text-xl"
                size="txtRobotoRomanRegular24"
              >
                Seja bem Vindo{" "}
              </Text>
              <Img
                className="h-10 md:h-auto md:ml-[0] ml-[906px] rounded-[50%] w-10"
                src="images/img_ellipse6.png"
                alt="ellipseSix"
              />
            </div>
          </div>
          <Img
            className="absolute bottom-[27%] h-[258px] right-[12%]"
            src="images/img_group30.svg"
            alt="groupThirty"
          />
        </div>
        <div className="absolute bottom-[6%] flex flex-col items-end justify-start md:px-5 right-[4%] w-[86%]">
          <Img
            className="h-6 w-6"
            src="images/img_arrowright.svg"
            alt="arrowright"
          />
          <div className="flex md:flex-col flex-row gap-8 items-center justify-between mt-[25px] w-full">
            <List
              className="md:flex-1 sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 md:pr-10 sm:pr-5 pr-[108px] w-[63%] md:w-full"
              orientation="horizontal"
            >
              <div className="bg-blue-A700_33 flex flex-row items-center justify-start p-4 rounded-lg w-full">
                <Img
                  className="h-8 my-2 w-8"
                  src="images/img_folder.svg"
                  alt="folder"
                />
                <Text
                  className="ml-[9px] text-base text-blue-A700"
                  size="txtRobotoRomanMedium16"
                >
                  Turmas
                </Text>
                <Img
                  className="h-6 ml-[33px] w-6"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </div>
              <div className="bg-red-500_33 flex flex-row items-center justify-start p-4 rounded-lg w-full">
                <Img
                  className="h-8 my-2 w-8"
                  src="images/img_folder_red_500.svg"
                  alt="folder"
                />
                <Text
                  className="text-base text-red-500"
                  size="txtRobotoRomanMedium16Red500"
                >
                  Atividades
                </Text>
                <Img
                  className="h-6 ml-[21px] w-6"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </div>
              <div className="bg-orange-400_33 flex flex-row items-center justify-start p-4 rounded-lg w-full">
                <Img
                  className="h-8 my-2 w-8"
                  src="images/img_folder_orange_400.svg"
                  alt="folder"
                />
                <Text
                  className="ml-2 text-base text-orange-400"
                  size="txtRobotoRomanMedium16Orange400"
                >
                  Trabalhos
                </Text>
                <Img
                  className="h-6 ml-[17px] w-6"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </div>
            </List>
            <div className="bg-gray-50 flex md:flex-1 flex-col items-center justify-end p-[13px] rounded-lg w-[35%] md:w-full">
              <div className="flex flex-row items-start justify-start w-[97%] md:w-full">
                <Img
                  className="h-10 md:h-auto mt-2 rounded-[50%] w-10"
                  src="images/img_ellipse6.png"
                  alt="ellipseSeven"
                />
                <div className="flex flex-col items-start justify-start ml-5 mt-[7px]">
                  <Text
                    className="text-base text-blue_gray-800"
                    size="txtRobotoRomanMedium16Bluegray800"
                  >
                    Nome do Aluno{" "}
                  </Text>
                  <Text
                    className="mt-1 text-blue_gray-300 text-xs"
                    size="txtRobotoRomanRegular12Bluegray300"
                  >
                    aluno@gmail.com
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start ml-[98px] w-[26%]">
                  <div className="flex flex-row items-start justify-evenly md:ml-[0] ml-[3px] w-[93%] md:w-full">
                    <Text
                      className="mt-0.5 text-blue_gray-800 text-sm"
                      size="txtRobotoRomanRegular14"
                    >
                      Atividades:
                    </Text>
                    <Text
                      className="text-blue_gray-800 text-xl"
                      size="txtRobotoRomanMedium20"
                    >
                      5
                    </Text>
                  </div>
                  <Line className="bg-gray-200 h-px rounded-[1px] w-[96%]" />
                  <div className="flex flex-row gap-3 items-start justify-between md:ml-[0] ml-[3px] mt-0.5 w-[97%] md:w-full">
                    <Text
                      className="mt-0.5 text-blue_gray-800 text-sm"
                      size="txtRobotoRomanRegular14"
                    >
                      Trabalhos:
                    </Text>
                    <Text
                      className="text-blue_gray-800 text-xl"
                      size="txtRobotoRomanMedium20"
                    >
                      2
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-mulish md:gap-5 items-start justify-start mt-[54px] w-[72%] md:w-full">
            <div className="bg-white-A700 block flex-col items-center justify-start p-2 rounded-[16px] shadow-bs w-[43%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-[89px] items-center justify-start mb-0.5 w-[94%] md:w-full">
                <Text
                  className="text-base text-center text-gray-500"
                  size="txtMulishBold16"
                >
                  Atalho de cursos{" "}
                </Text>
                <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                  <div className="flex flex-row gap-3 items-start justify-start ml-1 md:ml-[0] w-[85%] md:w-full">
                    <Img
                      className="h-[102px] md:h-auto object-cover rounded-[16px] w-[48%]"
                      src="images/img_image.png"
                      alt="image_One"
                    />
                    <div className="flex flex-col items-start justify-start mt-3">
                      <Text
                        className="text-orange-A700 text-xs"
                        size="txtMulishBold12"
                      >
                        Design
                      </Text>
                      <Text
                        className="text-base text-blue_gray-900_01"
                        size="txtJostSemiBold16"
                      >
                        Professor Antônio
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-blue_gray-200 h-px w-full" />
                  <div className="flex flex-row gap-[9px] items-start justify-start ml-1 md:ml-[0] w-[78%] md:w-full">
                    <Img
                      className="h-[103px] md:h-auto object-cover rounded-[16px] w-[53%]"
                      src="images/img_image_103x130.png"
                      alt="image_Two"
                    />
                    <div className="flex flex-col items-start justify-start mt-[9px]">
                      <Text
                        className="ml-0.5 md:ml-[0] text-orange-A700 text-xs"
                        size="txtMulishBold12"
                      >
                        Marketing
                      </Text>
                      <Text
                        className="mt-[3px] text-base text-blue_gray-900_01"
                        size="txtJostSemiBold16"
                      >
                        Juliana Novaes
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-start ml-8 md:ml-[0] p-[5px] relative rounded-[16px] shadow-bs w-[43%] md:w-full">
              <div className="flex flex-col items-start justify-start mb-1.5 w-[92%] md:w-full">
                <List
                  className="flex flex-col gap-[10.5px] w-[85%]"
                  orientation="vertical"
                >
                  <div className="flex flex-row gap-3 items-start justify-between ml-[7px] my-0 w-[98%] md:w-full">
                    <Img
                      className="h-[102px] md:h-auto object-cover rounded-[16px]"
                      src="images/img_image_102x130.png"
                      alt="image"
                    />
                    <div className="flex flex-col items-start justify-start mt-2.5">
                      <Text
                        className="text-orange-A700 text-xs"
                        size="txtMulishBold12"
                      >
                        POE
                      </Text>
                      <Text
                        className="mt-0.5 text-base text-blue_gray-900_01"
                        size="txtJostSemiBold16"
                      >
                        Geraldo Macêdo
                      </Text>
                    </div>
                  </div>
                  <Line className="self-center h-px bg-blue_gray-200 w-full" />
                  <div className="flex flex-row gap-3 items-start justify-between mr-[7px] my-0 w-[98%] md:w-full">
                    <Img
                      className="h-[102px] md:h-auto object-cover rounded-[16px]"
                      src="images/img_image_1.png"
                      alt="image"
                    />
                    <div className="flex flex-col items-start justify-start mt-[11px]">
                      <Text
                        className="text-orange-A700 text-xs"
                        size="txtMulishBold12"
                      >
                        Java e kotlin
                      </Text>
                      <Text
                        className="text-base text-blue_gray-900_01"
                        size="txtJostSemiBold16"
                      >
                        Geraldo Macêdo
                      </Text>
                    </div>
                  </div>
                  <Line className="self-center h-px bg-blue_gray-200 w-full" />
                  <div className="flex flex-row gap-3 items-start justify-between ml-1 mr-[13px] my-0 w-[94%] md:w-full">
                    <Img
                      className="h-[103px] md:h-auto object-cover rounded-[16px]"
                      src="images/img_image_2.png"
                      alt="image"
                    />
                    <div className="flex flex-col items-start justify-start mt-2.5">
                      <Text
                        className="text-orange-A700 text-xs"
                        size="txtMulishBold12"
                      >
                        Linguagens
                      </Text>
                      <Text
                        className="text-base text-blue_gray-900_01"
                        size="txtJostSemiBold16"
                      >
                        Amanda Barros
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <Button className="bg-indigo-A100 flex h-12 items-center justify-center mb-[95px] md:ml-[0] ml-[41px] md:mt-0 mt-[222px] p-3 rounded-lg w-12">
              <Img
                className="h-6"
                src="images/img_settings_white_a700.svg"
                alt="settings_One"
              />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LightPage;
