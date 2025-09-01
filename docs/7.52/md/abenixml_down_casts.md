  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml.htm) →  [Class Libraries for XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib.htm) →  [iXML Library - Classes and Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib_object_types.htm) → 

iXML Library - Down Casts

For reference variables with the static type of the interfaces IF\_IXML\_... in iXML Library, the usual [down casts](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendown_cast_glosry.htm "Glossary Entry") with the [casting operators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencasting_operator_glosry.htm "Glossary Entry") [?=](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmove_cast.htm) and [CAST](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_cast.htm) can be used for assignments from more general to more specific types. If a down cast fails, the exception CX\_SY\_MOVE\_CAST\_ERROR is raised, which can be handled in a [TRY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptry.htm) control structure (as usual).

The method QUERY\_INTERFACE of the interface IF\_IXML\_UNKNOWN (implemented by every object in iXML Library) can be used to make handling of exceptions simpler:

special\_reference ?= general\_reference->query\_interface( type ).

type can be used to specify the required special type by specifying a constant ixml\_iid... from the type group IXML. A successful down cast runs as if no method is called. If an error occurs, the exception is handled in the method and an initial reference returned.

Executable Example

[iXML Library, Down Casts](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenixml_casting_abexa.htm)