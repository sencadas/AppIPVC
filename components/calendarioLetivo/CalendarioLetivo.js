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
        console.log(json.planCurr);
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
                        <Text style={Styles.text}>
                          {'Primeiro Semestre: ' +
                            item.Periodos.PrimeiroSemestre}
                        </Text>
                      )}
                    />
                    <List.Item
                      left={() => (
                        <Text style={Styles.text}>
                          {'Segundo Semestre: ' + item.Periodos.SegundoSemestre}
                        </Text>
                      )}
                    />
                  </List.Accordion>

                  <List.Accordion
                    title="Paragem Letiva"
                    left={props => <List.Icon {...props} icon="calendar" />}>
                    <List.Item
                      left={() => (
                        <Text style={Styles.text}>
                          {'Natal: ' + item.ParagemLetiva.Natal}
                        </Text>
                      )}
                    />
                    <List.Item
                      left={() => (
                        <Text style={Styles.text}>
                          {'Carnaval: ' + item.ParagemLetiva.Carnaval}
                        </Text>
                      )}
                    />
                    <List.Item
                      left={() => (
                        <Text style={Styles.text}>
                          {'Páscoa: ' + item.ParagemLetiva.Pascoa}
                        </Text>
                      )}
                    />
                    <List.Item
                      left={() => (
                        <Text style={Styles.text}>
                          {'Semana Académica: ' +
                            item.ParagemLetiva.SemanaAcademica}
                        </Text>
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
                        <Text style={Styles.text}>
                          {'Primeira prestação: ' +
                            item.PagamentodePropinas.PrimeiraPrestacao}
                        </Text>
                      )}
                    />
                    <List.Item
                      left={() => (
                        <Text style={Styles.text}>
                          {'Restantes Prestações: ' +
                            item.PagamentodePropinas.Restantesprestacoes}
                        </Text>
                      )}
                    />
                  </List.Accordion>

                  <List.Accordion
                    title="Dias Comemorativos"
                    left={props => <List.Icon {...props} icon="calendar" />}>
                    <List.Item
                      left={() => (
                        <Text style={Styles.text}>
                          {'IPVC: ' + item.DiasComemorativos.IPVC}
                        </Text>
                      )}
                    />
                    <List.Item
                      left={() => (
                        <Text style={Styles.text}>
                          {'ESE: ' + item.DiasComemorativos.ESE}
                        </Text>
                      )}
                    />
                    <List.Item
                      left={() => (
                        <Text style={Styles.text}>
                          {'ESA: ' + item.DiasComemorativos.ESA}
                        </Text>
                      )}
                    />
                    <List.Item
                      left={() => (
                        <Text style={Styles.text}>
                          {'ESTG: ' + item.DiasComemorativos.ESTG}
                        </Text>
                      )}
                    />
                    <List.Item
                      left={() => (
                        <Text style={Styles.text}>
                          {'ESCE: ' + item.DiasComemorativos.ESCE}
                        </Text>
                      )}
                    />
                    <List.Item
                      left={() => (
                        <Text style={Styles.text}>
                          {'ESS: ' + item.DiasComemorativos.ESS}
                        </Text>
                      )}
                    />
                    <List.Item
                      left={() => (
                        <Text style={Styles.text}>
                          {'ESDL: ' + item.DiasComemorativos.ESDL}
                        </Text>
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
                      <>
                        <Text style={Styles.text_Introduction}>
                          {'Primeiro Semestre: '}
                        </Text>
                        <Text style={Styles.text}>
                          {
                            item.PeriododeExames.EpocanormaleEpocadeRecurso
                              .PrimeiroSemestre
                          }
                        </Text>
                      </>
                      <List.Item
                        left={() => (
                          <View style={Styles.container}>
                            <Text style={Styles.text_Introduction}>
                              {'Segundo Semestre: '}
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
                      <View style={Styles.container}>
                        <Text style={Styles.text}>
                          {item.PeriododeExames.EpocaEspecial}
                        </Text>
                      </View>
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
