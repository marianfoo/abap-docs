  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Cheat Sheets](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_blurb.htm) → 

Working with Internal Tables

This cheat sheet provides quick information and tips about working with internal tables in ABAP. Furthermore, it serves as a collection of syntax and code snippets in one place for your reference. For more details, refer to the respective topic in the ABAP Keyword Documentation.

-   [Internal tables ...](#@@ITOC@@ABAPSHEETS_INTERNAL_TABLES_1)
-   [Declaring internal tables](#@@ITOC@@ABAPSHEETS_INTERNAL_TABLES_2)
-   [Characteristics](#@@ITOC@@ABAPSHEETS_INTERNAL_TABLES_3)
    -   [Line type](#@@ITOC@@ABAPSHEETS_INTERNAL_TABLES_4)
    -   [Table category](#@@ITOC@@ABAPSHEETS_INTERNAL_TABLES_5)
    -   [Key attributes](#@@ITOC@@ABAPSHEETS_INTERNAL_TABLES_6)
-   [Working with Internal Tables](#@@ITOC@@ABAPSHEETS_INTERNAL_TABLES_7)
    -   [Creating internal tables](#@@ITOC@@ABAPSHEETS_INTERNAL_TABLES_8)
    -   [Filling internal tables](#@@ITOC@@ABAPSHEETS_INTERNAL_TABLES_9)
    -   [Reading from internal tables](#@@ITOC@@ABAPSHEETS_INTERNAL_TABLES_10)
    -   [Sorting internal tables](#@@ITOC@@ABAPSHEETS_INTERNAL_TABLES_11)
    -   [Modifying internal tables](#@@ITOC@@ABAPSHEETS_INTERNAL_TABLES_12)
    -   [Internal table functions](#@@ITOC@@ABAPSHEETS_INTERNAL_TABLES_13)
    -   [Excursion: Constructor expressions](#@@ITOC@@ABAPSHEETS_INTERNAL_TABLES_14)
-   [Demonstration program](#@@ITOC@@ABAPSHEETS_INTERNAL_TABLES_15)

Internal tables ...

-   are data types in ABAP.
-   can be seen as collections of table lines.
-   usually take up data from a fixed structure and store it in the working memory in ABAP, i. e. the data is stored line by line in memory, and each line has the same structure.
-   are relevant ...
    -   ... whenever you want to process a data set with a fixed structure within a program.
    -   ... to manage multiple related data records of the same data type in a single variable.
    -   ... for storing and formatting data from a database table within a program. Note: Due to their existence in memory, the data access with internal tables is a lot faster than accessing the data on database tables.
-   are declared within ABAP source code.
-   are dynamic data objects, i. e. the processing is very variable:
    -   table lines can, for example, be inserted, deleted, updated.
    -   the way how to access the tables can vary, e. g. access by index or key, and they can be processed sequentially in a loop.
-   are only temporarily available in the memory; after the program has been terminated, the contents of an internal table are not available any more.
-   are simple to manage for developers since the runtime system takes care of memory management automatically, i. e. the runtime system calculates an appropriate initial memory allocation for the internal table when it is declared; when you add more data to the table, the table grows automatically; when you empty the table, the system automatically releases excess memory.
-   are characterized by their line types, table categories and key attributes.

More information: [Internal Tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab.htm)

Declaring internal tables

The relevant syntactical element is TABLE OF in combination with [TYPES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes.htm) (to declare an internal table type) and [DATA](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdata.htm) (to create the internal table) and the additions [TYPE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdata_simple.htm) or [LIKE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdata_referring.htm). See more details and examples in section Creating internal tables further down.

Examples

TYPES itab\_type1 TYPE STANDARD TABLE OF data\_type ...
TYPES itab\_type2 LIKE SORTED   TABLE OF data\_object ...
DATA  itab1      TYPE          TABLE OF data\_type ...
DATA  itab2      TYPE HASHED   TABLE OF data\_type ...
DATA  itab3      TYPE                   table\_type ...
DATA  itab4      LIKE                   table ...

Note: If the table category (see below) is not specified (...TYPE TABLE OF...), it is automatically ...TYPE STANDARD TABLE OF...

Characteristics

Each internal table is characterized by three aspects. More details: [Internal Tables - Overview](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab_oview.htm).

Line type

-   Defines how each line of the internal table is set up, i. e. it describes what columns the table has
-   It can be any ABAP data type, e. g. a structure or an internal table
-   In most cases, the line type is a structure, which means that every line in the internal table contains a column with the name and type of the corresponding structure component
-   In a simple case, the line consists of a flat structure with elementary data objects; however, it can also be a deep structure whose components can be structures themselves or even internal tables

Table category

-   Determines how internal tables are managed and stored internally as well as how individual table entries will be accessed
-   Why relevant? The different approaches to accessing the data can make significant performance differences.
-   Note: There are two ways of accessing internal tables:
    -   Access by index: A line of an internal table is addressed by its line number.
    -   Access by key: A line of an internal table is addressed by looking for particular values in particular columns. Note: The columns in which you search may be key columns, but it can also be non-key columns.
-   There are three table categories:
    
    Category
    
    Details
    
    When to use
    
    Hints
    
    STANDARD
    
    \- contents are not stored in a particular sort order (but can be sorted with SORT), yet they have an internal linear index (that is also true for sorted tables, hence, both are called index tables)
    \- can be accessed by index and key
    \- key is never unique, hence duplicate entries are always allowed; adding new lines is fairly quick since there is no check necessary if an entry already exists
    \- standard table can be even declared with an empty if the key is not needed (addition WITH EMPTY KEY)
    
    \- if accessing single entries via their index or sequential processing are the primary use cases
    \- rule of thumb: if you add a lot to and read not too often from internal tables, standard tables are a good choice; if you read a lot from internal tables and modify them often, sorted and hashed tables are a good choice
    
    \- avoid large standard tables if table is accessed mainly via primary table key
    \- lines should be added using APPEND
    \- Read, modify and delete operations should be done by specifying the index (i. e. using the INDEX ABAP word with the relevant ABAP command)
    \- Standard tables have the least administration costs compared to hashed and sorted tables
    \- if the access by key is the primary access type, large standard tables (i. e. more than 100 lines) are not the appropriate table category because of the linear search
    
    SORTED
    
    \- contents of sorted tables are always and automatically sorted by the table key in ascending order
    \- they have an internal linear index (that is also true for standard tables, hence, both are called index tables)
    \- can be accessed by index and key
    \- key can be either unique or non-unique
    
    \- if a fast access to single entries via their key is the primary use case
    \- it is also suitable for partially sequential processing in loops (e. g. when specifying the table key and the WHERE condition) or index access; in principle, the data access is more efficient than with standard tables since the data is always sorted
    
    \- Sorted tables have lower administration costs compared to hashed tables (Note: Depending on the length of the key and the number of lines in an internal table, data access in the context of a sorted table might be as fast as or even faster than using a hashed table. Hence, if the table is not too big and the memory space is critical, a sorted table is preferable to a hashed table.)
    
    HASHED
    
    \- hashed tables do not have a linear index; they are managed using a special hash algorithm
    \- can be accessed by a unique key
    
    \- in case of large tables (e. g. if you want to use an internal table which resembles a large database table or for generally processing large amounts of data)
    \- if key access is the primary use case and a unique key can be defined
    
    \- duplicates are never allowed
    \- the response time is constant and independent of the number of table entries since the table entries are accessed using a hash algorithm
    \- hashed tables guarantee fast access but have the highest administration costs due to a greater memory overhead
    

Key attributes

-   key identifies the table line; this can be one or more table columns according to which a table line is identified
-   every internal table has a primary table key; optionally, they may also have secondary keys
-   key can be unique or non-unique (more than one line with the same key, i.e. duplicates, can exist in the internal table), the definition depends on the table category

Excursion: Primary and secondary table keys

More information: [Table Key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab_key.htm).

Examples for primary table keys:

... WITH     UNIQUE KEY comp1 comp2 ...
... WITH     UNIQUE KEY primary\_key COMPONENTS comp1 comp2 ...
... WITH NON-UNIQUE KEY primary\_key COMPONENTS comp1 comp2 ...
... WITH     UNIQUE KEY primary\_key ALIAS key\_name ... COMPONENTS ...
... WITH     UNIQUE KEY primary\_key COMPONENTS table\_line ...

The definition of the predefined primary table key primary\_key is optional. Hence, the first and second example are the same. When adding an alias (with the addition ALIAS), a self-defined key name can be specified for the primary key. The pseudo component table\_line can be used to define the entire line of the internal table as primary key. However, table\_line is meant to be used with unstructured line types, long keys should be avoided.

... WITH     UNIQUE DEFAULT KEY.
... WITH NON-UNIQUE DEFAULT KEY.

Instead of specifying individual components for the primary key , there is also an implicit form to determine the components using DEFAULT KEY:

-   in case of a structured line type: the primary key is composed of data fields that have a non-numeric, elementary data type
-   in case of a non-structured line type or the line type is not a table type: the primary key is composed of the whole table line
-   if the line type is an internal table: the primary key of standard tables remains empty; for sorted and hashed tables, the system reports a syntax error

Note: If an internal table is declared using DATA without explicitly defining the primary key, the addition WITH DEFAULT KEY is automatically added; however, if a table is declared using TYPES, this automatic addition does not happen. Since it might lead to unexpected consequences later, it is recommended to always define the keys explicitly. Or, explicitly define an empty key for standard tables to avoid issues regarding the keys without artificially defining keys that are actually not relevant.

... WITH EMPTY KEY.

Examples for secondary table keys:

... WITH     UNIQUE HASHED KEY key\_name COMPONENTS comp1 comp2 ...
... WITH     UNIQUE SORTED KEY key\_name COMPONENTS comp1 comp2 ...
... WITH NON-UNIQUE SORTED KEY key\_name COMPONENTS comp1 comp2 ...
... WITH NON-UNIQUE SORTED KEY key\_name ALIAS a\_name COMPONENTS comp1 comp2 ...

Secondary keys always have a self-defined name. They can be hashed and sorted while hashed secondary keys must be unique. The key components of the secondary key must be components of the line type. If the line type is not a structured data type, only the pseudo component table\_line can be specified as single component. An alias can be defined for a secondary key as well. In doing so, the secondary key can be addressed by the self-defined name as well as the alias.

When to actually use secondary keys?

-   to improve the performance of data retrieval from internal tables and guarantee uniqueness when accessing data
-   to enable optimized access to standard tables (huge advantage: secondary keys can be added to existing standard tables, thus, gaining the benefits of the other table types with respect to performance)
-   mainly for very large internal tables (where only few modifications occur afterwards); not suitable for small internal tables (less than 50 lines) since each secondary key means additional administration costs (they consume additional memory)

Examples

TYPES itab\_type TYPE HASHED TABLE OF spfli
   WITH     UNIQUE KEY carrid connid
   WITH NON-UNIQUE SORTED KEY city\_key COMPONENTS cityfrom cityto
   WITH NON-UNIQUE SORTED KEY airp\_key COMPONENTS airpfrom airpto.

A table type is declared for a hashed table with the line type of the database table spfli. Two components are used as primary table key. Furthermore, two secondary keys are declared with a self-defined name. The following example is identical to the one above, however, the implicit predefined primary key name primary\_key is mentioned explicitly:

TYPES itab\_type TYPE HASHED TABLE OF spfli
  WITH     UNIQUE        KEY primary\_key COMPONENTS carrid connid
  WITH NON-UNIQUE SORTED KEY city\_key COMPONENTS cityfrom cityto
  WITH NON-UNIQUE SORTED KEY airp\_key COMPONENTS airpfrom airpto.

The following example includes an alias for the primary key.

TYPES itab\_type TYPE HASHED TABLE OF spfli
  WITH     UNIQUE        KEY primary\_key ALIAS a\_name COMPONENTS carrid connid
  WITH NON-UNIQUE SORTED KEY city\_key COMPONENTS cityfrom cityto
  WITH NON-UNIQUE SORTED KEY airp\_key COMPONENTS airpfrom airpto.

In expressions and ABAP statements, the keys can be addressed using the defined names. Taking the [LOOP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_variants.htm) statement as an example, all the keys can be addressed with the addition USING KEY plus the name. For the primary keys, either primary\_key or the self-defined alias can be used.

LOOP AT itab INTO wa USING KEY ...
...
ENDLOOP.

Working with Internal Tables

Creating internal tables

As a best practice for declaring internal tables, it is recommended to create an internal table with this pattern in a program:

-   Define a structured data type
-   Define an internal table type
-   Create a variable, i. e. the internal table, that refers to that type.

You will also see internal tables that are declared by combining the variable creation and table type definition in one go. If the structured data and internal table types are globally available in the DDIC, a local definition within a program is not needed. The following example shows the pattern and various examples of declaring internal tables and types by including the local definition of structured data and internal table types for demonstration purposes.

Example

The following source code section taken from DEMO\_CS\_ITAB demonstrates various internal table definitions.

"1. Define line type locally
"If the type (e.g. from a structure of table) is globally
"available in the DDIC (e.g. demo\_cs\_struc or demo\_cs\_dbtab),
"a local definition is irrelevant.
TYPES: BEGIN OF ls\_struc,
         key\_field TYPE i,
         char1     TYPE c LENGTH 10,
         char2     TYPE c LENGTH 10,
         num1      TYPE i,
         num2      TYPE i,
       END OF ls\_struc.
"2. Define table type (including the access type and key information)
"Irrelevant if the type is globally available in the DDIC.
TYPES:
"standard table with primary non-unique key
tt\_st TYPE STANDARD TABLE OF ls\_struc WITH NON-UNIQUE KEY key\_field,
"standard table with empty key
tt\_st2 TYPE STANDARD TABLE OF ls\_struc WITH EMPTY KEY,
"standard table with default key (in this case, the key
"is composed of non-numeric data types)
tt\_st3 TYPE STANDARD TABLE OF ls\_struc WITH DEFAULT KEY,
"sorted table with primary non-unique key
tt\_so TYPE SORTED TABLE OF ls\_struc
  WITH NON-UNIQUE KEY key\_field,
"hashed table with primary unique key
tt\_ha TYPE HASHED TABLE OF ls\_struc
  WITH UNIQUE KEY key\_field,
"hashed table with primary unique key and explicitly
"defining the implicit primary\_key (note thst it is the same as tt\_ha)
tt\_ha2 TYPE HASHED TABLE OF ls\_struc
  WITH UNIQUE KEY primary\_key COMPONENTS key\_field,
"hashed table with unique key composed of the whole table line
tt\_ha3 TYPE HASHED TABLE OF ls\_struc
  WITH UNIQUE KEY primary\_key COMPONENTS table\_line,
"hashed table with primary unique key and secondary non-unique
"sorted key
tt\_ha4 TYPE HASHED TABLE OF ls\_struc
  WITH UNIQUE KEY key\_field
  WITH NON-UNIQUE SORTED KEY skey COMPONENTS char1,
"line type: global structure from DDIC
tt\_st4 TYPE STANDARD TABLE OF demo\_cs\_struc
  WITH NON-UNIQUE KEY key\_field,
"line type: global table from DDIC
tt\_st5 TYPE STANDARD TABLE OF demo\_cs\_dbtab
  WITH NON-UNIQUE KEY key\_field,
"line type: numeric data type
tt\_st6 TYPE STANDARD TABLE OF i WITH EMPTY KEY,
"line type: string data type
tt\_st7 TYPE STANDARD TABLE OF string WITH EMPTY KEY,
"type definition using LIKE based on a data object
"(in this case another internal table)
"tt\_like LIKE TABLE OF itab,
"type defining primary key and two secondary keys
tt\_ha\_skey TYPE HASHED TABLE OF ls\_struc
  WITH UNIQUE KEY primary\_key COMPONENTS key\_field char1
  WITH NON-UNIQUE SORTED KEY skey COMPONENTS num1
  WITH NON-UNIQUE SORTED KEY skey2 COMPONENTS num2,
"type defining primary key with an alias and a secondary key
tt\_ha\_skey2 TYPE HASHED TABLE OF ls\_struc
  WITH UNIQUE KEY primary\_key ALIAS pkey COMPONENTS key\_field char1
  WITH NON-UNIQUE SORTED KEY skey COMPONENTS num1,
"type defining primary key with an alias and a secondary key
"with an alias
tt\_ha\_skey3 TYPE HASHED TABLE OF ls\_struc
  WITH UNIQUE KEY primary\_key ALIAS pkey COMPONENTS key\_field char1
  WITH NON-UNIQUE SORTED KEY skey ALIAS akey COMPONENTS num1.
"3. Create internal tables
"a. from local/global (table) type -> recommended way
DATA: itab\_st\_a1 TYPE tt\_st,
      itab\_st\_a2 TYPE tt\_st2,
      itab\_st\_a3 TYPE tt\_st3,
      "from global DDIC table (access type + key info is taken over).
      itab\_st\_a4 TYPE demo\_cs\_dbtab,
      itab\_ha\_a1 TYPE tt\_ha4.
"b. Alternatives, e. g. using a short form or "saving" the extra
"creation of the type and include the table category and key info
"in the data declaration directly.
DATA: itab\_st\_b1 TYPE STANDARD TABLE OF ls\_struc,
      "Declaration from DDIC table by specifying e. g. a different
      "table category.
      itab\_st\_b3 TYPE SORTED TABLE OF demo\_cs\_dbtab
        WITH NON-UNIQUE KEY key\_field,
      "Declaration from a global DDIC structure.
      itab\_st\_b4 TYPE STANDARD TABLE OF demo\_cs\_struc,
      "Popular short form for declaring standard tables.
      "Same as itab\_st\_b4.
      itab\_st\_b5 TYPE TABLE OF demo\_cs\_struc,
      "Declaration in one go. Same as itab\_ha\_a1.
      itab\_ha\_b1 TYPE HASHED TABLE OF ls\_struc
       WITH UNIQUE KEY key\_field WITH NON-UNIQUE SORTED KEY skey
        COMPONENTS char1.

Filling internal tables

Add one line to an internal table using an existing structure (lv\_struc) and the [VALUE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_value.htm) operator. Existing values in the internal table are cleared using this way.

itab = VALUE #( ( lv\_struc ) ).

You can also add a line directly to the internal table without an existing structure using the VALUE operator. Note: The extra pair of brackets denotes a table line that is added. As shown further down, it can also be more table lines to be added to the internal table this way. The # sign in below example denotes that the line type can be derived from the table itab, i. e. the lines, and thus, the components and values, that are specified in the brackets following the # sign automatically assume the line type of itab. You can also use a line type in that position before the brackets to determine the type, e. g. if the type cannot be derived. In the second example, an internal table is [declared inline](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_inline.htm). It is assigned a line type via VALUE and the specified type (dtype).

itab = VALUE #( ( comp1 = a comp2 = b ... ) ).
DATA(some\_itab) = VALUE dtype( ( comp1 = a comp2 = b ... ) ).

Add several lines directly using the VALUE operator.

itab = VALUE #( ( comp1 = a comp2 = b ... )
                ( comp1 = c comp2 = d ... )
                ( comp1 = e comp2 = f ... ) ).

When using above assignments (itab = ...), the internal table is initialized and the existing contents are deleted. To add new lines without deleting existing contents, use the addition [BASE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvalue_constructor_params_itab.htm).

itab = VALUE #( BASE itab ( comp1 = a comp2 = b ... )
                          ( comp1 = c comp2 = d ... ) ).

Copy contents from another internal table that has the same line type. Note: Existing contents are deleted.

itab = itab2.

Excursion: Copy contents - How was it done in former ABAP times? Do not use it! Obsolete syntax.

MOVE itab2 TO itab.

Copy contents from another internal table that has a different line type using the CORRESPONDING operator. Note: Existing contents are deleted. See the ABAP Keyword Documentation for more syntax options and information, for example, the [mapping rules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencorresponding_constr_mapping.htm) when dealing with nonidentical field names.

itab = CORRESPONDING #( itab3 ).

Copy contents from another internal table that has a different line type using the CORRESPONDING operator while keeping existing contents.

itab = CORRESPONDING #( BASE ( itab ) itab3 ).

As an alternative to the CORRESPONDING operator, statements with [CORRESPONDING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmove-corresponding.htm) can be used. The addition KEEPING TARGET LINES preserves the table contents.

MOVE-CORRESPONDING itab3 TO itab.
MOVE-CORRESPONDING itab3 TO itab KEEPING TARGET LINES.

Add multiple lines from a database table to an internal table using [SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect.htm), for example, based on a condition. In below case, the internal table is created inline. If the variable exists, it is ... @itab. In this case, it is assumed that itab has the same line type as the database table. Note the @ sign before the internal table (see [host expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_host_expressions.htm)). There are much more syntax options for SELECT statements. Check the ABAP Keyword Documentation of the ABAP cheat sheet [ABAP SQL: Working with persisted data in database tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsheet_abap_sql.htm) for more information.

SELECT FROM dbtab
  FIELDS comp1, comp2 ...
  WHERE ...
  INTO TABLE @DATA(itab\_sel).

Sequentially add multiple rows from a database table to an internal table using SELECT ... ENDSELECT., for example, based on a condition. In this case, the selected data is first stored in a structure which can be further processed and added to an internal table.

SELECT FROM dbtab
  FIELDS comp1, comp2 ...
  WHERE ...
  INTO @DATA(struc\_sel).
  IF sy-subrc = 0.
    APPEND struc\_sel TO itab.
  ...
  ENDIF.
ENDSELECT.

Add multiple lines from a database table using SELECT, for example, based on a condition, if the database table has a different line type as the internal table. The \* sign means selecting all fields. In the other examples, specific fields are defined. The addition APPENDING CORRESPONDING FIELDS INTO TABLE adds the selected data to the bottom of the table without deleting existing table entries. The addition INTO CORRESPONDING FIELDS OF TABLE adds lines and deletes existing table entries.

SELECT FROM dbtab2
  FIELDS \*
  WHERE ...
  APPENDING CORRESPONDING FIELDS INTO TABLE @itab.
  "INTO CORRESPONDING FIELDS OF TABLE @itab.

Add multiple lines from an internal table to another internal table using SELECT. Note the alias name that must be defined for the internal table.

SELECT comp1, comp2, ...
  FROM @itab2 AS it\_alias
  INTO TABLE @DATA(itab\_sel).

Excursions with the SELECT statement

Combine data of multiple tables into an internal table using an [inner join](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninner_join_glosry.htm "Glossary Entry"). In below example, data of an internal and a database table is joined with a SELECT statement and the addition [INNER JOIN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_join.htm). Note the field list including fields from both tables. The fields are referred to using ~.

SELECT it\_alias~comp1, it\_alias~comp2, dbtab~comp3 ...
  FROM @itab AS it\_alias
  INNER JOIN dbtab ON it\_alias~comp1 = dbtab~comp1
  INTO TABLE @DATA(it\_join\_result).

Fill internal table from a database table using [subqueries](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensubquery_glosry.htm "Glossary Entry"). In both of the following examples, an internal table is filled from a database table. In the first example, a subquery is specified in the WHERE clause with the ABAP words NOT IN. It is checked whether a value matches a value in a set of values specified in parentheses. In the second example, an internal table is filled depending on data in another table. A subquery is specified in the WHERE clause with the ABAP word EXISTS. In this case, it checks the result of the subquery that consists of another SELECT statement, i. e. it is checked if an entry exists in a table based on the specified conditions.

SELECT comp1, comp2, ...
  FROM dbtab
  WHERE comp1 NOT IN ( a, b, c ... )
  INTO TABLE @DATA(it\_subquery\_result1).
SELECT comp1, comp2, ...
  FROM dbtab
  WHERE EXISTS
    ( SELECT 'X' FROM @itab AS itab\_alias
      WHERE comp1 = dbtab~comp1 )
  INTO TABLE @DATA(it\_subquery\_result2).

Fill internal table from a table based on the existence of data in another table using the addition [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenwhere_all_entries.htm).

Note: Ensure that the internal table from which to read is not initial. It is therefore recommended to use a subquery as shown above: ... ( SELECT ... FROM @itab AS itab\_alias WHERE ...).

IF itab IS NOT INITIAL.
SELECT dbtab~comp1, dbtab~comp2, ...
  FROM dbtab
  FOR ALL ENTRIES IN @itab
  WHERE comp1 = @itab-comp1
  INTO TABLE @DATA(it\_select\_result).
ENDIF.

Adding lines using the keywords APPEND and INSERT

Both statements add one or more data sets to an internal table. While APPEND adds at the bottom of the internal table, INSERT can be used to add lines at a specific position in tables. If you go without specifying the position, then the lines are added at the bottom of the table, too. However, when using INSERT, sy-tabix is not set as compared to APPEND. See more details here: [APPEND](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapappend.htm), [INSERT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinsert_itab.htm).

Notes on using APPEND:

-   Standard tables: Lines are appended directly and without checking the content of the internal table.
-   Sorted tables: Lines are only appended if they match the sort order and do not create duplicate entries if the primary table key is unique.
-   Hashed tables: Lines cannot be appended.

Add a line to the internal table. The example shows both, a structure that is created using the VALUE operator and added as well as an existing structure that is added.

APPEND VALUE #( comp1 = a comp2 = b ... ) TO itab.
APPEND lv\_struc TO itab.

Add an initial line to the internal table without providing any field values.

APPEND INITIAL LINE TO itab.

Add all lines from another internal table. Note: See the section on the VALUE operator below for an alternative to this.

APPEND LINES OF itab2 TO itab.

Add lines from another internal table with a specified index range.

APPEND LINES OF itab2 FROM i1 TO i2 TO itab.

Insert a line into an internal table. The example shows both, a structure that is created using the VALUE operator and inserted as well as an existing structure that is inserted.

INSERT VALUE #( comp1 = a comp2 = b ... ) INTO TABLE itab.
INSERT lv\_struc INTO itab.

Insert an initial line into the internal table without providing any field values.

INSERT INITIAL LINE INTO TABLE itab.

Insert lines from another internal table.

INSERT LINES OF itab2 INTO TABLE itab.

Insert lines from another internal table with a specified index range.

INSERT LINES OF itab2 FROM i1 TO i2 INTO itab.

Insert lines from another internal table at a specific position. The specification of the range (... FROM ... TO ...) is optional here.

INSERT LINES OF itab2 FROM i1 TO i2 INTO itab INDEX 3.

Collect values into internal table

Use the [COLLECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcollect.htm) keyword, for example, to add the values of numeric components to the corresponding values in an internal table. Use it mainly for internal tables with a unique primary key, especially hashed tables.

COLLECT VALUE dtype( comp1 = a comp2 = b ... ) INTO itab.

Reading from internal tables

Read single line by index ...

... using a [table expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_expressions.htm). The read result is stored in a variable that might be declared inline. The number in the square brackets represents the index. A line that is not found results in an error. Hence, to avoid a runtime error, you can use a [TRY ... CATCH ... ENDTRY.](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptry.htm) block. The following examples go with the block. The addition KEY ... INDEX ... used in the third example is optional. It determines the line to be read from the primary table index. If the addition is not used, the internal table must be an index table.

DATA(lv1) = itab\[ i \].
TRY.
  DATA(lv2) = itab\[ i \].
  CATCH cx\_sy\_itab\_line\_not\_found.
  ...
ENDTRY.
DATA(lv3) = itab\[ KEY primary\_key INDEX i \].

... into a [work area](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenwork_area_glosry.htm "Glossary Entry") or a [field symbol](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfield_symbol_glosry.htm "Glossary Entry") using a [READ TABLE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_table.htm) statement.

Some of the following examples with READ TABLE only show one option, e. g. with work area or field symbol. The advantage of using a field symbol is that is serves as a pointer (compared to a variable as work area) and improves the performance. The addition USING KEY used in the third example is optional. It determines the line to be read from the primary table index. If the addition is not used, the internal table must be an index table.

READ TABLE itab INTO DATA(wa1a) INDEX i.
READ TABLE itab ASSIGNING FIELD-SYMBOL(<fs1>) INDEX i.
READ TABLE itab INTO DATA(wa1b) INDEX i USING KEY primary\_key.

Read single component by index ...

... using a table expression.

DATA(lv3) = itab\[ i \]-comp1.

... after reading a line into a work area or field symbol using a READ TABLE statement.

READ TABLE itab INTO DATA(wa2) INDEX i.
DATA(lv4) = wa2-comp1.
READ TABLE itab ASSIGNING FIELD-SYMBOL(<fs2>) INDEX i.
DATA(lv5) = <fs2>-comp1.

Read single line using a table key

Read line using the primary key (or the alias if available. The examples show how a line can be read using the explicitly specified table key, here the primary key, using both table expressions and READ TABLE statements. When using table expressions, the addition COMPONENTS is optional. This is not true for READ TABLE statements when explicitly specifying the table key in this context. However, it is possible to go without the addition COMPONENTS and the explicit table key here. In that case, the primary table key is used and all components belonging to the primary key must be specified.

DATA(lv6) = itab\[ KEY primary\_key COMPONENTS comp1 = a ... \].
DATA(lv\_alias) = itab\[ KEY pkey\_alias COMPONENTS comp1 = a ... \]. "alias
DATA(lv7) = itab\[ KEY primary\_key comp1 = a ... \].
READ TABLE itab INTO DATA(wa) WITH TABLE KEY
    primary\_key COMPONENTS comp1 = a ... .
READ TABLE itab INTO DATA(wa) WITH TABLE KEY comp1 = a ... .

Read line using the secondary key (or its alias, if available). It is actually the same syntax as above with the key name following KEY.

DATA(lv9) = itab\[ KEY sec\_key COMPONENTS comp2 = b ... \].
DATA(lv10) = itab\[ KEY sec\_key\_alias COMPONENTS comp2 = b ... \].
READ TABLE itab INTO DATA(wa4) WITH TABLE KEY sec\_key COMPONENTS comp2 = b ...

Read single line by free key ...

... using a table expression and READ TABLE statements. The specified components need not belong to a table key.

DATA(lv11) = itab\[ comp3 = c comp4 = d ... \].
READ TABLE itab INTO DATA(wa4) WITH KEY comp3 = c comp4 = d ...

Read multiple lines using loops

Sequentially read all lines of a table one after another, for example, into a work area. You might also go without any addition to the [LOOP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_variants.htm) statement, i. e. just LOOP AT itab. ... ENDLOOP.. In this case, all lines of the internal table are sequentially read. Within the LOOP ... ENDLOOP statement, you write the statements that process each table line.

LOOP AT itab INTO DATA(wa5).
  ...
ENDLOOP.

Sequentially read multiple lines of a table into a work area by specifying an index range.

LOOP AT itab INTO DATA(wa6) FROM i1 TO i2.
  ...
ENDLOOP.

Sequentially read multiple lines of a table into a field symbol by specifying a condition.

LOOP AT itab ASSIGNING FIELD-SYMBOL(<fs3>) WHERE comp1 <> a AND comp2 < i ...
  ...
ENDLOOP.

Sequentially read multiple lines of a table into a field symbol by (primary or secondary) key

LOOP AT itab ASSIGNING FIELD-SYMBOL(<fs4>) USING KEY sec\_key.
  ...
ENDLOOP.

Sequentially read multiple lines of a table without an interest in the table field values, for example, if you are interested in system fields. The WHERE clause must be defined, too.

LOOP AT itab TRANSPORTING NO FIELDS WHERE comp1 = ...
  ...
ENDLOOP.

Sequentially read multiple lines of a table while grouping, i. e. you form groups with lines that have the same values in specified fields. You might also want to loop at the group itself.

LOOP AT itab ASSIGNING FIELD-SYMBOL(<fs>) GROUP BY ...
  ...
ENDLOOP.
...
LOOP AT GROUP <fs> ASSIGNING FIELD-SYMBOL(<fs2>) ...
  ...
ENDLOOP.

Sorting internal tables

Standard and hashed tables can be sorted using the keyword [SORT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsort_itab.htm) in various ways, e. g. by specifying the sort order and also including a component.

SORT itab ASCENDING.
SORT itab DESCENDING.
SORT itab BY comp1 ASCENDING.
SORT itab BY comp2 DESCENDING.

Modifying internal tables

Modify ...

... a whole line from a work area or an existing structure. The work area or structure must be compatible to the line type of the internal table. The first line found in the internal table is processed whose values in the columns of the table key used match those of the corresponding components of the work area or structure. If the key fields in the work area are empty, no entries are processed.

MODIFY TABLE itab FROM VALUE #( comp1 = a comp2 = b ... ).
MODIFY TABLE itab FROM lv\_struc.

... a whole line from a work area by specifying an index. Note that it is only MODIFY instead of MODIFY TABLE as above.

MODIFY itab FROM VALUE #( comp1 = a comp2 = b ... ) INDEX i.

... particular fields of a line without overwriting other fields. The below example includes the addition INDEX. Only those fields that are specified after the addition TRANSPORTING are changed.

MODIFY itab FROM VALUE #( comp1 = a comp2 = b ... ) INDEX i    TRANSPORTING comp1 comp2.

... a line based on a condition. The below example includes the addition TRANSPORTING.

MODIFY itab FROM VALUE #( comp1 = a comp2 = b ... ) TRANSPORTING    comp1 comp2 WHERE comp2 < ...

... a line by specifying a table key. The work area or structure must be compatible to the line type of the internal table. The first line found in the internal table is processed whose values in the columns of the table key used match those of the corresponding components of the work area or structure. If the key fields in the work area are empty no entries are processed. The below example also includes the addition TRANSPORTING.

MODIFY TABLE itab FROM VALUE #( comp1 = a comp2 = b ... )
  USING KEY sec\_key TRANSPORTING comp2 ...
MODIFY TABLE itab FROM lv\_struc.

Further Information

More information on the MODIFY statement: [MODIFY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_itab.htm).

Modify a table entry ...

... in a particular line by specifying the index.

itab\[ i \]-comp1 = ...

... by key expression. See more examples for possible key expressions, i. e. with primary or secondary key, above.

itab\[ comp1 = a comp2 = b ... \]-comp1 = ...

Modify multiple table entries ...

...using a loop.

Note that the LOOP statement can be enriched with various options, for example, by setting a condition. See more options in the section Reading from internal tables above. There might also be other options to achieve the same, for example, by using a table expression or a MODIFY statement within a loop. Both alternatives must be handled with care if working with an implicit index. Hence, the explicit specification of the table index is recommended.

LOOP AT itab ASSIGNING FIELD-SYMBOL(<fs>).
  <fs>-comp1 = y.
  <fs>-comp2 = z.
  ...
ENDLOOP.

Delete ...

... a line by explicitly specifying the key. The following two examples can be considered as alternatives when referring to primary keys. The first statement explicitly specifies the primary key with the addition COMPONENTS. In the second example, the COMPONENTS can be considered optional if the primary key components are fully specified.

DELETE TABLE itab WITH TABLE KEY primary\_key
    COMPONENTS comp1 = ...
DELETE TABLE itab WITH TABLE KEY comp1 = ...

... a line from a work area or structure by implicitly specifying the key. The key is implicitly specified within the work area.

DELETE TABLE itab FROM VALUE #( comp1 = ...).

... a line by index.

DELETE itab INDEX i.

... multiple lines by specifying an index range.

DELETE itab FROM i1 TO i2.

... multiple lines by specifying a condition.

DELETE itab WHERE comp1 < i ...

... adjacent duplicates. Note that the duplicates must really be next to each other in the table. You can sort standard tables before triggering this kind of deletion.

DELETE ADJACENT DUPLICATES FROM itab.

... values of a whole column using a loop.

LOOP AT itab ASSIGNING FIELD-SYMBOL(<del>).
  CLEAR <del>-comp.
ENDLOOP.

Further Information

More information on the DELETE statement: [DELETE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdelete_itab.htm).

... complete table, i. e. remove all contents using the keywords CLEAR or FREE. With using FREE, you also release the memory area occupied by the internal table. This is not true for CLEAR which is beneficial for the performance. See more information here: [CLEAR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclear.htm), [FREE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfree_dataobject.htm).

CLEAR itab.
FREE itab.

Internal table functions

More information: [Table Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_functions.htm).

line\_exists( ): Check if a line exists.

IF line\_exists( itab\[ comp1 = a ... \] ).
  ...
ENDIF.

lines( ): Check how many lines exist in an internal table. The function returns an integer.

DATA(itab\_lines) = lines( itab ).

line\_index( ): Check the index of a specific line. The function returns an integer.

DATA(idx) = line\_index( itab\[ comp1 = a ...\] ).

Excursion: Constructor expressions

[VALUE operator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_value.htm)

Add lines of other tables using the addition LINES OF. Note: Without the addition BASE existing contents are deleted. The line type of the other internal table must match the one of the target internal table.

itab = VALUE #( ( comp1 = a comp2 = b ...)
                ( comp1 = a comp2 = b ...)
                ( LINES OF itab2 )
                ... ).

[CORRESPONDING operator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expr_corresponding.htm)

Copy data from a deep internal table to another deep internal table. With the addition BASE, the contents are kept. See also the alternative MOVE-CORRESPONDING statements.

itab\_nested2 = CORRESPONDING #( DEEP itab\_nested1 ).
itab\_nested2 = CORRESPONDING #( DEEP BASE ( itab\_nested2 ) itab\_nested1 ).
MOVE-CORRESPONDING itab\_nested1 TO itab\_nested2 EXPANDING NESTED TABLES.
MOVE-CORRESPONDING itab\_nested1 TO itab\_nested2 EXPANDING NESTED TABLES KEEPING TARGET LINES.

[COND](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconditional_expression_cond.htm) and [SWITCH](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconditional_expression_switch.htm) operators

Modify multiple table entries based on conditions in a loop.

LOOP AT itab ASSIGNING FIELD-SYMBOL(<fs5>).
  <fs5>-comp5 = COND #( WHEN <fs5>-comp5 = a
                        THEN b
                        ELSE c ).
  <fs5>-comp6 = COND #( WHEN <fs5>-comp6 < d
                        THEN e
                        ELSE f ).
  <fs5>-comp7 = COND #( WHEN <fs5>-comp7 < g AND <fs5>-comp6 > h
                        THEN i
                        ELSE j
  ...
ENDLOOP.

LOOP AT itab ASSIGNING FIELD-SYMBOL(<fs6>).
  <fs6>-comp5 = SWITCH #( <fs6>-comp5 WHEN a
                                      THEN b
                                      ELSE c).
  <fs6>-comp6 = SWITCH #( <fs6>-comp6 WHEN d
                                      THEN e
                                      ELSE f).
  ...
ENDLOOP.

[FILTER operator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_filter.htm)

Create an internal table by copying data from another internal table filtering out lines that do not match the WHERE condition. Filter internal table, i. e. extract data from internal tables, ...

... by condition.

DATA(filter1) = FILTER #( itab WHERE comp1 < i ).

... by condition with the addition EXCEPT that excludes data according to a condition.

DATA(filter2) = FILTER #( itab EXCEPT WHERE comp1 < i ).

... by using a filter table.

DATA(filter3) = FILTER #( itab IN filter\_tab WHERE comp1 < i.

Iterations with[FOR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfor.htm)

Get values of (one column in) an internal table. In below example, ls1 represents an iteration variable that holds the data while looping over the table. In contrast to LOOP statements, the sequential processing cannot be debugged. The components, and thus the table line, that should be returned are specified within the pair of brackets before the closing bracket. In below case, it is one component. It can also be more. The demonstration program [Working with internal tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensheet_itab_abexa.htm) includes more options with FOR.

DATA(lv) = VALUE dtype( FOR ls1 IN itab ( ls1-comp1 ) ).

Get values of (one column in) an internal table based on conditions.

DATA(lv2) = VALUE dtype( FOR ls2 IN itab WHERE ( comp1 < i ) ( ls2-comp1 ) ).

Demonstration program

Executable Example

The example [Working with internal tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensheet_itab_abexa.htm) demonstrates the abovementioned syntactical options in one program.

Continue
![Example](exa.gif "Example") [Working with Internal Tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensheet_itab_abexa.htm)