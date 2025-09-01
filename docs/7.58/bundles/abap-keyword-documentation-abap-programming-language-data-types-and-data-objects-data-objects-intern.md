# ABAP - Keyword Documentation / ABAP - Programming Language / Data Types and Data Objects / Data Objects / Internal Tables / itab - Table Key

Included pages: 12


### abenitab_key.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Data Objects](javascript:call_link\('abendata_objects.htm'\)) →  [Internal Tables](javascript:call_link\('abendobj_itab.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Table%20Key%2C%20ABENITAB_KEY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

itab - Table Key

Internal tables always have a primary key and can have up to 15 optional secondary table keys. If no explicit primary key is defined for a standard table, it automatically has a standard key.

-   [Primary table key](javascript:call_link\('abenitab_key_primary.htm'\))
-   [Secondary table key](javascript:call_link\('abenitab_key_secondary.htm'\))
-   [Duplicate unique keys](javascript:call_link\('abenitab_key_duplicates.htm'\))
-   [Duplicate non-unique keys](javascript:call_link\('abenitab_key_secondary_duplicates.htm'\))

Continue
[itab - Primary Table Key](javascript:call_link\('abenitab_key_primary.htm'\))
[itab - Secondary Table Key](javascript:call_link\('abenitab_key_secondary.htm'\))
[itab - Duplicate Unique Keys](javascript:call_link\('abenitab_key_duplicates.htm'\))
[itab - Duplicate Non-Unique Keys](javascript:call_link\('abenitab_key_secondary_duplicates.htm'\))


### abenitab_key_primary.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Data Objects](javascript:call_link\('abendata_objects.htm'\)) →  [Internal Tables](javascript:call_link\('abendobj_itab.htm'\)) →  [itab - Table Key](javascript:call_link\('abenitab_key.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Primary%20Table%20Key%2C%20ABENITAB_KEY_PRIMARY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

itab - Primary Table Key

Each internal table has a primary table key that allows access to individual lines of the table by specifying a key.

-   The components of the primary table key are declared using the [UNIQUE*|*NON-UNIQUE KEY](javascript:call_link\('abaptypes_primary_key.htm'\)) additions of the statements [TYPES](javascript:call_link\('abaptypes_primary_key.htm'\)), [DATA](javascript:call_link\('abapdata_primary_key.htm'\)), and so on.
-   The [standard key](javascript:call_link\('abenitab_standard_key.htm'\)), which can be declared both explicitly and implicitly, has a special role.
-   The primary table key of a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") can also be [empty](javascript:call_link\('abenitab_empty_key.htm'\)), that is, it does not contain any key fields.
-   In the case of key accesses for internal tables, the primary key is always used implicitly in [processing statements](javascript:call_link\('abentable_processing_statements.htm'\)) as long as no secondary key is specified. In [table expressions](javascript:call_link\('abentable_expressions.htm'\)), the primary key must also be specified explicitly.
-   The primary key has the predefined name primary\_key, with which it can also be addressed explicitly in processing statements. In table expressions, primary\_key or an alias name must be specified if the primary key is to be used explicitly.
-   Access to an internal table using the primary table key is determined by the [table category](javascript:call_link\('abentable_category_glosry.htm'\) "Glossary Entry") and not the table key. For sorted tables and hashed tables, key access is always optimized using the primary table key. Primary key access to standard tables, however, performs a linear search.
-   The key fields of the primary table key of sorted tables and hashed tables are always read-only.
-   In the case of sorted tables and hashed tables, separate key administration exists for the primary table key, which enables optimized access but also affects the [memory requirement](javascript:call_link\('abenitab_key_memory.htm'\)) of the internal table. There is no separate administration for the primary table key of standard tables.

Hints

-   Since sorted tables and hashed tables have real key administration for the primary key, unlike standard tables, these tables are also grouped under the term [key tables](javascript:call_link\('abenkey_table_glosry.htm'\) "Glossary Entry").
-   To achieve optimized key access to standard tables, [secondary keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") can be used.

Example

Declaration of a hashed table with a unique primary key. The table is filled with data from a database table and accessed using a [table expression](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry") with values specified for the primary key.

DATA carrid TYPE spfli-carrid VALUE 'LH'.
cl\_demo\_input=>add\_field( CHANGING field = carrid ).
DATA connid TYPE spfli-connid VALUE '0400'.
cl\_demo\_input=>request( CHANGING field = connid ).
DATA spfli\_tab
  TYPE HASHED TABLE OF spfli
       WITH UNIQUE KEY primary\_key COMPONENTS carrid connid.
SELECT \*
       FROM spfli
       INTO TABLE @spfli\_tab.
cl\_demo\_output=>display(
  VALUE #( spfli\_tab\[ KEY primary\_key
                      carrid = carrid
                      connid = connid \] OPTIONAL ) ).

Continue
[itab - Standard Key](javascript:call_link\('abenitab_standard_key.htm'\))
[itab - Empty Table Key](javascript:call_link\('abenitab_empty_key.htm'\))


### abenitab_standard_key.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Data Objects](javascript:call_link\('abendata_objects.htm'\)) →  [Internal Tables](javascript:call_link\('abendobj_itab.htm'\)) →  [itab - Table Key](javascript:call_link\('abenitab_key.htm'\)) →  [itab - Primary Table Key](javascript:call_link\('abenitab_key_primary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Standard%20Key%2C%20ABENITAB_STANDARD_KEY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

itab - Standard Key

The standard key is a special [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") of an internal table.

-   [Key Fields of the Standard Key](#abenitab-standard-key-1-------declaration-of-the-standard-key---@ITOC@@ABENITAB_STANDARD_KEY_2)
-   [Notes on Use](#abenitab-standard-key-3---key-fields-of-the-standard-key-----the-key-fields-of-the-standard-key-are-defined-as-follows-------in-tables-with-a-structured-line-type--the-standard-key-is-formed-from-all-components-with--character-like--javascript-call-link---abencharlike-data-type-glosry-htm-----glossary-entry---and--byte-like-data-types--javascript-call-link---abenbyte-like-data-typ-glosry-htm-----glossary-entry----while-resolving-any-substructures-into-elementary-components--if-the-line-type-does-not-contain-any-components-like-these--the-standard-key-is--empty--javascript-call-link---abenitab-empty-key-htm-----for-standard-tables--meaning-it-does-not-contain-any-key-fields------the-standard-key-for-tables-with-non-structured-line-types-is-the-entire-table-line--if-the-line-type-itself-is-not-table-like--if-the-line-type-is-table-like--the-standard-key-is--empty--javascript-call-link---abenitab-empty-key-htm-----for-standard-tables---empty-standard-keys-are-not-possible-for-sorted-tables-and-hashed-tables--and-an-error-occurs-if-an-attempt-is-made-to-create-a-key-like-this---hints------in-tables-with-non-structured-line-types--the-standard-key-can-also-have-a-numeric-type-or-reference-type--this-does-not-apply-to-the-key-fields-if-the-line-types-are-structured------the--static-boxes--javascript-call-link---abenstatic-box-glosry-htm-----glossary-entry---of-a-structured-line-type-are-handled-like-regular-components-with-respect-to-the-standard-key---declaration-of-the-standard-key-----the-standard-key-can-be-declared-as-follows-------explicitly--using-the-additions--unique---non-unique-key--javascript-call-link---abaptypes-primary-key-htm-----of-the-statements--types--javascript-call-link---abaptypes-primary-key-htm-------data--javascript-call-link---abapdata-primary-key-htm-----and-so-on--where-the-addition-default-key-is-specified-instead-of-the-list-of-components------implicitly--if-no-explicit-primary-key-specification-is-made-in-the-declaration-of-a-standard-table-with-the-statement--data--javascript-call-link---abapdata-primary-key-htm----------implicitly--if-a-standard-table-type-with-a--generic-primary-table-key--javascript-call-link---abaptypes-keydef-htm-----is-specified-behind-type-in-the-statement--data--javascript-call-link---abapdata-referring-htm-------notes-on-use-----using-standard-keys-is-critical-for-the-following-reasons-------it-is-not-usually-enough-to-identify-the-key-fields-using-their-data-type-and-not-their-semantic-properties--this-often-leads-to-unexpected-behavior-in-sorts-and-other-accesses------the-fact-that-standard-keys-in-standard-tables-can-be--empty--javascript-call-link---abenitab-empty-key-htm-----often-causes-unexpected-behavior-as-well--for-example--using-keys-like-this-for--sorting--javascript-call-link---abapsort-itab-htm-----has-no-effect--whereas-a-corresponding--read--javascript-call-link---abapread-table-htm-----finds-the-first-line------the-standard-key-often-contains-too-many-key-fields--which-can-produce-performance-problems-in-key-accesses------if-using-the-standard-key-and-a-structured-line-type--all-character-like-and-byte-like-fields-of-sorted-tables-and-hashed-tables-are-read-only--which-can-cause-unexpected-runtime-errors---for-this-reason--the-primary-key-should-be-declared-by-listing-the-components-explicitly--if-possible--in-particular--the-primary-key-must-not-be-set-as-the-standard-key-by-mistake--the-key-must-not-be-forgotten-in-declarations-of-standard-tables-using-data--and-the-generic-table-type-must-not-be-used-unknowingly---example--internal-table-with-standard-key--in-the-structure-scarr--all-five-components-meet-the-requirements-for-the-standard-key-and-are-used-as-key-fields--in-a-key-access-using-a--table-expression--javascript-call-link---abentable-expression-glosry-htm-----glossary-entry----the-syntax-check-requires-that-each-key-field-of-the-primary-table-key-is-specified---data-scarr--tab---type-hashed-table-of-scarr--------with-unique-default-key------final-scarr--line------value----scarr--tab---key-primary--key-----------------------mandt------sy-mandt-----------------------carrid---------------------------------carrname-------------------------------currcode-------------------------------url-----------------optional----------abenitab-empty-key-htm-------------as-abap-release-758---copyright-2024-sap-se--all-rights-reserved----abap---keyword-documentation--javascript-call-link---abenabap-htm---------abap---programming-language--javascript-call-link---abenabap-reference-htm---------data-types-and-data-objects--javascript-call-link---abentypes-and-objects-htm---------data-objects--javascript-call-link---abendata-objects-htm---------internal-tables--javascript-call-link---abendobj-itab-htm---------itab---table-key--javascript-call-link---abenitab-key-htm---------itab---primary-table-key--javascript-call-link---abenitab-key-primary-htm---------------mail-gif-object-mail-gif--feedback-mail-for-displayed-topic---mail-feedback--mailto-f1-helpsap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Empty%20Table%20Key%2C%20ABENITAB_EMPTY_KEY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

itab - Empty Table Key

The [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") of a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") can be empty. An empty table key does not contain any key fields.

-   [Declaration](#abenitab-empty-key-1-------notes-on-use---@ITOC@@ABENITAB_EMPTY_KEY_2)
    -   [Uncritical Use](#abenitab-empty-key-3-----------critical-use---@ITOC@@ABENITAB_EMPTY_KEY_4)

Hint

[Sorted keys](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry") and [hash keys](javascript:call_link\('abenhash_key_glosry.htm'\) "Glossary Entry") are never empty, regardless of whether they are primary or [secondary](javascript:call_link\('abensecondary_key_glosry.htm'\) "Glossary Entry").

Declaration   

An empty primary table key can be created as follows:

-   Explicitly, with the addition [EMPTY KEY](javascript:call_link\('abaptypes_primary_key.htm'\)) of the statements [TYPES](javascript:call_link\('abaptypes_primary_key.htm'\)), [DATA](javascript:call_link\('abapdata_primary_key.htm'\)), and so on.
-   Explicitly, using an inline declaration [INTO TABLE @DATA*|*@FINAL(itab)](javascript:call_link\('abapinto_clause.htm'\)) in the statement SELECT
-   Implicitly, when using the [standard key](javascript:call_link\('abenitab_standard_key.htm'\)) if a structured line type does not contain any non-numeric elementary components or if an unstructured line type is table-like.

Notes on Use   

Uncritical Use   

An empty primary table key can be used to handle a table like an array. This means that filling the table and other accesses take place in such a way that no order is based on key values. In this case, an empty internal table key can be used in all statements in which its implicit or explicit specification determines the order in which the internal table is accessed.

Hints

-   Developers should always be aware that they are handling an empty primary table key. This can only be achieved when the empty key is declared explicitly. An implicit declaration using the [standard key](javascript:call_link\('abenitab_standard_key.htm'\)), in which the line type determines whether the primary table key is empty or not, is not usually suitable.
-   Even an empty primary key in a standard table has the order specified by the [primary index](javascript:call_link\('abenprimary_table_index_glosry.htm'\) "Glossary Entry"), which can be exploited in related index accesses or loop processing.

Example

A prominent example is the statement [LOOP AT itab](javascript:call_link\('abaploop_at_itab.htm'\)), where implicit or explicit use (using [USING primary\_key](javascript:call_link\('abaploop_at_itab_cond.htm'\))) defines the processing order with respect to the [primary table index](javascript:call_link\('abenprimary_table_index_glosry.htm'\) "Glossary Entry"), but has no other effect.

Critical Use   

In the following statements, which work with the primary table key without specifying the key fields explicitly, the specification of an empty primary table key is critical and generally produces unexpected behavior. An empty table key that is known statically produces a syntax check warning.

-   Primary table key specification using a work area:
    -   If [FROM wa](javascript:call_link\('abapread_table_key.htm'\)) is used to specify an empty table key for the statement [READ TABLE](javascript:call_link\('abapread_table.htm'\)), the first line of the internal table is read.
    -   If [FROM wa](javascript:call_link\('abapmodify_itab_single.htm'\)) is used to specify an empty table key for the statement [MODIFY](javascript:call_link\('abapmodify_itab.htm'\)), the first line of the internal table is modified.
    -   If [FROM wa](javascript:call_link\('abapdelete_itab_key.htm'\)) is used to specify an empty table key for the statement [DELETE](javascript:call_link\('abapdelete_itab.htm'\)), the first line of the internal table is deleted.
-   If the statement [SORT itab](javascript:call_link\('abapsort_itab.htm'\)) is executed without the addition BY and the primary table key is empty, the statement is ignored, which means no sorting takes place.
-   If the statement [DELETE ADJACENT DUPLICATES](javascript:call_link\('abapdelete_duplicates.htm'\)) contains an empty primary table key, no lines are deleted.
-   If the primary table key is empty, the statement [COLLECT](javascript:call_link\('abapcollect.htm'\)) always compresses the first line of the internal table. In this case, all components of the line type must be numeric.

Hint

The statements described above can be particularly unpredictable when using the [standard key](javascript:call_link\('abenitab_standard_key.htm'\)), which itself can be declared implicitly, to declare an empty internal table key.

Example

Typical use of a table with an empty table key, in which the order of the lines should not change due to sorting. A SORT source statement would have no effect.

DATA source
  TYPE STANDARD TABLE OF string
       WITH EMPTY KEY.
READ REPORT 'DEMO\_TAB\_EXP\_LINE' INTO source.
cl\_demo\_output=>display( source ).


### abenitab_key_primary.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Data Objects](javascript:call_link\('abendata_objects.htm'\)) →  [Internal Tables](javascript:call_link\('abendobj_itab.htm'\)) →  [itab - Table Key](javascript:call_link\('abenitab_key.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Primary%20Table%20Key%2C%20ABENITAB_KEY_PRIMARY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

itab - Primary Table Key

Each internal table has a primary table key that allows access to individual lines of the table by specifying a key.

-   The components of the primary table key are declared using the [UNIQUE*|*NON-UNIQUE KEY](javascript:call_link\('abaptypes_primary_key.htm'\)) additions of the statements [TYPES](javascript:call_link\('abaptypes_primary_key.htm'\)), [DATA](javascript:call_link\('abapdata_primary_key.htm'\)), and so on.
-   The [standard key](javascript:call_link\('abenitab_standard_key.htm'\)), which can be declared both explicitly and implicitly, has a special role.
-   The primary table key of a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") can also be [empty](javascript:call_link\('abenitab_empty_key.htm'\)), that is, it does not contain any key fields.
-   In the case of key accesses for internal tables, the primary key is always used implicitly in [processing statements](javascript:call_link\('abentable_processing_statements.htm'\)) as long as no secondary key is specified. In [table expressions](javascript:call_link\('abentable_expressions.htm'\)), the primary key must also be specified explicitly.
-   The primary key has the predefined name primary\_key, with which it can also be addressed explicitly in processing statements. In table expressions, primary\_key or an alias name must be specified if the primary key is to be used explicitly.
-   Access to an internal table using the primary table key is determined by the [table category](javascript:call_link\('abentable_category_glosry.htm'\) "Glossary Entry") and not the table key. For sorted tables and hashed tables, key access is always optimized using the primary table key. Primary key access to standard tables, however, performs a linear search.
-   The key fields of the primary table key of sorted tables and hashed tables are always read-only.
-   In the case of sorted tables and hashed tables, separate key administration exists for the primary table key, which enables optimized access but also affects the [memory requirement](javascript:call_link\('abenitab_key_memory.htm'\)) of the internal table. There is no separate administration for the primary table key of standard tables.

Hints

-   Since sorted tables and hashed tables have real key administration for the primary key, unlike standard tables, these tables are also grouped under the term [key tables](javascript:call_link\('abenkey_table_glosry.htm'\) "Glossary Entry").
-   To achieve optimized key access to standard tables, [secondary keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") can be used.

Example

Declaration of a hashed table with a unique primary key. The table is filled with data from a database table and accessed using a [table expression](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry") with values specified for the primary key.

DATA carrid TYPE spfli-carrid VALUE 'LH'.
cl\_demo\_input=>add\_field( CHANGING field = carrid ).
DATA connid TYPE spfli-connid VALUE '0400'.
cl\_demo\_input=>request( CHANGING field = connid ).
DATA spfli\_tab
  TYPE HASHED TABLE OF spfli
       WITH UNIQUE KEY primary\_key COMPONENTS carrid connid.
SELECT \*
       FROM spfli
       INTO TABLE @spfli\_tab.
cl\_demo\_output=>display(
  VALUE #( spfli\_tab\[ KEY primary\_key
                      carrid = carrid
                      connid = connid \] OPTIONAL ) ).

Continue
[itab - Standard Key](javascript:call_link\('abenitab_standard_key.htm'\))
[itab - Empty Table Key](javascript:call_link\('abenitab_empty_key.htm'\))


### abenitab_key_secondary.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Data Objects](javascript:call_link\('abendata_objects.htm'\)) →  [Internal Tables](javascript:call_link\('abendobj_itab.htm'\)) →  [itab - Table Key](javascript:call_link\('abenitab_key.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Secondary%20Table%20Key%2C%20ABENITAB_KEY_SECONDARY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

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


### abenitab_key_secondary_update.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Data Objects](javascript:call_link\('abendata_objects.htm'\)) →  [Internal Tables](javascript:call_link\('abendobj_itab.htm'\)) →  [itab - Table Key](javascript:call_link\('abenitab_key.htm'\)) →  [itab - Secondary Table Key](javascript:call_link\('abenitab_key_secondary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Updating%20Secondary%20Table%20Keys%2C%20ABENITAB_KEY_SECONDARY_UPDATE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

itab - Updating Secondary Table Keys

For all statements that change the content and structure of an internal table, the internal administration of the secondary keys is updated automatically as follows:

-   For all operations that insert lines into tables or delete lines from tables, the secondary key administration for unique keys is updated immediately, that is, a unique secondary key is up-to-date immediately after the operation ([direct update](javascript:call_link\('abendirect_update_glosry.htm'\) "Glossary Entry")). Non-unique secondary table keys are not updated immediately and only when the secondary key is next used explicitly using USING KEY or WITH KEY ... COMPONENTS ([lazy update](javascript:call_link\('abenlazy_update_glosry.htm'\) "Glossary Entry")). If an update violates secondary key uniqueness, a [catchable exception or runtime error occurs](javascript:call_link\('abenitab_key_duplicates.htm'\)).
    
    Inserting operations include table statements such as [INSERT](javascript:call_link\('abapinsert_itab.htm'\)) and [APPEND](javascript:call_link\('abapappend.htm'\)) and block operations in which the entire body of the table is filled at once, like for statements between internal tables, passing parameters to procedures, filling internal tables with SELECT, importing with [IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)), and so on. The operation for deleting table lines is the table statement [DELETE](javascript:call_link\('abapdelete_itab.htm'\)).
    
-   For operations that change the components of secondary table keys in existing lines, the secondary key administration is either updated directly or only at a specified synchronization time.
    
    -   If [MODIFY](javascript:call_link\('abapmodify_itab.htm'\)) is used to modify individual lines, any unique secondary keys are updated directly ([direct update](javascript:call_link\('abendirect_update_glosry.htm'\) "Glossary Entry")). If the modification produces duplicate entries, an uncatchable exception is raised.
    -   If field symbols or data references that point to table lines are used to modify individual lines, any unique secondary keys are updated the next time the internal table is accessed ([delayed update](javascript:call_link\('abendelayed_update_glosry.htm'\) "Glossary Entry")). The uniqueness check also only takes place at the time of synchronization. An internal table can therefore be in an inconsistent state with respect to the secondary key following a modification to existing lines using field symbols or data references. The corresponding [exception](javascript:call_link\('abenitab_key_duplicates.htm'\)) is only raised when the table is next used.
    
    In both cases, a non-unique key not updated until the secondary table key is next used explicitly ([lazy update](javascript:call_link\('abenlazy_update_glosry.htm'\) "Glossary Entry")).
    

The methods FLUSH\_ITAB\_KEY and FLUSH\_ITAB\_KEYS of the class CL\_ABAP\_ITAB\_UTILITIES can be used to update individual secondary keys or all secondary keys of an internal table explicitly in exceptional circumstances. These methods can be used for analysis and test purposes. It might also make sense to use them after making changes if the next access does not take place immediately afterwards to handle possible exceptions there and then.

Executable Example

The example for [Deletion Using Table Keys](javascript:call_link\('abendelete_itab_using_key_abexa.htm'\)) demonstrates the runtimes that are required to create the secondary key and when they occur.


### abenitab_key_secondary_usage.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Data Objects](javascript:call_link\('abendata_objects.htm'\)) →  [Internal Tables](javascript:call_link\('abendobj_itab.htm'\)) →  [itab - Table Key](javascript:call_link\('abenitab_key.htm'\)) →  [itab - Secondary Table Key](javascript:call_link\('abenitab_key_secondary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Using%20Secondary%20Keys%2C%20ABENITAB_KEY_SECONDARY_USAGE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

itab - Using Secondary Keys

Notes on Using Secondary Table Keys

-   The standard scenario for profitable use of secondary table keys is a very large internal table that is constructed once in the memory and whose content is then changed very infrequently. [Costs](javascript:call_link\('abenitab_key_memory.htm'\)) for the administration of the secondary keys are then only incurred during the construction of the internal table.
-   As a matter of principle, secondary hash keys should not have too many components to avoid overloading the system with the additional hash management. Sorted keys are preferable for secondary keys with a large number of components.
-   For an index table with secondary keys, the primary index of the table is updated immediately when lines are inserted or deleted using a secondary key. It should be noted that deleting a line from a standard table using a secondary key cannot be optimized because the index entry to be deleted must be searched for linearly.
-   Secondary keys might be useful for small internal tables in some circumstances because they ensure unique table entries in relation to certain components. Primary keys do not allow this, especially in the case of standard tables.
-   For read-only access, where ensuring unique table entries is not as important, non-unique secondary keys are usually sufficient. Read access here is almost as fast as for unique keys, whereas updating after a table modification is faster and is performed using a lazy update.
-   Secondary table keys should not be used in the following situations:
    -   For small internal tables (less than 50 lines), the performance benefits for read accesses are far outweighed by the increased memory and administration costs.
    -   In tables where a large number of changes are made, the costs incurred by updating the secondary keys outweighs the performance benefits in the case of reads. In delayed updates and lazy updates in particular, the update costs can actually be incurred by the read access for which the optimization was intended.
    -   Unless the uniqueness of table entries is of absolute importance, it is better to avoid using secondary hash keys.

Example

The program DEMO\_SECONDARY\_KEYS demonstrates how a secondary table key is specified and the resulting performance gain.


### abenitab_key_secondary_restrict.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Data Objects](javascript:call_link\('abendata_objects.htm'\)) →  [Internal Tables](javascript:call_link\('abendobj_itab.htm'\)) →  [itab - Table Key](javascript:call_link\('abenitab_key.htm'\)) →  [itab - Secondary Table Key](javascript:call_link\('abenitab_key_secondary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Restrictions%20for%20Secondary%20Keys%2C%20ABENITAB_KEY_SECONDARY_RESTRICT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20im
provement:)

itab - Restrictions for Secondary Keys

Internal tables with secondary keys can be used in all [processing statements for internal tables](javascript:call_link\('abentable_processing_statements.htm'\)) and other statements that work with internal tables. However, there are also operand positions for internal tables where the use of secondary keys does not make sense and is therefore not supported there.

The use of tables with secondary keys causes syntax or runtime errors for the following operand positions:

-   Internal tables of any table type but without secondary keys are possible for the following:
    -   itab in [SEARCH itab for ...](javascript:call_link\('abapsearch_itab.htm'\)) (only index tables, no hashed tables).
    -   Actual parameters for a [TABLES](javascript:call_link\('abapcall_function_destination_para.htm'\)) parameter for RFC.
-   Only standard tables without secondary keys are possible for the following:
    -   rspar in [SUBMIT WITH rspar](javascript:call_link\('abapsubmit_selscreen_parameters.htm'\)) and range\_tab in [SUBMIT WITH sel IN range\_tab](javascript:call_link\('abapsubmit_selscreen_parameters.htm'\))
    -   itab in [FIND IN TABLE itab](javascript:call_link\('abapfind_itab.htm'\)) and [REPLACE IN TABLE itab](javascript:call_link\('abapreplace_itab.htm'\))
    -   result\_tab in [SPLIT INTO TABLE result\_tab](javascript:call_link\('abapsplit.htm'\))
    -   column\_syntax in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)), in [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)), and in [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\))
    -   cond\_syntax in [WHERE](javascript:call_link\('abenwhere_logexp_dynamic.htm'\))
    -   source\_syntax in [SELECT](javascript:call_link\('abapfrom_clause.htm'\))
    -   target\_syntax in [INSERT](javascript:call_link\('abapiumd_target.htm'\)), [UPDATE](javascript:call_link\('abapiumd_target.htm'\)), [MODIFY](javascript:call_link\('abapiumd_target.htm'\)), and [DELETE](javascript:call_link\('abapiumd_target.htm'\))
    -   expr\_syntax in [UPDATE](javascript:call_link\('abapupdate_set_expression.htm'\))
    -   IN, OUT, INOUT parameters in [EXEC SQL - EXECUTE](javascript:call_link\('abapexec_procedure.htm'\))
    -   itab in [EXPORT TO INTERNAL TABLE itab](javascript:call_link\('abapexport_data_cluster_medium.htm'\)) and [IMPORT FROM INTERNAL TABLE itab](javascript:call_link\('abapimport_medium.htm'\))
    -   itab in [GENERATE SUBROUTINE POOL itab](javascript:call_link\('abapgenerate_subroutine_pool.htm'\)), [READ REPORT INTO itab](javascript:call_link\('abapread_report.htm'\)), [INSERT REPORT FROM itab](javascript:call_link\('abapinsert_report.htm'\)), and [SYNTAX-CHECK FOR itab](javascript:call_link\('abapsyntax-check_for_itab.htm'\)).
    -   itab in [EDITOR-CALL FOR itab](javascript:call_link\('abapeditor-call_for_itab.htm'\))
    -   itab in [WRITE TO itab](javascript:call_link\('abapwrite_to_itab.htm'\))


### abenitab_key_secondary.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Data Objects](javascript:call_link\('abendata_objects.htm'\)) →  [Internal Tables](javascript:call_link\('abendobj_itab.htm'\)) →  [itab - Table Key](javascript:call_link\('abenitab_key.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Secondary%20Table%20Key%2C%20ABENITAB_KEY_SECONDARY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

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


### abenitab_key_duplicates.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Data Objects](javascript:call_link\('abendata_objects.htm'\)) →  [Internal Tables](javascript:call_link\('abendobj_itab.htm'\)) →  [itab - Table Key](javascript:call_link\('abenitab_key.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Duplicate%20Unique%20Keys%2C%20ABENITAB_KEY_DUPLICATES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

itab - Duplicate Unique Keys

When lines are inserted into internal tables with a unique primary key or unique secondary key, duplicates can occur with respect to one or more of these keys. Depending on whether the insertion is a single record operation or a mass operation, the ABAP runtime framework reacts as follows to an attempt to insert an entry with duplicate key values:

-   First, it checks whether duplicate key values would occur with respect to the primary key. The system behavior is as follows depending on the operation:
    -   When single lines are inserted using the variant
        
        [INSERT wa INTO TABLE itab](javascript:call_link\('abapinsert_itab_position.htm'\))
        
        duplicate entries with respect to the primary key are ignored and sy-subrc is set to 4. This is often used to filter out duplicates when the table is constructed.
        
    -   In all other cases, such as
        
        [INSERT ... INTO itab INDEX idx](javascript:call_link\('abapinsert_itab_position.htm'\))
        [INSERT LINES OF](javascript:call_link\('abapinsert_itab_linespec.htm'\)) (bulk operation)
        [APPEND](javascript:call_link\('abapappend.htm'\))
        [COLLECT](javascript:call_link\('abapcollect.htm'\))
        [\=](javascript:call_link\('abapmove.htm'\)), [IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)) (bulk operations)
        
        the runtime error ITAB\_DUPLICATE\_KEY occurs.
        
-   A check is then made to see whether duplicate key values would occur with respect to any existing unique secondary keys. If this is the case,
    -   an exception of the class CX\_SY\_ITAB\_DUPLICATE\_KEY is raised for the statements [INSERT](javascript:call_link\('abapinsert_itab.htm'\)) and [APPEND](javascript:call_link\('abapappend.htm'\)) if the operation is a single record operation.
    -   For all other insert and assignment operations, particularly for all mass operations, the runtime error ITAB\_DUPLICATE\_KEY occurs.

Example

The first INSERT statement does not insert a line and sets sy-subrc to the value 4. The second INSERT statement produces a runtime error.

DATA itab TYPE SORTED TABLE OF i WITH UNIQUE KEY table\_line.
itab = VALUE #( ( 1 ) ( 2 ) ( 3 ) ).
INSERT 2 INTO TABLE itab.
INSERT 2 INTO itab INDEX 2.


### abenitab_key_secondary_duplicates.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Data Objects](javascript:call_link\('abendata_objects.htm'\)) →  [Internal Tables](javascript:call_link\('abendobj_itab.htm'\)) →  [itab - Table Key](javascript:call_link\('abenitab_key.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Duplicate%20Non-Unique%20Keys%2C%20ABENITAB_KEY_SECONDARY_DUPLICATES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

itab - Duplicate Non-Unique Keys

Non-unique table keys can produce duplicate lines with respect to these keys. This section describes the order of these duplicates when inserting into tables with non-unique sorted table keys. This order is ignored with respect to non-unique primary keys in standard tables.

-   [Single Record Operations](#abenitab-key-secondary-duplicates-1-------block-operations---@ITOC@@ABENITAB_KEY_SECONDARY_DUPLICATES_2)
-   [Special Features](#@@ITOC@@ABENITAB_KEY_SECONDARY_DUPLICATES_3)

Single Record Operations   

When individual lines are inserted where the insert position is determined using a table key, that is, in the case of

-   the operations [INSERT ... INTO TABLE ...](javascript:call_link\('abapinsert_itab_position.htm'\)) or
-   in [lazy updates](javascript:call_link\('abenlazy_update_glosry.htm'\) "Glossary Entry") of sorted secondary keys

the order of the duplicates with respect to the table key of the target table is determined in accordance with the insertion order of the individual lines. The duplicate line that was last inserted into the table is sorted before all other duplicates.

Block Operations   

For block operations such as an [assignment](javascript:call_link\('abapmove.htm'\)) of an internal table to another table or when inserting multiple lines using [INSERT LINES OF](javascript:call_link\('abapinsert_itab_linespec.htm'\)), the order of duplicates with respect to a sorted key of the target table in the block is taken from the source table. If there are already one or more duplicates in the target table, the source block duplicates are inserted in their original order in front of the first duplicate in the target table.

Special Features   

Some operations have the characteristics of block operations but are executed internally as sequences of single record operations. In this case, the original order of duplicates with respect to a sorted key in the target table is not retained. This is the case for the following operations:

-   Filling an internal table using [IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)) from a table previously stored using [EXPORT](javascript:call_link\('abapexport_data_cluster.htm'\)) and all operations that are based internally on such an import, such as [posting](javascript:call_link\('abapcall_function_update.htm'\)) operations.
-   Passing and inheriting internal tables for [Remote Function Calls](javascript:call_link\('abapcall_function_destination_para.htm'\)).
-   The deserialization of an internal table from a table previously serialized to XML using [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)).

Example

The result of the following insertion is

a a
b z
b y
b x
b b

TYPES:
  BEGIN OF line,
    col1 TYPE string,
    col2 TYPE string,
  END OF line,
  itab TYPE SORTED TABLE OF line
            WITH NON-UNIQUE KEY col1.
DATA(itab) = VALUE itab(
( col1 = 'b' col2 = 'b' )
( col1 = 'a' col2 = 'a' ) ).
FINAL(jtab) = VALUE itab(
( col1 = 'b' col2 = 'x' )
( col1 = 'b' col2 = 'y' )
( col1 = 'b' col2 = 'z' ) ).
INSERT LINES OF jtab INTO TABLE itab.
cl\_demo\_output=>display( itab ).
