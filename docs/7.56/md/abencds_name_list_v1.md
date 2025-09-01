  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - DDIC-Based Entities](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) → 

CDS DDL - DDIC-based View, name\_list

Syntax

... ( name1, name2, ... ) ...

Effect

Defines the element names of a [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry") in a name list. The specified names name1, name2, ... are assigned to the elements defined explicitly in the [SELECT list](javascript:call_link\('abencds_select_list_v1.htm'\)) of the [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)) in the order given. The names work like the alternative names defined in the SELECT list using [AS](javascript:call_link\('abencds_select_list_entry_v1.htm'\)) and overwrite these names. If a name list is specified, it must contain a name for each element of the view.

The view field is created under the element name in the [CDS-managed DDIC view](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry"). Accordingly, an element name must comply with the rules for names of view fields of [DDIC database views](javascript:call_link\('abenddic_database_views.htm'\)), as well as the general naming rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)): This means that it must also meet the following requirements:

-   The naming conventions for [component names](javascript:call_link\('abenddic_structures_tech.htm'\)) of [DDIC structures](javascript:call_link\('abenddic_structures.htm'\)) in ABAP Dictionary
-   It cannot be a reserved component name. The reserved names that cannot be used are specified in the database table TRESE.

A name list can be specified only if the [elements](javascript:call_link\('abencds_select_list_entry_v1.htm'\)) in the [SELECT list](javascript:call_link\('abencds_select_list_v1.htm'\)) are specified explicitly. No name lists can be used if the SELECT list is specified as [\*](javascript:call_link\('abencds_select_list_v1.htm'\)) or if the element list contains the entry [$EXTENSION.\*](javascript:call_link\('abencds_select_list_entry_v1.htm'\)).

Hints

-   An explicit name list can be used, for example, to define the element names of a CDS view that defines a union set of multiple SELECT statements using [UNION](javascript:call_link\('abencds_union_v1.htm'\)).
-   A CDS view with an explicit name list cannot be expanded using [EXTEND VIEW](javascript:call_link\('abencds_extend_view.htm'\)).

Example

Defines the names of the four elements of the CDS view business\_partner as id, role, company\_name, and phone\_number.

@AbapCatalog.sqlViewName: 'BPA\_VW'
define view business\_partner
  (id, role, company\_name, phone\_number) as
  select from snwd\_bpa
         { key snwd\_bpa.bp\_id,
               snwd\_bpa.bp\_role,
               snwd\_bpa.company\_name,
               snwd\_bpa.phone\_number }

Example

Defines the names of the three elements of the CDS view employee\_sales\_figures as financial\_year, employee\_id, and gross\_amount.

@AbapCatalog.sqlViewName: 'SALES\_FIG\_VW'
view employee\_sales\_figures
  (financial\_year, employee\_id, gross\_amount) as
   select from sales\_2011\_tab
          { key '2011' as year,
            key id,
            amount }
   union
     select from sales\_2012\_tab
            { '2012' as year,
              employee\_number,
              gross\_amount }