# ABAP - Keyword Documentation / ABAP - Release News / News for Release 7.5x / News for Release 7.56

Included pages: 15


### abennews-756.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-75.htm) → 

News for Release 7.56

The kernel release for Release 7.56 is 7.85.

-   [ABAP Dictionary in Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756-ddic.htm)
-   [ABAP CDS in Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756-abap_cds.htm)
-   [Object Component Selector in Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756-obj_comp_selector.htm)
-   [Data References in Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756-dref.htm)
-   [String Processing in Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756-strings.htm)
-   [Internal Tables in Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756-itab.htm)
-   [ABAP CDS Access Control in Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756-cds_access_control.htm)
-   [ABAP Keyword Documentation in Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756-abap_docu.htm)
-   [ABAP RESTful Application Programming Model in Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756-restful.htm)

Continue
[ABAP Dictionary in Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756-ddic.htm)
[ABAP CDS in Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756-abap_cds.htm)
[Object Component Selector in Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756-obj_comp_selector.htm)
[Data References in Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756-dref.htm)
[String Processing in Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756-strings.htm)
[Internal Tables in Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756-itab.htm)
[ABAP CDS Access Control in Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756-cds_access_control.htm)
[ABAP Keyword Documentation in Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756-abap_docu.htm)
[ABAP RESTful Application Programming Model in Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756-restful.htm)


### abennews-756-ddic.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-75.htm) →  [News for Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756.htm) → 

ABAP Dictionary in Release 7.56

Modification

Extension for Load Unit

In ABAP Dictionary, the [load unit](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_load_unit.htm) has been extended. There are now the following settings available:

-   Column Preferred
-   Page Preferred
-   Column Enforced
-   Page Enforced


### abennews-756-abap_cds.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-75.htm) →  [News for Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756.htm) → 

ABAP CDS in Release 7.56

[1\. CDS Abstract Entity Extensions](#!ABAP_MODIFICATION_1@1@)
[2\. CDS Abstract Entity, to-parent association](#!ABAP_MODIFICATION_2@2@)
[3\. CDS Hierarchy, caching policy](#!ABAP_MODIFICATION_3@3@)
[4\. CDS View Entity, reusing expressions](#!ABAP_MODIFICATION_4@4@)
[5\. CDS View Entity, UNION clause](#!ABAP_MODIFICATION_5@5@)
[6\. CDS View Entity, DISTINCT](#!ABAP_MODIFICATION_6@6@)
[7\. CDS View Entity, new set operators](#!ABAP_MODIFICATION_7@7@)
[8\. CDS View Entity, new conversion functions](#!ABAP_MODIFICATION_8@8@)
[9\. CDS View Entity, typed literals](#!ABAP_MODIFICATION_9@9@)
[10\. CDS View Entity, Handling of Amounts and Quantities](#!ABAP_MODIFICATION_10@10@)
[11\. CDS View Entity, extended expression matrix](#!ABAP_MODIFICATION_11@11@)
[12\. CDS Projection View, REDEFINE ASSOCIATION](#!ABAP_MODIFICATION_12@12@)
[13\. CDS Projection View, PROVIDER CONTRACT](#!ABAP_MODIFICATION_13@13@)
[14\. ABAP program for migration analysis](#!ABAP_MODIFICATION_14@14@)
[15\. Migration tool for CDS views](#!ABAP_MODIFICATION_15@15@)
[16\. New reference type for annotations](#!ABAP_MODIFICATION_16@16@)

Modification 1   

CDS Abstract Entity Extensions

The new statement [EXTEND ABSTRACT ENTITY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_extend_abstract_entity.htm) of the DDL of ABAP CDS makes it possible to add new elements to existing [CDS abstract entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry") by using [CDS abstract entity extensions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_abs_entity_extend_glosry.htm "Glossary Entry").

Modification 2   

CDS Abstract Entity, to-parent association

In [CDS abstract entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry"), it is now possible to define [to-parent associations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abento_parent_association_glosry.htm "Glossary Entry") without ON condition. The ON condition can be left out if the association target is also a CDS abstract entity.

Modification 3   

CDS Hierarchy, caching policy

A hierarchy definition [DEFINE HIERARCHY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_hierarchy.htm) can now use the new addition CACHE ON*|*OFF*|*FORCE to specify the caching policy for a generated hierarchy.

Modification 4   

CDS View Entity, reusing expressions

In [CDS view entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), it is now possible to reuse expressions defined in the SELECT list in other operand positions of the same CDS view entity by using the syntax [$projection.reuse\_exp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_reusable_expression_v2.htm).

Modification 5   

CDS View Entity, UNION clause

[UNION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_union_v2.htm) clauses are now supported in [CDS view entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_view_glosry.htm "Glossary Entry"). There are a few differences to UNION clauses in [CDS DDIC-based views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_view_glosry.htm "Glossary Entry"). The most important difference is that branches of union clauses can be nested within each other in CDS view entities.

Modification 6   

CDS View Entity, DISTINCT

The addition [DISTINCT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v2.htm) is now available for SELECT statements in [CDS view entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_view_glosry.htm "Glossary Entry").

Modification 7   

CDS View Entity, new set operators

In [CDS view entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), two new [set operators](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_set_operators_glosry.htm "Glossary Entry") are available:

-   [EXCEPT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_except_v2.htm)
-   [INTERSECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_intersect_v2.htm)

Modification 8   

CDS View Entity, new conversion functions

Two new conversion functions are available in CDS view entities:

-   [GET\_NUMERIC\_VALUE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_conv_func_unit_curr_v2.htm)
-   [CURR\_TO\_DECFLOAT\_AMOUNT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_conv_func_unit_curr_v2.htm)

Modification 9   

CDS View Entity, typed literals

[Typed literals](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_typed_literal_v2.htm) are now available for [CDS view entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_view_glosry.htm "Glossary Entry"). Typed literals allow an explicit type declaration and they are available for many built-in ABAP Dictionary data types.

Modification 10   

CDS View Entity, Handling of Amounts and Quantities

In [CDS view entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), special handling for [CDS amount fields](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_amount_field.htm) and [CDS quantity fields](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_quantity_field.htm) has been implemented. It differs from the handling of amount fields and quantity fields in DDIC, for example, more data types are possible and the currency key / unit key reference is considered in expressions.

Moreover, a new type is available: the [CDS calculated quantity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_calculated_quantity.htm). A CDS calculated quantity is the result type of a calculation using amount and/or quantity fields.

Modification 11   

CDS View Entity, extended expression matrix

In [CDS view entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), the expression matrix has been extended:

-   In the [WHERE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_where_clause_v2.htm) clause, arithmetic expressions and case expressions are supported as operands.
-   In the [HAVING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_having_clause_v2.htm) clause, arithmetic expressions and case expressions are supported as operands.
-   In a [searched case expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_searched_case_expr_v2.htm), arithmetic expressions and case expressions are supported as operands.

Modification 12   

CDS Projection View, REDEFINE ASSOCIATION

In CDS projection views, it is now possible to redefine the CDS associations from the projected entity in the header part. This is done using the keyword [REDEFINE ASSOCIATION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_view_redefined_assoc.htm). Redefinition can include a new filter, alias name, and redirection to a new association target, which must also be a CDS projection view, thus moving the complete data model to the projection layer.

Modification 13   

CDS Projection View, PROVIDER CONTRACT

It is now possible to specify a provider contract for [CDS projection views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_projection_view_glosry.htm "Glossary Entry") using the keyword [PROVIDER CONTRACT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_pv_provider_contract.htm). The provider contract specifies in which scenario a CDS projection view is used, and the scenario in turn determines in which runtime the view is executed and which features are available.

In this release, there's only one provider contract option available: TRANSACTIONAL\_QUERY.

Modification 14   

ABAP program for migration analysis

The following documented ABAP program is now available for evaluating whether a migration from a CDS DDIC-based view to a CDS view entity is possible:

RUTDDLS\_MIGRATION\_CANDIDATES.

Modification 15   

Migration tool for CDS views

The following documented ABAP program is now available for migrating CDS DDIC-based views to CDS view entities:

RUTDDLSV2MIGRATION.

Modification 16   

New reference type for annotations

A new [reference type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_annotation_type.htm) for annotations is available:

-   LocalDefinitionRef


### abennews-756-obj_comp_selector.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-75.htm) →  [News for Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756.htm) → 

Object Component Selector in Release 7.56

Modification

Dynamic Target

With the syntax

... *{* dref->(comp\_name) *}*
  *|* *{* cref->(attr\_name) *}*
  *|* *{* iref->(attr\_name) *}* ...

the [object component selector \->](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenobject_component_selector.htm) can be used to access components and attributes dynamically now . Before, this was possible for [dynamic components](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassign_dynamic_components.htm) and [dynamic access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassign_mem_area_dynamic_access.htm) in the statement ASSIGN only.


### abennews-756-dref.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-75.htm) →  [News for Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756.htm) → 

Data References in Release 7.56

Modification

Dereferencing Data References

The [dereferencing operator\->\*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendereferencing_operator.htm) can be used for generically typed data reference variables in almost all operand positions now. Before, that was possible in the ASSIGN statement only.


### abennews-756-strings.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-75.htm) →  [News for Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756.htm) → 

String Processing in Release 7.56

[1\. XPath and XSD Regular Expressions](#!ABAP_MODIFICATION_1@1@)
[2\. Callouts in PCRE Regular Expressions](#!ABAP_MODIFICATION_2@2@)

Modification 1   

XPath and XSD Regular Expressions

Besides the existing support of [PCRE regular expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpcre_regex_glosry.htm "Glossary Entry") and [POSIX regular expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenposix_regex_glosry.htm "Glossary Entry") (obsolete) ABAP supports now also [XPath regular expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenxpath_regex_glosry.htm "Glossary Entry") and [XSD regular expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenxsd_regex_glosry.htm "Glossary Entry"). Internally, those are transformed to PCRE regular expressions and processed by the PCRE2 Library.

-   Both kinds of regular expressions can be used by the new (factory) methods CREATE\_XPATH2 and CREATE\_XSD of the [system classes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_system_classes.htm) CL\_ABAP\_REGEX and CL\_ABAP\_MATCHER.
-   XPath regular expressions can be used by the new argument [xpath](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions_regex.htm) in some built-in functions.

Modification 2   

Callouts in PCRE Regular Expressions

The class [CL\_ABAP\_MATCHER](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_system_classes.htm) supports callouts in [PCRE syntax](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_pcre_syntax.htm) now. The method SET\_CALLOUT can be used to register a handler class that implements the interface IF\_ABAP\_MATCHER\_CALLOUT. The [special characters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_pcre_syntax_specials.htm) (?C...) of a PCRE regular expression then call the interface method CALLOUT when the method MATCH is executed.


### abennews-756-itab.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-75.htm) →  [News for Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756.htm) → 

Internal Tables in Release 7.56

[1\. Access to generically typed internal tables](#!ABAP_MODIFICATION_1@1@)
[2\. Alias Names for Secondary Keys](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Access to generically typed internal tables

Before, in statements for [accessing internal tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab_access.htm) the internal table had to be recognizable statically. The operand had to be typed at least with any table.

Now, this restriction is partly removed. In the statements [INSERT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinsert_itab.htm), [APPEND](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapappend.htm), [COLLECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcollect.htm), [MODIFY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_itab.htm), [DELETE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdelete_itab.htm), [READ](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_table.htm), [LOOP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_variants.htm), [SORT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsort_itab.htm) operands can be field symbols and formal parameters that are typed fully generic with TYPE data or TYPE any. Such operands can be used as if typed with any table. If an index access is involved, still operands are required that are typed at least with TYPE index\_table.

Hint

This is not yet possible in expressions as [FOR expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfor_itab.htm) or [table expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_expressions.htm).

Example

The following was not possible in older releases.

DATA itab TYPE TABLE OF scarr.
FIELD-SYMBOLS <itab> TYPE any.
ASSIGN itab TO <itab>.
LOOP AT <itab> ASSIGNING FIELD-SYMBOL(<fs>).
  ...
ENDLOOP.

Modification 2   

Alias Names for Secondary Keys

Alias names can now be declared for [secondary keys](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensecondary_key_glosry.htm "Glossary Entry") of internal tables by using the addition ALIAS of [TYPES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_secondary_key.htm) and [DATA](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdata_secondary_key.htm). This can be helpful when changing existing secondary keys without invalidating users.


### abennews-756-cds_access_control.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-75.htm) →  [News for Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756.htm) → 

ABAP CDS Access Control in Release 7.56

[1\. Graceful Behavior in Access Condition Inheritance for Missing Dictionary Elements](#!ABAP_MODIFICATION_1@1@)
[2\. Quantifier Operators](#!ABAP_MODIFICATION_2@2@)
[3\. Unified Syntax for Authorization Objects, Authorization Fields and SACF Scenario Names](#!ABAP_MODIFICATION_3@3@)
[4\. Additional Filtering of Self-Defined Aspect Usage](#!ABAP_MODIFICATION_4@4@)
[5\. Condition Replacement for Role-Based Inheritance](#!ABAP_MODIFICATION_5@5@)
[6\. Generic Element Replacement for Condition Inheritance](#!ABAP_MODIFICATION_6@6@)
[7\. Enabling/Disabling of Access Conditions based on the State of SACF](#!ABAP_MODIFICATION_7@7@)
[8\. Access Conditions for CDS Hierarchies based on Elements of the Hierarchy Directory](#!ABAP_MODIFICATION_8@8@)
[9\. Consideration of Special Runtime Modes](#!ABAP_MODIFICATION_9@9@)

Modification 1   

Graceful Behavior in Access Condition Inheritance for Missing Dictionary Elements

From this release on, authors of access controls can mark a subset of the CDS elements used in their access conditions as optional, so that CDS entities which inherit their access conditions are not affected by a Day-1-impact any more.

GRANT SELECT ON cds\_entity WITH OPTIONAL ELEMENTS (
     element1 DEFAULT (TRUE|FALSE), ...) WHERE ...

[More Information](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_dcl_role_cond_rule.htm)

Modification 2   

Quantifier Operators

With the new addition ALL, access conditions can express that access shall only be granted when from a set-valued association all values satisfy the condition.

WHERE ALL toItem.State = 'A'

To accompany this use case, the BYPASS WHEN operator has been extended to literal conditions also.

A dedicated operator EXISTS can be used when different access conditions using the same set-valued association shall not be coupled in their fields by means of a common join expression.

[More Information](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_dcl_role_conditions.htm)

Modification 3   

Unified Syntax for Authorization Objects, Authorization Fields and SACF Scenario Names

At all locations of access controls, references to authorization objects, authorization fields, and SACF scenario names can be written in identifier syntax when they comply with it and in string syntax with single apostrophes as an alternative.

Before:

( ... ) = ASPECT PFCG\_AUTH( S\_OBJ IN SCENARIO 'THESCENARIO' )

Now allowed:

( ... ) = ASPECT PFCG\_AUTH( S\_OBJ IN SCENARIO TheScenario )

[More Information](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_role.htm)

Modification 4   

Additional Filtering of Self-Defined Aspect Usage

When using self-defined aspects, these can now denominate an arbitrary set of their elements (path expressions are supported) as filter element. These filter elements can by referenced when using the self-defined aspect in an access condition.

DEFINE ASPECT ... AS SELECT FROM ...
  WITH USER ELEMENT ...
  WITH FILTER ELEMENTS ( element1, element2 AS alias2 )
  {
      ...
  }
WHERE ( ... ) = ASPECT ... FILTER BY ( element1 = 'X' OR
                                       alias2 IS NOT NULL )

[More Information](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_cond_aspect.htm)

Modification 5   

Condition Replacement for Role-Based Inheritance

The REPLACING section formerly only available to entity-based inheritance

INHERITING CONDITIONS FROM ENTITY cds\_ntity

is now also available for role-based inheritance

INHERIT role FOR GRANT SELECT ON cds\_entity

[More Information](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_cond_inherit.htm)

Modification 6   

Generic Element Replacement for Condition Inheritance

The REPLACING section of condition inheritance now supports a generic replacement step to replace an arbitrary field or association of the inheritance source with an arbitrary field or association of the inheritance target.

WHERE INHERITING CONDITIONS FROM ENTITY Source REPLACING {
  ELEMENT Element1OfSource WITH Element1OfTarget,
  ELEMENT Assoc1OfSource WITH Assoc1\[r = 4\].Assoc2OfTarget,
  ELEMENT Assoc2(p : $parameters.p1)\[ q = 1\].Field WITH MyShortField }

[More Information](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_cond_inherit_replacing.htm)

Modification 7   

Enabling/Disabling of Access Conditions based on the State of SACF

Respecting settings in the switchable authorization framework (SACF) was already possible for dedicated PFCG conditions:

ASPECT PFCG\_AUTH ( S\_OBJECT IN SCENARIO ... )

Now, those settings can be used to enable or disable entire condition sets:

GRANT SELECT ON cds\_entity
  WHERE
    SACF\_CHECK\_IN\_USE (NAME => NEW\_AUTH\_SWITCH ) IS INITIAL
      AND
    ( element ) = ASPECT PFCG\_AUTH( OLD\_AUTH, F )
  OR
    SACF\_CHECK\_IN\_USE( NAME => NEW\_AUTH\_SWITCH ) IS NOT INITIAL
      AND
    ( element ) = ASPECT PFCG\_AUTH( NEW\_AUTH, F );

[More Information](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_dcl_function.htm)

Modification 8   

Access Conditions for CDS Hierarchies based on Elements of the Hierarchy Directory

For CDS hierarchies, access control was restricted to the use of conditions not resulting in database filtering. Now elements located in the declared hierarchy directory

[DIRECTORY ... FILTER BY](abencds_f1_define_hierarchy.htm#!ABAP_ADDITION_4@4@)

can be used to formulate such conditions.

Modification 9   

Consideration of Special Runtime Modes

When operating the system with the emergency user SAP\*, CDS access control is now deactivated.

During processing of an update task, PFCG conditions are now considered as fully authorized.

[More Information](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenauthority_during_update.htm)


### abennews-756-abap_docu.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-75.htm) →  [News for Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756.htm) → 

ABAP Keyword Documentation in Release 7.56

Modification

Configuration of the Documentation

From release 7.56 on, important settings of the ABAP Keyword Documentation can be configured explicitly. Before, the documentation was configured implicitly from system settings.

The configuration of the ABAP Keyword Documentation is saved in customizing table ABDOCCONFIG, that is maintained with transaction code ABAP\_DOCU\_CONFIG (based on executable program ABAP\_DOCU\_CONFIG) or with the configuration entity ABAP\_DOCU\_CONFIG\_ENTITY. All repository objects related to the configuration are documented.

The following properties can be set:

-   CP
    
    If set to X, the ABAP Keyword Documentation uses terms appropriate for the [SAP BTP ABAP environment](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensap_btp_abap_env_glosry.htm "Glossary Entry") (aka [Steampunk](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensteampunk_glosry.htm "Glossary Entry")) instead of [Application Server ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenas_abap_glosry.htm "Glossary Entry") in some footers and copyright texts.
    
    Recommendation:
    
    -   Set to X in systems of the SAP BTP ABAP Environment.
    -   Set to initial in all other systems.
-   ICF
    
    Enables or disables the Web Version of the ABAP Keyword Documentation based on [ICF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenicf_glosry.htm "Glossary Entry") nodes /sap/public/bc/abap/docu and /sap/bc/abap/docu.
    
    The following settings can be applied:
    
    -   If set to X, the Web Version is enabled. The execution of example programs from the Web Version is disabled.
    -   If set to E, the Web Version is enabled. The execution of example programs from the Web Version is also enabled.
    
    Recommendation:
    
    -   Set to E in SAP development systems.
    -   Set to E in customer development systems.
    -   Set to X in SAP S/4 HANA.
    -   Set to initial in SAP BTP ABAP environment and SAP S/4HANA Cloud.
-   BATCH
    
    If set to X, the infrastructure of the ABAP Keyword Documentation is allowed to start batch jobs that prepare buffers that are needed for search in and display of the documentation.
    
    Recommendation:
    
    -   Set to X in SAP S/4 HANA.
    -   Set to initial in SAP BTP ABAP environment.
-   MAILBOX
    
    If set to X, the ABAP Keyword Documentation display offers a function to send a feedback mail to abap.docu@exchange.sap.corp. This mailbox is only available to SAP employees. Therefore, the setting makes sense for SAP's own development systems only.
    
    Recommendation:
    
    -   Set to X in SAP's own development systems.
    -   Set to initial in all other systems.
-   VERSION
    
    Determines the [ABAP language version](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_version_glosry.htm "Glossary Entry") for which the ABAP Keyword Documentation is displayed. Allowed values are defined in domain ABAPVRS. This setting can be overridden when calling the documentation using the respective APIs:
    
    -   CL\_ABAP\_DOCU for the SAP GUI version
    -   CL\_ABAP\_DOCU\_EXTERNAL for the ADT or Web version.
    
    Calls to the documentation from ABAP Workbench and ADT set the language version depending on the object currently being edited. Calls to the documentation via the ABAPDOCU and ABAPHELP transactions use the version from ABDOCCONFIG by default. An initial value for VERSION in ABDOCCONFIG displays the documentation for [Standard ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_abap_glosry.htm "Glossary Entry") (X).
    
    Recommendation:
    
    -   Set to X in SAP S/4 HANA
    -   Set to 5 in SAP BTP ABAP environment and SAP S/4HANA Cloud

Program ABAP\_DOCU\_CONFIG allows a choice to be made between different sets of parameters:

-   Parameter set typical for SAP development systems
-   Parameter set typical for customer development systems
-   Parameter set typical for SAP S/4 HANA systems
-   Parameter set typical for S/4 HANA cloud ABAP environment
-   Parameter set typical for SAP BTP ABAP environment
-   Current parameter set

The passed parameters are used as default values for a dialog window and can be overridden there.

If customizing table ABDOCCONFIG is initial in a customer system, the first call of the ABAP Keyword documentation supplies it with values recommended for an SAP S/4 HANA System. In SAP's own systems, values for a SAP development system are supplied. If the table is partly filled, default values are used for the missing rows. These values are initial for all properties except VERSION. If the language version is not passed by the caller and cannot be found in ABDOCCONFIG, the value X is used and a warning is shown in the documentation display.


### abennews-756-restful.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-75.htm) →  [News for Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756.htm) → 

ABAP RESTful Application Programming Model in Release 7.56

In release 7.56, the [ABAP RESTful Application Programming Model (RAP)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarap_glosry.htm "Glossary Entry") was enhanced as follows:

-   [CDS BDL in Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756-cds_bdl.htm)
-   [ABAP EML in Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756-eml.htm)
-   [BDEF Derived Types in Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756-derived.htm)
-   [ABAP Behavior Pools (ABP) in Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756-abp.htm)

Continue
[CDS BDL in Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756-cds_bdl.htm)
[ABAP EML in Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756-eml.htm)
[BDEF Derived Types in Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756-derived.htm)
[ABAP Behavior Pools (ABP) in Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756-abp.htm)


### abennews-756-cds_bdl.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-75.htm) →  [News for Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756.htm) →  [ABAP RESTful Application Programming Model in Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756-restful.htm) → 

CDS BDL in Release 7.56

[1\. Nested Determinations on Modify](#!ABAP_MODIFICATION_1@1@)
[2\. RAP BO operation addition authorization:update](#!ABAP_MODIFICATION_2@2@)
[3\. Always Flag in Determine Actions](#!ABAP_MODIFICATION_3@3@)
[4\. Global Feature Control](#!ABAP_MODIFICATION_4@4@)
[5\. Global Authorization Control](#!ABAP_MODIFICATION_5@5@)
[6\. Non-Locking Actions](#!ABAP_MODIFICATION_6@6@)
[7\. Unmanaged Early Numbering in Managed BOs](#!ABAP_MODIFICATION_7@7@)
[8\. Implementing Cleanup in Managed BOs](#!ABAP_MODIFICATION_8@8@)
[9\. Define authorization context](#!ABAP_MODIFICATION_9@9@)
[10\. With privileged mode disabling](#!ABAP_MODIFICATION_10@10@)
[11\. Projection BDEF, new actions and functions](#!ABAP_MODIFICATION_11@11@)
[12\. Projection BDEF, authorization concept](#!ABAP_MODIFICATION_12@12@)
[13\. Projection BDEF, augmented fields](#!ABAP_MODIFICATION_13@13@)
[14\. Projection BDEF, new field characteristic](#!ABAP_MODIFICATION_14@14@)
[15\. Projection BDEF, Operation Augment](#!ABAP_MODIFICATION_15@15@)
[16\. CDS Abstract Behavior Definitions](#!ABAP_MODIFICATION_16@16@)

Modification 1   

Nested Determinations on Modify

It is now possible to trigger a [determination on modify](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_determinations.htm) by another determination on modify.

Modification 2   

RAP BO operation addition authorization:update

The new [RAP BO operation addition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_operations_additions.htm) [authorization:update](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_actions_auth_update.htm) is available for managed and unmanaged BOs. It delegates the authorization control for an operation to the authorization control that is specified for the update operation.

Modification 3   

Always Flag in Determine Actions

The new addition [always](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_determine_action.htm) can be used for determinations and validations assigned to a [determine action](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_determine_action.htm). When the determine action is called, determinations and validations with this flag are executed regardless of their trigger conditions.

Modification 4   

Global Feature Control

The new RAP BO operation addition [features:global](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_actions_fc.htm) can be used to define global feature control for RAP BO operations.

Modification 5   

Global Authorization Control

Global authorization control is available. It can be defined using [authorization master (global)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_authorization.htm).

Modification 6   

Non-Locking Actions

The new RAP BO operation addition [lock:none](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action.htm) can be used to suppress the locking mechanism for an action.

Modification 7   

Unmanaged Early Numbering in Managed BOs

The entity behavior characteristic [early numbering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_early_numb.htm) can be used to define unmanaged early numbering for all primary key fields of a managed RAP BO.

Modification 8   

Implementing Cleanup in Managed BOs

The new addition [and cleanup](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_saving.htm) is available for additional and unmanaged save in managed RAP BOs. It allows the application developer to implement the cleanup method.

Modification 9   

Define authorization context

It is now possible to define [authorization contexts](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_authorization_context.htm) in a CDS behavior definition using the keyword define authorization context. There are different ways to activate an authorization context. When activated, all authorization objects listed in the respective context are always successful.

Modification 10   

With privileged mode disabling

The new syntax with privileged mode disabling supersedes the deprecated version with privileged mode. The new syntax version allows to disable an [authorization contexts](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_authorization_context.htm) when accessing the RAP BO in question with a privileged EML call.

Modification 11   

Projection BDEF, new actions and functions

It is now possible to define and implement [new actions and functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_nonstandard_projection.htm) in a [projection BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry").

Modification 12   

Projection BDEF, authorization concept

It is now possible to define an [authorization concept](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_authorization_projection.htm) in a [projection BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry") that controls access to the newly defined actions and functions in a projection BDEF.

Modification 13   

Projection BDEF, augmented fields

[Field characteristics](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_field_projection.htm) can be specified for [augmented fields](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_augment_projection.htm) in a [projection BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry").

Modification 14   

Projection BDEF, new field characteristic

In [projection BDEFs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry"), a new field characteristic is available: [field(suppress)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_field_projection.htm). It removes the field in question from the BDEF derived types and from all RAP APIs.

Modification 15   

Projection BDEF, Operation Augment

For [projections BDEFs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry"), the [operation augment](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_augment_projection.htm) is available. Augmentation allows to enhance incoming requests with a custom implementation, for example with default values.

Modification 16   

CDS Abstract Behavior Definitions

A new implementation type is available: the [CDS abstract behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_abstract.htm). Such abstract BDEFs mainly serve as typing mechanism for deep action or function parameters.


### abennews-756-eml.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-75.htm) →  [News for Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756.htm) →  [ABAP RESTful Application Programming Model in Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756-restful.htm) → 

ABAP EML in Release 7.56

Modification

Entity Manipulation Language

ABAP EML keywords are now available as part of the ABAP Keyword Documentation. The following keywords and topics are covered among others:

-   [MODIFY ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_entity_entities.htm)
    -   MODIFY ENTITY
    -   MODIFY ENTITIES
    -   MODIFY ENTITIES OPERATIONS
-   [READ ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_entity_entities.htm)
    -   READ ENTITY
    -   READ ENTITIES
    -   READ ENTITIES OPERATIONS
-   [COMMIT ENTITIES ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcommit_entities.htm)
    -   COMMIT ENTITIES
    -   COMMIT ENTITIES RESPONSE OF
    -   COMMIT ENTITIES RESPONSES OF
    -   COMMIT ENTITIES BEGIN, END including CONVERT KEY OF
-   [ROLLBACK ENTITIES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaprollback_entities.htm)
-   [GET PERMISSIONS ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapset_locks.htm)
    -   GET PERMISSIONS
    -   GET PERMISSIONS OF
    -   GET PERMISSIONS OPERATIONS
-   [SET LOCKS ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapset_locks.htm)
    -   SET LOCKS ENTITY
    -   SET LOCKS OF
    -   SET LOCKS (dynamic form)
-   [Type Mapping for ABAP EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_type_mapping.htm)
    -   SET NAMES
    -   SET FLAGS
    -   RAP-specific variants of the CORRESPONDING operator
-   ABAP EML for providing RAP BOs
    -   [IN LOCAL MODE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapin_local_mode.htm)
    -   [MODIFY AUGMENTING ENTITY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_aug_entity_entities.htm)


### abennews-756-derived.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-75.htm) →  [News for Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756.htm) →  [ABAP RESTful Application Programming Model in Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756-restful.htm) → 

BDEF Derived Types in Release 7.56

Modification

BDEF Derived Types

[BDEF derived types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") are now available as part of the ABAP keyword documentation. The following keywords and topics are covered:

-   [TYPE TABLE FOR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_table_for.htm)
-   [TYPE STRUCTURE FOR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_structure_for.htm)
-   [TYPE RESPONSE FOR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_response_for.htm)
-   [TYPE REQUEST FOR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_request_for.htm)
-   [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_comp.htm)
-   [Declaration of Variables with BDEF Derived Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_declaration.htm)


### abennews-756-abp.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-75.htm) →  [News for Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756.htm) →  [ABAP RESTful Application Programming Model in Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756-restful.htm) → 

ABAP Behavior Pools (ABP) in Release 7.56

Modification

ABAP Behavior Pools (ABP)

ABAP Behavior Pools (ABP) are now available as part of the ABAP Keyword Documentation. The following topics are covered:

-   [CLASS, FOR BEHAVIOR OF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_for_behavior_of.htm)
-   [RAP Handler Class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_handler_class.htm)
    -   [METHODS, FOR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_for_rap_behv.htm)
-   [RAP Saver Class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_saver_class.htm)
    -   [finalize](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensaver_finalize.htm)
    -   [check\_before\_save](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensaver_check_before_save.htm)
    -   [adjust\_numbers](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensaver_adjust_numbers.htm)
    -   [save](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensaver_method_save.htm)
    -   [cleanup](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensaver_method_cleanup.htm)
    -   [cleanup\_finalize](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsaver_class_cleanup_finalize.htm)
    -   [save\_modified](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaprap_saver_meth_save_modified.htm)


### abennews-756-restful.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-75.htm) →  [News for Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756.htm) → 

ABAP RESTful Application Programming Model in Release 7.56

In release 7.56, the [ABAP RESTful Application Programming Model (RAP)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarap_glosry.htm "Glossary Entry") was enhanced as follows:

-   [CDS BDL in Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756-cds_bdl.htm)
-   [ABAP EML in Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756-eml.htm)
-   [BDEF Derived Types in Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756-derived.htm)
-   [ABAP Behavior Pools (ABP) in Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756-abp.htm)

Continue
[CDS BDL in Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756-cds_bdl.htm)
[ABAP EML in Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756-eml.htm)
[BDEF Derived Types in Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756-derived.htm)
[ABAP Behavior Pools (ABP) in Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756-abp.htm)
