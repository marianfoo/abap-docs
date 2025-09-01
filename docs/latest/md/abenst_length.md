---
title: "ST - length, minLength, maxLength, Specified Length"
description: |
  Syntax ... length='len' ... ... minLength='len' ... ... maxLength='len' ... Effect The attributes length, minLength, and maxLength can be used to specify a length len for tt:value(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_value_elementary.htm), tt:write(https://he
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_length.htm"
abapFile: "abenst_length.htm"
keywords: ["do", "if", "try", "catch", "data", "types", "abenst", "length"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_st.htm) →  [ST - Serialization and Deserialization](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_serial_deserial.htm) →  [ST - Transformation of ABAP Values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_abap_values.htm) →  [ST - tt:value, Elementary Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_value_elementary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ST%20-%20length%2C%20minLength%2C%20maxLength%2C%20Specified%20Length%2C%20ABENST_LENGTH%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%2
0improvement:)

ST - length, minLength, maxLength, Specified Length

Syntax

... length="len" ...
... minLength="len" ...
... maxLength="len" ...

Effect

The attributes length, minLength, and maxLength can be used to specify a length len for [tt:value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_value_elementary.htm), [tt:write](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_write.htm), and [tt:read](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_read.htm). This restricts the length of the data to be passed in serializations and deserializations.

Positive integers can be specified for len. Lengths can be specified for data nodes or variables with the ABAP types c, x, string, and xstring. Any other data types ignore any length specifications.

Specifying the length attribute always affects tt:value and tt:write as if minLength and maxLength were listed at the same time with the value specified for len.

Serialization   

The minLength or length attribute defines the resulting XML value as representing at least the number of characters or bytes defined in len. If a passed value contains fewer characters, or bytes, it is filled on the right with blanks or 0x00 until it is of the specified length and an XML value is created. The maxLength or length attribute defines the maximum number of characters or bytes that can be passed. If the XML value to be serialized contains more characters or bytes than specified by len, the exception CX\_ST\_CONSTRAINT\_ERROR is raised, unless only trailing blanks or zero bytes in a serialization of a data object with type c or x are affected.

Deserialization   

The minLength attribute is ignored by deserialization. The maxLength or length attribute defines the maximum number of characters or bytes expected in the XML value. If the XML value to be deserialized contains more characters or bytes than specified by len, the exception CX\_ST\_CONSTRAINT\_ERROR is raised, unless only trailing blanks or zero bytes in a deserialization to a data object with type c or x are affected.

Hint

Exception CX\_ST\_CONSTRAINT\_ERROR cannot be caught directly during the call of CALL TRANSFORMATION, instead it is wrapped in CX\_ST\_SERIALIZATION\_ERROR or CX\_ST\_DESERIALIZATION\_ERROR.

Example

The following transformation DEMO\_ST\_SPECIFIED\_LENGTH performs serializations and deserializations with differing lengths:

<?sap.transform simple?>
<tt:transform xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT"/>
  <tt:template>
    <tt:serialize>
      <Text>
        <tt:value length="8" ref="ROOT"/>
      </Text>
    </tt:serialize>
    <tt:deserialize>
      <Text>
        <tt:value length="4" ref="ROOT"/>
      </Text>
    </tt:deserialize>
  </tt:template>
</tt:transform>

The following ABAP program can call the transformation:

DATA: text        TYPE string VALUE \`1234\`,
      xml\_xstring TYPE string,
      exc\_trafo   TYPE REF TO cx\_transformation\_error,
      exc\_prev    TYPE REF TO cx\_root.
CALL TRANSFORMATION demo\_st\_specified\_length SOURCE root = text
                        RESULT XML xml\_xstring.
cl\_abap\_browser=>show\_xml( xml\_string = xml\_xstring ).
TRY.
    CALL TRANSFORMATION demo\_st\_specified\_length SOURCE XML xml\_xstring
                            RESULT root = text.
  CATCH cx\_st\_deserialization\_error INTO exc\_trafo.
    ...
    IF exc\_trafo->previous IS NOT INITIAL.
      exc\_prev = exc\_trafo->previous.
      ...
    ENDIF.
ENDTRY.

The result of the transformation is:

<Text>1234    </Text>

Since more characters are passed by the deserialization than expected, the exception CX\_ST\_CONSTRAINT\_ERROR is raised, which is wrapped in the exception CX\_ST\_DESERIALIZATION\_ERROR.