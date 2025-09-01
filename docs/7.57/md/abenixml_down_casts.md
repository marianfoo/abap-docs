  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Class Libraries](javascript:call_link\('abenabap_xml_libs.htm'\)) →  [iXML Library](javascript:call_link\('abenabap_ixml_lib.htm'\)) →  [iXML - Classes and Interfaces](javascript:call_link\('abenabap_ixml_lib_object_types.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: iXML - Downcasts, ABENIXML_DOWN_CASTS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0AS
uggestion for improvement:)

iXML - Downcasts

For reference variables with the static type of the interfaces IF\_IXML\_... of the iXML Library, the usual [downcasts](javascript:call_link\('abendown_cast_glosry.htm'\) "Glossary Entry") with the [casting operators](javascript:call_link\('abencasting_operator_glosry.htm'\) "Glossary Entry") [?=](javascript:call_link\('abapmove_cast.htm'\)) and [CAST](javascript:call_link\('abenconstructor_expression_cast.htm'\)) can be used for assignments from more general to more specific types. If a downcast fails, the exception CX\_SY\_MOVE\_CAST\_ERROR is raised, which can be handled in a [TRY](javascript:call_link\('abaptry.htm'\)) control structure as usual.

The method QUERY\_INTERFACE of the interface IF\_IXML\_UNKNOWN included by every object in iXML Library can be used to simplify exception handling:

special\_reference ?= general\_reference->query\_interface( type ).

type can be used to specify the required special type by specifying a constant ixml\_iid... from the type pool IXML. A successful downcast runs as if no method is called. If an error occurs, the exception is handled in the method and an initial reference returned.

Executable Example

[iXML Library, Downcasts](javascript:call_link\('abenixml_casting_abexa.htm'\))