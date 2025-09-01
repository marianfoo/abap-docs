  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib.htm) →  [iXML - Classes and Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_ixml_lib_object_types.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20iXML%20-%20Downcasts%2C%20ABENIXML_DOWN_CASTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

iXML - Downcasts

For reference variables with the static type of the interfaces IF\_IXML\_... of the iXML Library, the usual [downcasts](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendown_cast_glosry.htm "Glossary Entry") with the [casting operators](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencasting_operator_glosry.htm "Glossary Entry") [?=](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmove_cast.htm) and [CAST](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_cast.htm) can be used for assignments from more general to more specific types. If a downcast fails, the exception CX\_SY\_MOVE\_CAST\_ERROR is raised, which can be handled in a [TRY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptry.htm) control structure as usual.

The method QUERY\_INTERFACE of the interface IF\_IXML\_UNKNOWN included by every object in iXML Library can be used to simplify exception handling:

special\_reference ?= general\_reference->query\_interface( type ).

type can be used to specify the required special type by specifying a constant ixml\_iid... from the type pool IXML. A successful downcast runs as if no method is called. If an error occurs, the exception is handled in the method and an initial reference returned.

Executable Example

[iXML Library, Downcasts](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenixml_casting_abexa.htm)