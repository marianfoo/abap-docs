  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE ABSTRACT ENTITY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_abstract_entity.htm) →  [ABAP CDS - DEFINE ABSTRACT ENTITY, element\_list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_absent_element_list.htm) →  [ABAP CDS - DEFINE ABSTRACT ENTITY, element](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_absent_list_element.htm) → 

ABAP CDS - DEFINE ABSTRACT ENTITY, association

Syntax

... ASSOCIATION *\[* \[min..max\] *\]* TO target ON [cond\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_conditional_expression.htm)
                *\[* WITH DEFAULT FILTER [cond\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_conditional_expression.htm) *\]* ...

Effect

Defines and publishes a [CDS association](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_association_glosry.htm "Glossary Entry") in the [element list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_absent_element_list.htm) of an [abstract CDS entity](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabstract_entity_glosry.htm "Glossary Entry"). The association uses an ON condition to associate the current CDS entity with a target data source target. The syntax has basically the same meaning as the addition [ASSOCIATION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_association.htm) in the [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_statement.htm) statement of a [CDS view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_view_glosry.htm "Glossary Entry") with the following exceptions:

-   The addition AS \_assoc is not used. The association is declared using the name \_assoc, after which the addition ASSOCIATION is specified in the element list.

-   No [session variables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensession_variable_glosry.htm "Glossary Entry") can be used in the conditions [cond\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_conditional_expression.htm).

-   The prefix $projection, used to make reference to an element in the element list, is not supported.

An association defined using the addition ASSOCIATION in the element list of an abstract CDS entity is always published. It cannot, however, be used in any [CDS path expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_path_expression_glosry.htm "Glossary Entry"), either in ABAP CDS or in ABAP SQL.

Note

An association of an abstract CDS entity cannot be used anywhere where it could produce instances of join expressions.

Example

The following DDL source code shows an abstract CDS entity that publishes an association with another abstract CDS entity:

define abstract entity demo\_cds\_abstract\_entity\_assoc
  {
    key key\_col: abap.char(3);
        \_assoc : association \[1..1\] to demo\_cds\_abstract\_entity on
                   demo\_cds\_abstract\_entity\_assoc.key\_col = \_assoc.col1;
  }