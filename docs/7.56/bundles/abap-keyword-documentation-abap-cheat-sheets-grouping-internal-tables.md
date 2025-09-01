# ABAP - Keyword Documentation / ABAP - Cheat Sheets / Grouping Internal Tables

Included pages: 2



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abapsheets_grouping_iitabs.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsheets_grouping_iitabs.htm)

**Bundle Contains**: 1 documentation pages
**Version**: ABAP 7.56
**Generated**: 2025-09-01T11:25:45.438Z

---

### abapsheets_grouping_iitabs.htm

> **📖 Official SAP Documentation**: [abapsheets_grouping_iitabs.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsheets_grouping_iitabs.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abapsheets_grouping_iitabs.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsheets_grouping_iitabs.htm)


  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Cheat Sheets](javascript:call_link\('abenabap_blurb.htm'\)) → 

Grouping Internal Tables

Similar to SQL's [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)), there is also a [GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) for working with internal tables, that can be used behind [LOOP AT itab](javascript:call_link\('abaploop_at_itab_variants.htm'\)) or in the form [IN GROUP](javascript:call_link\('abenfor_in_group.htm'\)) in a table iteration with [FOR](javascript:call_link\('abenfor_itab.htm'\)). It replaces the clumsy group level processing with statements [AT NEW ...](javascript:call_link\('abapat_itab.htm'\)) that relies on the order of table columns and contents that is sorted respectively.

While there are may examples for all the powerful features of GROUP BY and IN GROUP under

-   [Examples of Grouping with LOOP](javascript:call_link\('abenloop_group_by_abexas.htm'\)),
-   [Examples of Grouping with FOR](javascript:call_link\('abenfor_grouping_abexas.htm'\)),

the following explains the grouping of internal tables step by step using a very simple case of an internal table spfli\_tab that is filled with data from the database table SPFLI. The following steps show how the contents of the internal table can be grouped using [LOOP AT GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)):

-   [Grouping by One Column](#abapsheets-grouping-iitabs-1-------grouping-by-more-than-one-column---@ITOC@@ABAPSHEETS_GROUPING_IITABS_2)
-   [Group Key Binding when Grouping by One Column](#abapsheets-grouping-iitabs-3-------group-key-binding-when-grouping-by-more-than-one-column---@ITOC@@ABAPSHEETS_GROUPING_IITABS_4)
-   [Demonstration Program](#abapsheets-grouping-iitabs-5---grouping-by-one-column--the-simplest-form-of-grouping-is-by-one-column-without-explicitly-specifying-the-output-behavior-of-the-group-loop---loop-at-spfli--tab-into-wa-------------------group-by-wa-carrid-------------wa-carrid-----endloop---within-the-loop--there-is-access-to-the-work-area-wa--in-particular-to-the-component-wa-carrid-that-is-used-for-grouping--the-work-area-wa-contains-the-first-line-of-each-group-and-represents-the-group-in-the-loop--this-is-called-representative-binding---to-access-the-members-of-a-group--a-member-loop-can-be-inserted-into-the-group-loop---loop-at-spfli--tab-into-wa-------------------group-by-wa-carrid----------loop-at-group-wa-into-data-member-----------member-----------endloop--------endloop---the-member-loop-is-executed-using-the-group-represented-by-wa-and-its-members-are-assigned-to-member-and-are-available-in-the-member-loop---grouping-by-more-than-one-column--to-group-by-more-than-just-one-criterion--a-structured-group-key-is-defined-as-follows--in-the-simplest-case--the-grouping-criteria-are-columns-of-the-internal-table---loop-at-spfli--tab-into-wa-------------------group-by---key1---wa-carrid-key2---wa-airpfrom----------wa-carrid-----wa-airpfrom-----endloop---this-is-also-a-representative-binding-in-which-the-work-area-wa-is-reused-in-the-group-loop-to-access-the-group-key---to-access-the-members-of-the-groups--the-exact-same-member-loop-can-be-inserted-as-when-grouping-by-one-column---group-key-binding-when-grouping-by-one-column--by-explicitly-specifying-an--output-area--javascript-call-link---abaploop-at-itab-group-by-binding-htm-----for-the-group-key--a-group-key-binding-can-be-defined-explicitly-instead-of-the-representative-binding-in-which-the-output-area-of-the-group-loop-is-reused---loop-at-spfli--tab-into-wa-------------------group-by-wa-carrid-------------------into-data-key---------key-----endloop---the-difference-to-the-example-with-representative-binding-is-the-into-addition-after-group-by--instead-of-reusing-wa--an-elementary-data-object-key-represents-the-group--this-can-be-generated-inline--the-additions--group-size--javascript-call-link---abaploop-at-itab-group-by-key-htm-------group-index--javascript-call-link---abaploop-at-itab-group-by-key-htm------and--without-members--javascript-call-link---abaploop-at-itab-group-by-htm-----can-only-be-used-in-the-group-key-binding--which-gives-it-more-functions-than-the-representative-binding--if-these-are-not-required--the-representative-binding-can-be-used--the-group-key-binding-can-also-be-used-to-make-the-use-of-the-group-key-in-the-loop-more-explicit---inserting-a-member-loop-works-in-the-same-way-as-in-the-representative-binding--with-the-difference-that-a-group-is-now-addressed-by-key-instead-of-wa---loop-at-spfli--tab-into-wa-------------------group-by-wa-carrid-------------------into-key----------loop-at-group-key-into-member----------members-------endloop--------endloop---group-key-binding-when-grouping-by-more-than-one-column--finally--the-group-key-binding-for-structured-group-keys---loop-at-spfli--tab-into-wa-------------------group-by---key1---wa-carrid-key2---wa-airpfrom---------------------into-data-key---------key-key1-----key-key2-----endloop---here--key-is-a-structure-with-the-components-key1-and-key2--a-member-loop-can-be-inserted-in-exactly-the-same-way-as-when-grouping-by-one-column---if-the-group-members-are-not-relevant--the-addition--no-members--javascript-call-link---abaploop-at-itab-group-by-htm-----can-be-used-to-save-time-and-memory---loop-at-spfli--tab-into-wa-------------------group-by---key1---wa-carrid-key2---wa-airpfrom------------------------------index---group-index-size---group-size---------------------without-members-------------------into-data-key---------key-key1-----key-key2-----key-index-----key-size-----endloop---it-is-no-longer-possible-to-use-a-member-loop-here--instead--the-group-key-was-enriched-with-optional-components-for-further-information-using--group-index--javascript-call-link---abaploop-at-itab-group-by-key-htm------group-size--javascript-call-link---abaploop-at-itab-group-by-key-htm-------demonstration-program--executable-example--the-example--introduction-to-loop-at-group-by--javascript-call-link---abenloop-group-by-abexa-htm-----demonstrates-all-of-above-mentioned-syntactical-options-in-one-program---continue---example--exa-gif--example----grouping-internal-tables--javascript-call-link---abenloop-group-by-abexa-htm-----------abenloop-group-by-abexa-htm-------------as-abap-release-756---copyright-2021-sap-se--all-rights-reserved----abap---keyword-documentation--javascript-call-link---abenabap-htm---------abap---cheat-sheets--javascript-call-link---abenabap-blurb-htm---------grouping-internal-tables--javascript-call-link---abapsheets-grouping-iitabs-htm---------grouping-internal-tables--the-example-is-a-step-by-step-introduction-to-grouping-with--loop-at-group-by--javascript-call-link---abaploop-at-itab-group-by-htm-------source-code--report-demo--loop--at--itab--group--by--class-demo-definition----public-section------class-methods-main--endclass--class-demo-implementation----method-main------data-out----cl--demo--output--new---------data--------wa------type-spfli--------member--type-spfli--------members-type-standard-table-of-spfli-with-empty-key------select---------------from-spfli------------into-table-DATA(spfli\_tab).
    out->begin\_section( \`Representative Binding\` ).
    out->begin\_section(
     \`Grouping by one column\` ).
    LOOP AT spfli\_tab INTO wa
                      GROUP BY wa-carrid.
      out->write( wa-carrid ).
    ENDLOOP.
    out->next\_section(
     \`Members of one column groups\` ).
    LOOP AT spfli\_tab INTO wa
                      GROUP BY wa-carrid.
      CLEAR members.
      LOOP AT GROUP wa INTO member.
        members = VALUE #( BASE members ( member ) ).
      ENDLOOP.
      out->write( members ).
    ENDLOOP.
    out->next\_section(
     \`Grouping by two columns\` ).
    LOOP AT spfli\_tab INTO wa
                      GROUP BY ( key1 = wa-carrid key2 = wa-airpfrom ).
      out->write( |{ wa-carrid } { wa-airpfrom }| ).
    ENDLOOP.
    out->next\_section(
     \`Members of two column groups\` ).
    LOOP AT spfli\_tab INTO wa
                      GROUP BY ( key1 = wa-carrid key2 = wa-airpfrom ).
      CLEAR members.
      LOOP AT GROUP wa INTO member.
        members = VALUE #( BASE members ( member ) ).
      ENDLOOP.
      out->write( members ).
    ENDLOOP.
    out->end\_section( )->next\_section( \`Group Key Binding\` ).
    out->next\_section(
     \`Grouping by one column\` ).
    LOOP AT spfli\_tab INTO wa
                      GROUP BY wa-carrid
                      INTO DATA(key).
      out->write( key ).
    ENDLOOP.
    out->next\_section(
     \`Members of one column groups\` ).
    LOOP AT spfli\_tab INTO wa
                      GROUP BY wa-carrid
                      INTO key.
      CLEAR members.
      LOOP AT GROUP key INTO member.
        members = VALUE #( BASE members ( member ) ).
      ENDLOOP.
      out->write( members ).
    ENDLOOP.
    out->next\_section(
     \`Grouping by two columns\` ).
    LOOP AT spfli\_tab INTO wa
                      GROUP BY ( key1 = wa-carrid key2 = wa-airpfrom )
                      INTO DATA(keys).
      out->write( keys ).
    ENDLOOP.
    out->next\_section(
     \`Members of two column groups\` ).
    LOOP AT spfli\_tab INTO wa
                      GROUP BY ( key1 = wa-carrid key2 = wa-airpfrom )
                      INTO keys.
      CLEAR members.
      LOOP AT GROUP keys INTO member.
        members = VALUE #( BASE members ( member ) ).
      ENDLOOP.
      out->write( members ).
    ENDLOOP.
    out->next\_section(
     \`Two column groups without members\` ).
    LOOP AT spfli\_tab INTO wa
                      GROUP BY ( key1 = wa-carrid key2 = wa-airpfrom
                                 index = GROUP INDEX size = GROUP SIZE )
                      WITHOUT MEMBERS
                      INTO DATA(keysplus).
      out->write( keysplus ).
    ENDLOOP.
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example demonstrates all syntactical options shown in [Grouping internal tables](javascript:call_link\('abapsheets_grouping_iitabs.htm'\)).
