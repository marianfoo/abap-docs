  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Overview](javascript:call_link\('abenitab_oview.htm'\)) →  [itab - Table Key](javascript:call_link\('abenitab_key.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: itab - Secondary Table Key, ABENITAB_KEY_SECONDARY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

itab - Secondary Table Key

[Hash keys](javascript:call_link\('abenhash_key_glosry.htm'\) "Glossary Entry") and [sorted keys](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry") can be declared as [secondary table keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") for each internal table. For each sorted key, an additional [secondary table index](javascript:call_link\('abensecondary_table_index_glosry.htm'\) "Glossary Entry") is created.

Access to an internal table using a secondary key is always optimized. This allows additional optimized keys to be introduced for sorted and hashed tables as well as optimized key accesses for standard tables.

-   Declaration of Secondary Table Keys
    
    For data types declared in ABAP programs, a secondary table is declared using the additions [UNIQUE*|*NON-UNIQUE KEY key\_name COMPONENTS](javascript:call_link\('abaptypes_secondary_key.htm'\)) of the statements [TYPES](javascript:call_link\('abaptypes_secondary_key.htm'\)), [DATA](javascript:call_link\('abapdata_secondary_key.htm'\)), and so on. The ABAP Dictionary provides corresponding functions for the table types created in the tool.
    
-   Access Using Secondary Keys
    
    In key accesses to internal tables, the addition WITH *\[*TABLE*\]* KEY key\_name can be used in [processing statements](javascript:call_link\('abentable_processing_statements.htm'\)) to specify which secondary table key to use. In index accesses, the specification USING KEY keyname can be used to specify the [table index](javascript:call_link\('abentable_index_glosry.htm'\) "Glossary Entry") of which secondary key to use. In [table expressions](javascript:call_link\('abentable_expressions.htm'\)), this is specified using the addition [KEY](javascript:call_link\('abentable_exp_itab_line.htm'\)). Secondary keys are not selected automatically. If no secondary key is specified in a processing statement, the primary key or primary table index is always used. If no explicit key is specified for a table expression, a [free search key](javascript:call_link\('abapread_table_free.htm'\)) is used to perform reads.
    
    Statements where secondary keys can be specified are:
    
    -   [READ TABLE itab](javascript:call_link\('abapread_table.htm'\))
        
        The lines to be read can be specified using a secondary key.
        
    -   [LOOP AT itab](javascript:call_link\('abaploop_at_itab.htm'\))
        
        The processing sequence and conditions can be controlled using a secondary table key.
        
    -   [INSERT itab](javascript:call_link\('abapinsert_itab.htm'\))
        
        Only a secondary key for the source table can be specified here, from which multiple lines are copied. The insertion position is determined solely using the primary key and the primary index.
        
    -   [APPEND](javascript:call_link\('abapappend.htm'\))
        
        Only a secondary key for the source table can be specified here, onto which multiple lines are appended.
        
    -   [MODIFY itab](javascript:call_link\('abapmodify_itab.htm'\))
        
        The lines to be modified can be specified using a secondary key.
        
    -   [DELETE itab](javascript:call_link\('abapdelete_itab.htm'\))
        
        The lines to be deleted can be specified using a secondary key.
        
    -   [TYPES ... ASSOCIATION](javascript:call_link\('abaptypes_mesh_association.htm'\)), [\\\_assoc\[ ... \]](javascript:call_link\('abenmesh_path_assoc_cond.htm'\))
        
        The secondary key used in the evaluation of a [mesh path](javascript:call_link\('abenmesh_path_glosry.htm'\) "Glossary Entry") can be specified using USING KEY.
        
    
    If the system field sy-tabix is set in this type of access, and a sorted secondary key is used, the line number refers to the associated [secondary table index](javascript:call_link\('abensecondary_table_index_glosry.htm'\) "Glossary Entry"). In statements that have not been enhanced by these additions, like [SORT](javascript:call_link\('abapsort_itab.htm'\)), [COLLECT](javascript:call_link\('abapcollect.htm'\)), or [PROVIDE](javascript:call_link\('abapprovide.htm'\)), secondary keys are not explicitly supported.
    

The key fields of a secondary table key are only write-protected if the secondary table key is in use within a LOOP or a MODIFY statement. Otherwise, the secondary key fields are not write-protected.

Programming Guideline

[Secondary Key](javascript:call_link\('abensecondary_key_guidl.htm'\) "Guideline")

Hints

-   Optimized access times to the individual lines using secondary keys are [bought](javascript:call_link\('abenitab_key_memory.htm'\)) in exchange for the fact that the ABAP runtime framework then needs to administer the additional keys. For hash keys, this means additional hash administration and an additional [secondary table index](javascript:call_link\('abensecondary_table_index_glosry.htm'\) "Glossary Entry") for each sorted key.
-   When working with internal tables for which a secondary key is declared, it must be ensured that the required key or table index is used in the processing statements.

Example

Declaration of a hashed table with a unique primary key and a non-unique sorted secondary key cities. The table is filled with data from a database table and accessed using a [table expression](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry") with values specified for the secondary key. The first line found is read.

DATA cityfrom TYPE spfli-cityfrom VALUE 'FRANKFURT'.
cl\_demo\_input=>add\_field( CHANGING field = cityfrom ).
DATA cityto TYPE spfli-cityto VALUE 'NEW YORK'.
cl\_demo\_input=>request( CHANGING field = cityto ).
DATA spfli\_tab
  TYPE HASHED TABLE OF spfli
       WITH UNIQUE KEY primary\_key        COMPONENTS carrid connid
       WITH NON-UNIQUE SORTED KEY cities  COMPONENTS cityfrom cityto.
SELECT \*
       FROM spfli
       INTO TABLE @spfli\_tab.
cl\_demo\_output=>display(
  VALUE #( spfli\_tab\[ KEY cities
                      cityfrom = cityfrom
                      cityto   = cityto \] OPTIONAL ) ).

Continue
[itab - Updating Secondary Table Keys](javascript:call_link\('abenitab_key_secondary_update.htm'\))
[itab - Using Secondary Keys](javascript:call_link\('abenitab_key_secondary_usage.htm'\))
[itab - Restrictions for Secondary Keys](javascript:call_link\('abenitab_key_secondary_restrict.htm'\))