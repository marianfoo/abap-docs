  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_entity.htm) →  [ABAP CDS - Abstract Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_abstract_entities.htm) →  [CDS DDL - DEFINE ABSTRACT ENTITY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_abstract_entity.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DEFINE%20ABSTRACT%20ENTITY%2C%20parameter_list%2C%20ABENCDS_F1_ENTITY_PARAMETER_LIST%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugges
tion%20for%20improvement:)

CDS DDL - DEFINE ABSTRACT ENTITY, parameter\_list

Syntax

... WITH PARAMETERS [parameter1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_param.htm), [parameter2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_param.htm), ...

Effect

Defines [CDS parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_parameter_glosry.htm "Glossary Entry") [parameter1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_param.htm), [parameter2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_param.htm), ... as input parameters of an [CDS abstract entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry") in a comma-separated list.

Currently, input parameters called pname are used only to model the interface of an abstract entity. They cannot be used as operands in the CDS abstract entity.

Hint

An input parameter cannot be specified as an element in the element list.

Example

The following DDL source code shows a CDS abstract entity with input parameters:

define abstract entity demo\_cds\_abstract\_entity\_para
  with parameters
    @EndUserText.label: 'Date parameter'
    p1 : abap.dats,
    @EndUserText.label: 'Integer parameter'
    p2 : abap.int4,
    @EndUserText.label: 'Simple type parameter'
    p3 : DEMO\_BT\_CHAR\_TEXT
  {
    key col1 : abap.char(3);
        col2 : abap.int4;
  }

The class CL\_DEMO\_CDS\_ABSTRCT\_ENTTY\_PARA shows that the parameter annotations of the CDS abstract entity can be [evaluated](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_analysis.htm) using the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.