import React, {useState, useEffect} from 'react';
import {List} from 'react-native-paper';
import {getCalendarioLetivo, address} from '../../config';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import Styles from './assets/styles/Styles';

const CalendarioLetivo = () => {
  const [data, setData] = useState([]);

  const URL = address + getCalendarioLetivo;

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(json => {
        setData(json.planCurr);
      })
      .catch(error => {
        throw error;
      });
  }, [URL]);

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index}
          renderItem={({item, index}) => (
            <>
              <View>
                <List.Section>
                  <List.Accordion
                    title="Períodos"
                    left={props => <List.Icon {...props} icon="calendar" />}>
                    <List.Item
                      left={() => (
                        <View style={Styles.container}>
                          <Text style={Styles.text_Introduction}>
                            Primeiro Semestre:
                          </Text>
                          <Text style={Styles.text}>
                            {item.Periodos.PrimeiroSemestre}
                          </Text>
                        </View>
                      )}
                    />
                    <List.Item
                      left={() => (
                        <View style={Styles.container}>
                          <Text style={Styles.text_Introduction}>
                            Segundo Semestre:
                          </Text>
                          <Text style={Styles.text}>
                            {item.Periodos.SegundoSemestre}
                          </Text>
                        </View>
                      )}
                    />
                  </List.Accordion>

                  <List.Accordion
                    title="Paragem Letiva"
                    left={props => <List.Icon {...props} icon="calendar" />}>
                    <List.Item
                      left={() => (
                        <View style={Styles.container}>
                          <Text style={Styles.text_Introduction}>Natal:</Text>
                          <Text style={Styles.text}>
                            {item.ParagemLetiva.Natal}
                          </Text>
                        </View>
                      )}
                    />
                    <List.Item
                      left={() => (
                        <View style={Styles.container}>
                          <Text style={Styles.text_Introduction}>
                            Carnaval:
                          </Text>
                          <Text style={Styles.text}>
                            {item.ParagemLetiva.Carnaval}
                          </Text>
                        </View>
                      )}
                    />
                    <List.Item
                      left={() => (
                        <View style={Styles.container}>
                          <Text style={Styles.text_Introduction}>Páscoa:</Text>
                          <Text style={Styles.text}>
                            {item.ParagemLetiva.Pascoa}
                          </Text>
                        </View>
                      )}
                    />
                    <List.Item
                      left={() => (
                        <View style={Styles.container}>
                          <Text style={Styles.text_Introduction}>
                            Semana Académica:
                          </Text>
                          <Text style={Styles.text}>
                            {item.ParagemLetiva.SemanaAcademica}
                          </Text>
                        </View>
                      )}
                    />
                  </List.Accordion>

                  <List.Accordion
                    title="Feriados"
                    left={props => <List.Icon {...props} icon="calendar" />}>
                    <List.Accordion
                      left={() => (
                        <Text style={Styles.text_Introduction}>
                          Primeiro Semestre
                        </Text>
                      )}>
                      <List.Item
                        left={() => (
                          <Text style={Styles.text}>
                            {item.Feriados.PrimeiroSemestre.join('\n')}
                          </Text>
                        )}
                      />
                    </List.Accordion>
                    <List.Accordion
                      left={() => (
                        <Text style={Styles.text_Introduction}>
                          Segundo Semestre
                        </Text>
                      )}>
                      <List.Item
                        left={() => (
                          <Text style={Styles.text}>
                            {item.Feriados.SegundoSemestre.join('\n')}
                          </Text>
                        )}
                      />
                    </List.Accordion>
                  </List.Accordion>

                  <List.Accordion
                    title="Pagamento de Propinas"
                    left={props => <List.Icon {...props} icon="calendar" />}>
                    <List.Item
                      left={() => (
                        <View style={Styles.container}>
                          <Text style={Styles.text_Introduction}>
                            Primeira prestação:
                          </Text>
                          <Text style={Styles.text}>
                            {item.PagamentodePropinas.PrimeiraPrestacao}
                          </Text>
                        </View>
                      )}
                    />
                    <List.Item
                      left={() => (
                        <View style={Styles.container}>
                          <Text style={Styles.text_Introduction}>
                            Restantes Prestações:
                          </Text>
                          <Text style={Styles.text}>
                            {item.PagamentodePropinas.Restantesprestacoes}
                          </Text>
                        </View>
                      )}
                    />
                  </List.Accordion>

                  <List.Accordion
                    title="Dias Comemorativos"
                    left={props => <List.Icon {...props} icon="calendar" />}>
                    <List.Item
                      left={() => (
                        <View style={Styles.container}>
                          <Text style={Styles.text_Introduction}>IPVC:</Text>
                          <Text style={Styles.text}>
                            {item.DiasComemorativos.IPVC}
                          </Text>
                        </View>
                      )}
                    />
                    <List.Item
                      left={() => (
                        <View style={Styles.container}>
                          <Text style={Styles.text_Introduction}>ESE:</Text>
                          <Text style={Styles.text}>
                            {item.DiasComemorativos.ESE}
                          </Text>
                        </View>
                      )}
                    />
                    <List.Item
                      left={() => (
                        <View style={Styles.container}>
                          <Text style={Styles.text_Introduction}>ESA:</Text>
                          <Text style={Styles.text}>
                            {item.DiasComemorativos.ESA}
                          </Text>
                        </View>
                      )}
                    />
                    <List.Item
                      left={() => (
                        <View style={Styles.container}>
                          <Text style={Styles.text_Introduction}>ESTG:</Text>
                          <Text style={Styles.text}>
                            {item.DiasComemorativos.ESTG}
                          </Text>
                        </View>
                      )}
                    />
                    <List.Item
                      left={() => (
                        <View style={Styles.container}>
                          <Text style={Styles.text_Introduction}>ESCE:</Text>
                          <Text style={Styles.text}>
                            {item.DiasComemorativos.ESCE}
                          </Text>
                        </View>
                      )}
                    />
                    <List.Item
                      left={() => (
                        <View style={Styles.container}>
                          <Text style={Styles.text_Introduction}>ESS:</Text>
                          <Text style={Styles.text}>
                            {item.DiasComemorativos.ESS}
                          </Text>
                        </View>
                      )}
                    />
                    <List.Item
                      left={() => (
                        <View style={Styles.container}>
                          <Text style={Styles.text_Introduction}>ESDL:</Text>
                          <Text style={Styles.text}>
                            {item.DiasComemorativos.ESDL}
                          </Text>
                        </View>
                      )}
                    />
                  </List.Accordion>

                  <List.Accordion
                    title="Período de Exames"
                    left={props => <List.Icon {...props} icon="calendar" />}>
                    <List.Accordion
                      left={() => (
                        <Text style={Styles.text_Introduction}>
                          Época Normal e Época de Recurso
                        </Text>
                      )}>
                      <List.Item
                        left={() => (
                          <View style={Styles.container}>
                            <Text style={Styles.text_Introduction}>
                              Primeiro Semestre:
                            </Text>
                            <Text style={Styles.text}>
                              {
                                item.PeriododeExames.EpocanormaleEpocadeRecurso
                                  .PrimeiroSemestre
                              }
                            </Text>
                          </View>
                        )}
                      />
                      <List.Item
                        left={() => (
                          <View style={Styles.container}>
                            <Text style={Styles.text_Introduction}>
                              Segundo Semestre:
                            </Text>
                            <Text style={Styles.text}>
                              {
                                item.PeriododeExames.EpocanormaleEpocadeRecurso
                                  .SegundoSemestre
                              }
                            </Text>
                          </View>
                        )}
                      />
                    </List.Accordion>
                    <List.Accordion
                      left={() => (
                        <Text style={Styles.text_Introduction}>
                          Época Especial
                        </Text>
                      )}>
                      <List.Item
                        left={() => (
                          <View style={Styles.container}>
                            <Text style={Styles.text}>
                              {item.PeriododeExames.EpocaEspecial}
                            </Text>
                          </View>
                        )}
                      />
                    </List.Accordion>
                  </List.Accordion>
                </List.Section>
              </View>
            </>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default CalendarioLetivo;
