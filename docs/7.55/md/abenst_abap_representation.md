---
title: "ST - Representation of ABAP Values"
description: |
  Some ST statements require ABAP values value to be specified, depending on the built-in ABAP type(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuilt_in_types_complete.htm) as a function of the type. In two cases, however, value can also be specified directly. The initial value ca
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_abap_representation.htm"
abapFile: "abenst_abap_representation.htm"
keywords: ["do", "if", "case", "data", "types", "abenst", "abap", "representation"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_st.htm) →  [ST - Serialization and Deserialization](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_serial_deserial.htm) → 

ST - Representation of ABAP Values

Some ST statements require ABAP values value to be specified, depending on the [built-in ABAP type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuilt_in_types_complete.htm) as a function of the type. In two cases, however, value can also be specified directly. The initial value can always be specified regardless of the ABAP type.

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

Time stamp fields (ABAP type utclong)

UTCLONG('value')