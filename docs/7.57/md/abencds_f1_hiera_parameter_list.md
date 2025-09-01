  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_entity.htm) →  [ABAP CDS - Hierarchies](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_hierarchies.htm) →  [CDS DDL - DEFINE HIERARCHY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_hierarchy.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - DEFINE HIERARCHY, parameter_list, ABENCDS_F1_HIERA_PARAMETER_LIST, 757%0D%0
A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - DEFINE HIERARCHY, parameter\_list

Syntax

... WITH PARAMETERS [parameter1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_param.htm), [parameter2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_param.htm), ...

Effect

Defines [CDS parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_parameter_glosry.htm "Glossary Entry") [parameter1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_param.htm), [parameter2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_param.htm), ... as input parameters of a [CDS table hierarchy](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_hierarchy_glosry.htm "Glossary Entry") in a comma-separated list.

An input parameter called pname can be used as an operand in the following places of the [DEFINE HIERARCHY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_hierarchy.htm) statement using the same syntax [:pname](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_parameter_v1.htm) or [$parameters.pname](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_parameter_v1.htm) as in CDS DDIC-based views (obsolete):

-   As operands after [VALID FROM ... TO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_hierarchy.htm) in the addition PERIOD.
-   As an operand on the right side of the start condition after [START WHERE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_hierarchy.htm).
-   As an operand on the right side of the directory condition after [DIRECTORY FILTER BY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_hierarchy.htm).
-   As an operand after [DEPTH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_hierarchy.htm).

Example

Defines an input parameter in a CDS hierarchy and its use after START WHERE. The program DEMO\_HIERARCHY\_TREE accesses the CDS hierarchy and passes an actual parameter to the input parameter.

define hierarchy DEMO\_CDS\_SIMPLE\_TREE
  with parameters
    p\_id : abap.int4
  as parent child hierarchy(
    source
      DEMO\_CDS\_SIMPLE\_TREE\_SOURCE
      child to parent association \_tree
      start where
        id = :p\_id
      siblings order by
        id ascending
    )
    {
      id,
      parent,
      name
    }