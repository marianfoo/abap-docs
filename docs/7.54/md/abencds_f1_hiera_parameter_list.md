  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE HIERARCHY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_hierarchy.htm) → 

ABAP CDS - DEFINE HIERARCHY, parameter\_list

Syntax

... WITH PARAMETERS [parameter1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm), [parameter2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm), ...

Effect

Defines [CDS parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_parameter_glosry.htm "Glossary Entry") [parameter1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm), [parameter2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm), ... as input parameters of a [CDS table hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry") in a comma-separated list.

An input parameter called pname can be used as an operand in the following places of the [DEFINE HIERARCHY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_hierarchy.htm) statement using the same syntax as in the CDS views [:pname](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter.htm) or [$parameters.pname](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter.htm):

-   As operands after [VALID FROM ... TO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_hierarchy.htm) in the addition PERIOD.

-   As an operand on the right side of the start condition after [START WHERE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_hierarchy.htm).

-   As an operand on the right side of the directory condition after [DIRECTORY FILTER BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_hierarchy.htm).

-   As an operand after [DEPTH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_hierarchy.htm).

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