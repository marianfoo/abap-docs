  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Transformations for XML](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [ST - Simple Transformations](javascript:call_link\('abenabap_st.htm'\)) → 

ST - Access to ABAP Objects from ST

Classes and objects in ABAP objects can be accessed as follows in ST programs:

-   [tt:call-method, call static methods](javascript:call_link\('abenst_tt_call-method_static.htm'\))

-   [tt:call-method, call instance methods](javascript:call_link\('abenst_tt_call-method_instance.htm'\))

-   [tt:create-object, create objects](javascript:call_link\('abenst_tt_create.htm'\))

Data roots, parameters, and variables can all be bound to the interface parameters at the same time.

Calling methods also allows access to the current XML stream.

-   [tt:call-method, writer, reader](javascript:call_link\('abenst_tt_call-method_writerreader.htm'\))

Note

When you bind data nodes, you must remember that the content of a data root cannot be modified by serialization; only write access is possible to a data root during deserialization. This places a strong restriction on the use of data nodes as actual parameters. Since parameters and attributes for general use cannot be serialized or deserialized (unless they contain an elementary value), methods called from ST programs are mainly suited for editing elementary values (for example, for conversions). You can circumvent this restriction by accessing an ABAP data object bound to a data root in the called method.

Continue
[ST - tt:call-method, Call Static Methods](javascript:call_link\('abenst_tt_call-method_static.htm'\))
[ST - tt:call-method, Calling Instance Methods](javascript:call_link\('abenst_tt_call-method_instance.htm'\))
[ST - tt:create-object, Creating Objects](javascript:call_link\('abenst_tt_create.htm'\))
[ST - tt:call-method, writer, reader, XML Stream](javascript:call_link\('abenst_tt_call-method_writerreader.htm'\))