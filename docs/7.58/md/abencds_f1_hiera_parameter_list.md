  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Hierarchies](javascript:call_link\('abencds_hierarchies.htm'\)) →  [CDS DDL - DEFINE HIERARCHY](javascript:call_link\('abencds_f1_define_hierarchy.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DEFINE%20HIERARCHY%2C%20parameter_list%2C%20ABENCDS_F1_HIERA_PARAMETER_LIST%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20fo
r%20improvement:)

CDS DDL - DEFINE HIERARCHY, parameter\_list

Syntax

... WITH PARAMETERS [parameter1](javascript:call_link\('abencds_f1_param.htm'\)), [parameter2](javascript:call_link\('abencds_f1_param.htm'\)), ...

Effect

Defines [CDS parameters](javascript:call_link\('abencds_parameter_glosry.htm'\) "Glossary Entry") [parameter1](javascript:call_link\('abencds_f1_param.htm'\)), [parameter2](javascript:call_link\('abencds_f1_param.htm'\)), ... as input parameters of a [CDS table hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry") in a comma-separated list.

An input parameter called pname can be used as an operand in the following places of the [DEFINE HIERARCHY](javascript:call_link\('abencds_f1_define_hierarchy.htm'\)) statement using the same syntax [:pname](javascript:call_link\('abencds_parameter_v1.htm'\)) or [$parameters.pname](javascript:call_link\('abencds_parameter_v1.htm'\)) as in CDS DDIC-based views (obsolete):

-   As operands after [VALID FROM ... TO](javascript:call_link\('abencds_f1_define_hierarchy.htm'\)) in the addition PERIOD.
-   As an operand on the right side of the start condition after [START WHERE](javascript:call_link\('abencds_f1_define_hierarchy.htm'\)).
-   As an operand on the right side of the directory condition after [DIRECTORY FILTER BY](javascript:call_link\('abencds_f1_define_hierarchy.htm'\)).
-   As an operand after [DEPTH](javascript:call_link\('abencds_f1_define_hierarchy.htm'\)).

Example

Defines an input parameter in a CDS hierarchy and its use after START WHERE. The class CL\_DEMO\_HIERARCHY\_TREE accesses the CDS hierarchy and passes an actual parameter to the input parameter.

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