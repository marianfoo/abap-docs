  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_entity.htm) →  [ABAP CDS - Abstract Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_abstract_entities.htm) →  [CDS DDL - DEFINE ABSTRACT ENTITY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_abstract_entity.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - DEFINE ABSTRACT ENTITY, element_list, ABENCDS_F1_ABSENT_ELEMENT_LIST, 757%0
D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - DEFINE ABSTRACT ENTITY, element\_list

Syntax

... { [element1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_absent_list_element.htm); [element2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_absent_list_element.htm); ...; } ...

Effect

Defines the elements of an [CDS abstract entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry"). The elements are specified in a semicolon-separated list [element1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_absent_list_element.htm); [element2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_absent_list_element.htm); ...; in curly brackets { }. The final element must also be followed by a semicolon.

The elements either determine the components of the structured data type represented by a CDS abstract entity with respect to ABAP or they exposes a CDS association, a CDS composition, or a CDS-to-parent association.

The ABAP data types of the components of the structured data type are derived from the dictionary types of the elements in accordance with the associated [mapping rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm).

Continue
[CDS DDL - DEFINE ABSTRACT ENTITY, element](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_absent_list_element.htm)