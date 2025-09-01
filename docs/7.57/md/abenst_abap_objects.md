  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Transformations](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [Simple Transformations (ST)](javascript:call_link\('abenabap_st.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ST - Access to ABAP Objects from ST, ABENST_ABAP_OBJECTS, 757%0D%0A%0D%0AError:%0D%0A
%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ST - Access to ABAP Objects from ST

Classes and objects in ABAP Objects can be accessed as follows in ST programs:

-   [tt:call-method, call static methods](javascript:call_link\('abenst_tt_call-method_static.htm'\))
-   [tt:call-method, call instance methods](javascript:call_link\('abenst_tt_call-method_instance.htm'\))
-   [tt:create-object, create objects](javascript:call_link\('abenst_tt_create.htm'\))

Data roots, parameters, and variables can all be bound to the interface parameters at the same time.

The call of methods also allows access to the current XML stream.

-   [tt:call-method, writer, reader](javascript:call_link\('abenst_tt_call-method_writerreader.htm'\))

Hint

When binding data nodes, it must be noted that the content of a data root cannot be modified in serializations and only writes can be performed on a data root in deserializations. This places a strong restriction on the use of data nodes as actual parameters. Since parameters and attributes for general use cannot be serialized or deserialized, unless they contain an elementary value, methods called from ST programs are mainly suited for processing elementary values, such as conversions. This restriction can be bypassed by accessing an ABAP data object bound to a data root in the called method.

Continue
[ST - tt:call-method, Calling Static Methods](javascript:call_link\('abenst_tt_call-method_static.htm'\))
[ST - tt:call-method, Calling Instance Methods](javascript:call_link\('abenst_tt_call-method_instance.htm'\))
[ST - tt:create-object, Create Objects](javascript:call_link\('abenst_tt_create.htm'\))
[ST - tt:call-method, writer, reader, XML Stream](javascript:call_link\('abenst_tt_call-method_writerreader.htm'\))