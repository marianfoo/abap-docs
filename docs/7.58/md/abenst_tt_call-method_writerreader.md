  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_st.htm) →  [ST - Access to ABAP Objects from ST](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_abap_objects.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ST%20-%20tt%3Acall-method%2C%20writer%2C%20reader%2C%20XML%20Stream%2C%20ABENST_TT_CALL-METHOD_WRITERREADER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0
ASuggestion%20for%20improvement:)

ST - tt:call-method, writer, reader, XML Stream

Syntax

<tt:call-method class="class"*|*var="oref"
                *\[*s-*|*d-*\]*name="meth"
                ...
                writer="p\_writer"
                reader="p\_reader">
  ...
</tt:call-method>

Effect

In the [statistic method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_tt_call-method_static.htm) or [instance method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_tt_call-method_instance.htm) called from an ST program, the attributes writer and reader can be used to access the current XML stream where the serialization or deserialization is currently taking place.

The called method meth must have an optional parameter with the reference type IF\_SXML\_WRITER or IF\_SXML\_READER, depending on the direction of transformation. The name of this parameter can be specified after the writer or reader attributes. In serialization, the p\_writer parameter is passed a reference to the current writer stream. In deserialization, the parameter of type p\_reader is passed a reference to the current reader stream. In the method meth, these parameters can be used to work with the XML stream.