---
title: "ST - Access to ABAP Objects from ST"
description: |
  Classes and objects in ABAP objects can be accessed as follows in ST programs: -   tt:call-method, call static methods(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_call-method_static.htm) -   tt:call-method, call instance methods(https://help.sap.com/doc/abapdocu_752_inde
version: "7.52"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_abap_objects.htm"
abapFile: "abenst_abap_objects.htm"
keywords: ["do", "if", "method", "class", "data", "abenst", "abap", "objects"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml.htm) →  [Transformations for XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml_trafos.htm) →  [ST - Simple Transformations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_st.htm) → 

ST - Access to ABAP Objects from ST

Classes and objects in ABAP objects can be accessed as follows in ST programs:

-   [tt:call-method, call static methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_call-method_static.htm)

-   [tt:call-method, call instance methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_call-method_instance.htm)

-   [tt:create-object, create objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_create.htm)

Data roots, parameters, and variables can all be bound to the interface parameters at the same time.

Calling methods also allows access to the current XML stream.

-   [tt:call-method, writer, reader](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_call-method_writerreader.htm)

Note

When you bind data nodes, you must remember that the content of a data root cannot be modified by serialization; only write access is possible to a data root during deserialization. This places a strong restriction on the use of data nodes as actual parameters. Since parameters and attributes for general use cannot be serialized or deserialized (unless they contain an elementary value), methods called from ST programs are mainly suited for editing elementary values (for example, for conversions). You can circumvent this restriction by accessing an ABAP data object bound to a data root in the called method.

Continue
[ST - tt:call-method, Call Static Methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_call-method_static.htm)
[ST - tt:call-method, Calling Instance Methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_call-method_instance.htm)
[ST - tt:create-object, Creating Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_create.htm)
[ST - tt:call-method, writer, reader, XML Stream](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_call-method_writerreader.htm)