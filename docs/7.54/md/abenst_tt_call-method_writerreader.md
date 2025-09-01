  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Transformations for XML](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [ST - Simple Transformations](javascript:call_link\('abenabap_st.htm'\)) →  [ST - Access to ABAP Objects from ST](javascript:call_link\('abenst_abap_objects.htm'\)) → 

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

In the [statistic method](javascript:call_link\('abenst_tt_call-method_static.htm'\)) or [instance method](javascript:call_link\('abenst_tt_call-method_instance.htm'\)) called from an ST program, the attributes writer and reader can be used to access the XML stream where the serialization or deserialization is taking place.

The called method meth must have an optional parameter with the reference type IF\_SXML\_WRITER or IF\_SXML\_READER, depending on the direction of transformation. The name of this parameter can be specified after the writer or reader attributes. In serialization, the p\_writer parameter is passed a reference to the current writer stream; in deserialization, the parameter of type p\_reader is passed a reference to the current reader stream. In the method meth, these parameters can be used to work with the XML stream.