  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml.htm) →  [Transformations for XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml_trafos.htm) →  [ST - Simple Transformations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_st.htm) →  [ST - Serialization and Deserialization](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_serial_deserial.htm) → 

ST - Representation of ABAP Values

Some ST commands require ABAP values value to be specified, depending on the [predefined ABAP type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_types_complete.htm) as a function of the type. In two cases, however, value can also be specified directly. The initial value can always be specified regardless of the ABAP type.

Data Type

Representation

Initial value (all ABAP types)

Initial

4 byte integer (ABAP type i)

I(value) *|* value

8 byte integer (ABAP type int8)

INT8(value)

Binary floating point numbers (ABAP type f)

F('value')

Byte strings (ABAP types x and xstring)

X('value')

Decimal floating point numbers (ABAP types decfloat16, decfloat34)

DECFLOAT16('value'), DECFLOAT34('value')

Packed numbers (ABAP type p)

P(value)

Numeric text fields (ABAP type n)

N('value')

Character strings (ABAP types c and string)

C('value') *|* 'value'

Date fields and time fields (ABAP types d and t)

D('value'), T('value')