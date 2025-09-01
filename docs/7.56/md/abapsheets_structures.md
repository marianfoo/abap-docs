  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Cheat Sheets](javascript:call_link\('abenabap_blurb.htm'\)) → 

Structures in a Nutshell

This cheat sheet provides information and tips on [structures](javascript:call_link\('abenstructure_glosry.htm'\) "Glossary Entry") in a nutshell. Furthermore, it serves as a collection of syntax and code snippets in one place for your reference. For more details, refer to the respective topic in the ABAP Keyword Documentation.

-   [Structures ...](#@@ITOC@@ABAPSHEETS_STRUCTURES_1)
-   [Creating structures and structured types](#@@ITOC@@ABAPSHEETS_STRUCTURES_2)
-   [Variants of structures](#@@ITOC@@ABAPSHEETS_STRUCTURES_3)
-   [Working with structures](#@@ITOC@@ABAPSHEETS_STRUCTURES_4)
    -   [Accessing components of structures](#@@ITOC@@ABAPSHEETS_STRUCTURES_5)
    -   [Filling structures](#@@ITOC@@ABAPSHEETS_STRUCTURES_6)
    -   [Clearing structures](#@@ITOC@@ABAPSHEETS_STRUCTURES_7)
    -   [Structures in use in the context of tables](#@@ITOC@@ABAPSHEETS_STRUCTURES_8)
    -   [Excursion: Including structures](#@@ITOC@@ABAPSHEETS_STRUCTURES_9)
-   [Demonstration program](#@@ITOC@@ABAPSHEETS_STRUCTURES_10)

Structures ...

-   (or structured [data objects](javascript:call_link\('abendata_object_glosry.htm'\) "Glossary Entry")) are ABAP variables typed with [structured types](javascript:call_link\('abenstructured_type_glosry.htm'\) "Glossary Entry").
-   are [complex data types](javascript:call_link\('abencomplex_data_type_glosry.htm'\) "Glossary Entry").
-   are composed of a sequence of other data objects which are called [components](javascript:call_link\('abencomponent_glosry.htm'\) "Glossary Entry").
-   have components that can be of any type, that is, they can themselves be, for example, structures or [internal tables](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry").
-   summarize different pieces of information, that is, data objects, that belong together. A typical example is the following: an address has several components like name, street, city, and so on.
-   mostly serve as line types of internal tables and [database tables](javascript:call_link\('abendatabase_table_glosry.htm'\) "Glossary Entry").
-   are often used to process data sequentially, such as the data stored in the rows and columns of a database table.
-   and structured types can typically be found in the [ABAP Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry"), sometimes in [global classes](javascript:call_link\('abenglobal_class_glosry.htm'\) "Glossary Entry"); or they can be defined locally in ABAP programs.
    -   Most of the structures that are worked with in ABAP programs may be globally defined structures in the DDIC.
    -   Why? Apart from globally defined structures in the DDIC, each database table or [view](javascript:call_link\('abenview_glosry.htm'\) "Glossary Entry") constitutes a structured type. When a database table etc. is activated, a globally available structured type of the same name is created, too. Hence, in an ABAP program, a database table's name is typically used as type name to declare data objects, for example, structures or internal tables.
-   can be addressed as a whole. You can also address the individual components of structures.

Further Information

See the topic [Structures](javascript:call_link\('abendata_objects_structure.htm'\)) for more information.

Creating structures and structured types

Note: This cheat sheet focuses on locally defined structures and structured types.

The typical syntactical elements are [BEGIN OF ... END OF ...](javascript:call_link\('abaptypes_struc.htm'\)) in combination with [TYPES](javascript:call_link\('abaptypes.htm'\)) to create a structured type and [DATA](javascript:call_link\('abapdata.htm'\)) to create a structure.

Creating structured types

The structures' components are listed between ... BEGIN OF ... and ... END OF ....

TYPES: BEGIN OF structured\_type,
         comp1 TYPE ... ,
         comp2 TYPE ... ,
         comp3 TYPE ... ,
         ... ,
       END OF structured\_type.

Alternatively, you could go with the following syntax, however, a chained statement with the colon : above is preferable due to better readability.

TYPES BEGIN OF structured\_type.
TYPES comp1 TYPE ... .
TYPES comp2 TYPE ... .
TYPES comp3 TYPE ... .
... .
TYPES END OF structured\_type.

As mentioned above, the components of structures can be of any type. They can be [elementary](javascript:call_link\('abenelementary_data_type_glosry.htm'\) "Glossary Entry") and also complex, that is, a structure component can be a structure or internal table. Besides, the components can be [reference variables](javascript:call_link\('abenreference_variable_glosry.htm'\) "Glossary Entry"), too.

For the components, the additions [TYPE](javascript:call_link\('abapdata_simple.htm'\)) and [LIKE](javascript:call_link\('abapdata_referring.htm'\)) are possible. Note: Setting default values with [VALUE](javascript:call_link\('abapdata_options.htm'\)) is - in contrast to the creation of structures using a DATA statement as shown further down - not possible in this case.

TYPES: BEGIN OF structured\_type,
         comp1 TYPE i,
         comp2 TYPE c LENGTH 5,
         comp3 TYPE local\_structured\_type,
         comp4 TYPE itab,
         comp5 TYPE ddic\_type,
         comp6 TYPE REF TO ...,
         comp7 like data\_object,
         ... ,
       END OF structured\_type.

Creating structures

There are multiple ways to create structures in a program using a DATA statement:

-   Creating a structure either based on a local type or a globally available type from the DDIC:
    
    DATA ls\_from\_local TYPE structured\_type,
         ls\_from\_global TYPE sflight.
    
-   Creating a structure by directly specifying the components using ... BEGIN OF ... END OF .... The syntax is similar to the TYPES statement. Here, default values can be set with VALUE.
    
    DATA: BEGIN OF structure,
            comp1 TYPE ... ,
            comp2 TYPE ... VALUE ... ,
            comp3 TYPE i VALUE 99 ,
            comp4 TYPE i VALUE IS INITIAL,
            comp5 TYPE local\_structured\_type,
            comp6 TYPE itab,
            comp7 TYPE ddic\_type,
            comp8 TYPE REF TO ...,
            comp9 like data\_object,
            ... ,
          END OF structure.
    
    Alternatively and similar to the TYPES statement, you could go with the following syntax, however, a chained statement with the colon : as above is preferable due to better readability.
    
    DATA BEGIN OF structure.
    DATA comp1 TYPE ... .
    DATA comp2 TYPE ... VALUE ... .
    ... .
    DATA END OF structure.
    
-   Creating a structure by referring to local structured data object using LIKE.
    
    DATA some\_struc LIKE other\_struc.
    

Variants of structures

Depending on the component type, the structure can be a [flat structure](javascript:call_link\('abenflat_structure_glosry.htm'\) "Glossary Entry"), a [nested structure](javascript:call_link\('abennested_structure_glosry.htm'\) "Glossary Entry"), or a [deep structure](javascript:call_link\('abendeep_structure_glosry.htm'\) "Glossary Entry").

Flat structure

Flat structures contain only elementary types that have a fixed length, that is, there are no internal tables, reference types or strings as components:

DATA: BEGIN OF structure,
        comp1 TYPE i,
        comp2 TYPE c LENGTH 15,
        comp3 TYPE p LENGTH 8 DECIMALS 2,
        ... ,
      END OF structure.

Note: Nesting does not play a role in this context. Even a nested structure is flat unless a substructure contains a deep component.

Nested structure

At least one component of a structure is a [substructure](javascript:call_link\('abensubstructure_glosry.htm'\) "Glossary Entry"), that is, it refers to another structure. The following example has several substructures.

DATA: BEGIN OF address\_n,
        BEGIN OF name,
          title   TYPE string VALUE \`Mr.\`,
          prename TYPE string VALUE \`Duncan\`,
          surname TYPE string VALUE \`Pea\`,
        END OF name,
        BEGIN OF street,
          name   TYPE string VALUE \`Vegetable Lane\`,
          number TYPE string VALUE \`11\`,
        END OF street,
        BEGIN OF city,
          zipcode TYPE string VALUE \`349875\`,
          name    TYPE string VALUE \`Botanica\`,
        END OF city,
      END OF address\_n.

Deep structure

A deep structure contains at least one internal table, reference type, or string as a component.

DATA: BEGIN OF address\_d,
        name   TYPE string VALUE \`Mr. Duncan Pea\`,
        street TYPE string VALUE \`Vegetable Lane 11\`,
        city   TYPE string VALUE \`349875 Botanica\`,
        contact\_details TYPE TABLE OF string WITH EMPTY KEY,
      END OF address\_d.

Despite that fact that the following structure looks fairly simple, it is not a flat structure but a deep structure since it contains strings.

DATA: BEGIN OF address,
        name   TYPE string VALUE \`Mr. Duncan Pea\`,
        street TYPE string VALUE \`Vegetable Lane 11\`,
        city   TYPE string VALUE \`349875 Botanica\`,
      END OF address.

Working with structures

Accessing components of structures

The structure as a whole and also the individual components can be addressed. To address the components, you use the [structure component selector](javascript:call_link\('abenstructure_component_sel_glosry.htm'\) "Glossary Entry") \-:

structure-substructure-comp1 ...
address-name ...

Nested components can be addressed via chaining:

struct-substruc-comp1 ...
address\_n-name-title ...

Hints

-   You can refer to structure components when creating new data types and data objects:
    
    TYPES: lty\_1 TYPE structured\_type-comp1,
           lty\_2 LIKE structure-comp1.
    DATA: lv\_1 TYPE structured\_type-comp1,
          lv\_2 LIKE structure-comp1.
    
-   [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") and the [ABAP Editor](javascript:call_link\('abenabap_editor_glosry.htm'\) "Glossary Entry") provide code completion for structure components after the component selector.
-   When declaring a variable with reference to a structured type, the [object component selector](javascript:call_link\('abenobject_component_select_glosry.htm'\) "Glossary Entry") \-> must be used: ... dref->comp ....

Filling structures

Filling structure components using the component selector.

address-name     = \`Mr. Duncan Pea\`.
address-street   = \`Vegetable Lane 11\`.
address-city     = \`349875 Botanica\`.

Filling structure components using the [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)) operator. Value assignments by addressing the structure components individually can be very bulky. Hence, the use of the VALUE operator is very handy for the value assignment, especially for filling structure components at [operand position](javascript:call_link\('abenoperand_position_glosry.htm'\) "Glossary Entry"). In below example, the # sign is used before the parentheses which means that the type of the operand can be implicitly derived. This is not the case for the example further down in which a new structure is [declared inline](javascript:call_link\('abendata_inline.htm'\)). Hence, the type must be explicitly specified before the parentheses.

address = VALUE #( name   = \`Mr. Duncan Pea\`
                   street = \`Vegetable Lane 11\`.
                   city   = \`349875 Botanica\` ).

Creating a new structure and filling the components with the VALUE operator. The new structure is [declared inline](javascript:call_link\('abendata_inline.htm'\)).

TYPES address\_type LIKE address.
DATA(add2) = VALUE address\_type( name   = \`Mrs. Jane Pea\`
                                 street = \`Vegetable Lane 11\`.
                                 city   = \`349875 Botanica\` ).

Copy contents of a structure to another one that has the same type. You might also stumble upon [MOVE ... TO ...](javascript:call_link\('abapmove_obs.htm'\)) statements that have the same effect, however, do not use the statement anymore since it is obsolete syntax.

Note: For value assignments, generally bear in mind that there are special [conversion](javascript:call_link\('abenconversion_struc.htm'\)) and [comparison rules](javascript:call_link\('abenlogexp_rules_operands_struc.htm'\)) that apply to assignments involving structures.

address = add2.
"MOVE add2 TO address.

Copy contents of a structure to another one that has a different type. You can use statements with [MOVE-CORRESPONDING](javascript:call_link\('abapmove-corresponding.htm'\)) and the [CORRESPONDING](javascript:call_link\('abenconstructor_expr_corresponding.htm'\)) operator. Both are used to assign identically named components of structures to each other. That means that the example above dealing with structures having the same type also works with below syntax.

Note the abovementioned rules and consider the result of the value assignment when using either of the two options with MOVE-CORRESPONDING and the CORRESPONDING operator. See more information and syntax variants in the ABAP Keyword Documentation: [MOVE-CORRESPONDING for structures](javascript:call_link\('abencorresponding_constr_arg_type.htm'\)) and [CORRESPONDING](javascript:call_link\('abencorresponding_constr_arg_type.htm'\)). In below examples, the focus is only on flat structures.

"Moves identically named components; content in other components
"of the targets structure are kept.
MOVE-CORRESPONDING struc TO diff\_struc.
"Initializes target structure; moves identically named components
diff\_struc = CORRESPONDING #( struc ).
"Same effect as the first MOVE-CORRESPONDING statement;
"addition BASE keeps existing contents
diff\_struc = CORRESPONDING #( BASE ( diff\_struc ) struc ).

Copy contents of a deep structure to another deep structure that has a different type. Also here, you can use statements with [MOVE-CORRESPONDING](javascript:call_link\('abapmove-corresponding.htm'\)) and the [CORRESPONDING](javascript:call_link\('abenconstructor_expr_corresponding.htm'\)) operator. However, in the context of deep structures, more syntax variants are available. The focus of the following examples is on internal tables as structure components. See the demonstration example for more details on all variants that also considers the assignment rules and nested structures.

"Nonidentical elementary component types are kept in target
"structure which is true for the below MOVE-CORRESPONDING statements;
"existing internal table contents are replaced by contents of
"the source table irrespective of identically named components
MOVE-CORRESPONDING deep\_struc TO diff\_deep\_struc.
"Existing internal table contents are replaced but the value
"assignment happens for identically named components only.
MOVE-CORRESPONDING deep\_struc TO diff\_deep\_struc
    EXPANDING NESTED TABLES.
"Existing internal table contents are kept; table contents of the source
"structure are added but the value assignment happens like the first
"MOVE-CORRESPONDING statement without further syntax additions.
MOVE-CORRESPONDING deep\_struc TO diff\_deep\_struc
    KEEPING TARGET LINES.
"Existing internal table contents are kept; table contents of the source
"structure are added; the value assignment happens like the statement.
"MOVE-CORRESPONDING ... EXPANDING NESTED TABLES.
MOVE-CORRESPONDING deep\_struc TO diff\_deep\_struc
    EXPANDING NESTED TABLES KEEPING TARGET LINES.
"Target structure is initialized; the value assignment for an internal
"table happens irrespective of identically named components.
diff\_deep\_struc = CORRESPONDING #( deep\_struc ).
"Target structure is initialized; the value assignment for an internal
"table happens for identically named components only.
diff\_deep\_struc = CORRESPONDING #( DEEP deep\_struc ).
"Nonidentical elementary component types are kept in target structure;
"internal table contents are replaced; there, the value assignment
"happens like using the CORRESPONDING operator without addition.
diff\_deep\_struc = CORRESPONDING #( BASE ( diff\_struc ) deep\_struc ).
"Nonidentical elementary component types are kept in target structure;
"internal table contents are replaced; there, the value assignment
"happens like using the CORRESPONDING operator with the addition DEEP.
diff\_deep\_struc = CORRESPONDING #( DEEP BASE ( diff\_struc )
                                   deep\_struc ).
"Nonidentical elementary component types are kept in target structure;
"internal table contents are kept, too, and table contents of the
"source structure are added; there, the value assignment
"happens like using the CORRESPONDING operator without addition.
diff\_deep\_struc = CORRESPONDING #( APPENDING BASE ( diff\_struc )
                                   deep\_struc ).
"Nonidentical elementary component types are kept in target structure;
"internal table contents are kept, too, and table contents of the
"source structure are added; there, the value assignment
"happens like using the CORRESPONDING operator with the addition DEEP.
diff\_deep\_struc = CORRESPONDING #( DEEP APPENDING BASE ( diff\_struc )
                                   deep\_struc ).

Clearing structures

You can reset individual components to their initial value and clear the complete structure using the keyword [CLEAR](javascript:call_link\('abapclear.htm'\)).

CLEAR structure-component.
CLEAR structure.

Structures in use in the context of tables

Structures are primarily used to process data from tables. In this context, structures often assume the role of a [work area](javascript:call_link\('abenwork_area_glosry.htm'\) "Glossary Entry").

Read line from a database table into a structure that has a matching type. In below example, the matching type is realized by a structure that is declared inline. Apart from that, since database tables are flat, the target structure must also be flat. In below example, the addition [SINGLE](javascript:call_link\('abapselect_single.htm'\)) takes care of reading only a single row into the structure. The first entry that is found according to the WHERE condition is returned.

Note: See more details on [SELECT](javascript:call_link\('abapselect.htm'\)) statements in the ABAP Keyword Documentation. The ABAP cheat sheet [ABAP SQL: Working with persisted data in database tables](javascript:call_link\('abapsheet_abap_sql.htm'\)) also provides information and more code snippets when using SELECT statements.

SELECT SINGLE FROM spfli
    FIELDS \*
    WHERE carrid = 'LH'
    INTO @DATA(ls\_spfli).

Read a line from database table into a structure that has a different type.

SELECT SINGLE FROM spfli
    FIELDS \*
    WHERE carrid = 'AA'
    INTO CORRESPONDING FIELDS OF @ls\_spfli\_diff.

Read line from internal table into structure ...

... using a SELECT statement. Note the specified alias name and that ABAP variables like internal tables must be escaped using @. The addition INTO CORRESPONDING FIELDS OF also applies here.

SELECT SINGLE FROM @itab AS itab\_alias
    FIELDS \*
    WHERE ...
    INTO @DATA(ls\_struc).
    "INTO CORRESPONDING FIELDS OF @struc.

... using a [READ TABLE](javascript:call_link\('abapread_table.htm'\)) statement. The below code snippet shows the reading of one line into a [work area](javascript:call_link\('abenwork_area_glosry.htm'\) "Glossary Entry") and a [field symbol](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry"), both representing structured data objects. Here, the reading of a line is based on the line number by specifying INDEX.

READ TABLE itab INTO DATA(wa) INDEX 2.
READ TABLE itab ASSIGNING FIELD-SYMBOL(<fs>) INDEX 3.

... using a [table expression](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry"). The below code snippet shows the reading of one line into a structure that is declared inline. The index is specified in square brackets.

DATA(ls\_table\_exp) = itab\[ 3 \].

Note: See more syntax variants and code snippets for READ TABLE statements and statements with table expressions in the ABAP cheat sheet [Working with Internal Tables](javascript:call_link\('abapsheets_internal_tables.htm'\)).

Sequentially read a line from ...

... a database table into a structure. A SELECT loop can be specified by using the syntax SELECT ... ENDSELECT.. In below simple example, the line that is found and returned in a structure, that is declared inline, can be further processed.

A SELECT loop might also have an internal table as data source.

SELECT FROM spfli
    FIELDS \*
    WHERE carrid = 'AZ'
    INTO @DATA(ls\_sel\_loop).
      IF sy-subrc = 0.
        ...
      ENDIF.
    ENDSELECT.

... an internal table into a structure using a [LOOP AT](javascript:call_link\('abaploop_at_itab_variants.htm'\)) statement. There are numerous options to specify the condition on which the loop is based on. See the ABAP Keyword Documentation and the cheat sheet on internal tables for more information and code snippets. The below example covers two options of reading lines sequentially into a field symbol and a work area.

LOOP AT itab ASSIGNING FIELD-SYMBOL(<fs\_loop>) FROM 1 TO 5.
      (<fs\_loop>)-comp1 = ...
      ...
    ENDLOOP.
LOOP AT itab INTO DATA(wa) FROM 1 TO 5.
      wa-comp1 = 'XY'.
    ENDLOOP.

Inserting an individual row from a structure into a database table using ABAP SQL statements with [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)). The statements below can be considered as alternatives. The third statement demonstrates that the structure might also be created and filled directly instead of inserting a line from an existing structure. Note that a line does not exist in the database having the same key as the one of the line that is added.

INSERT INTO dbtab VALUES @structure.
INSERT dbtab FROM @structure.
INSERT dbtab FROM @( VALUE #( comp1 = ... comp2 = ... ) ).

Updating an individual row from a structure in a database table using ABAP SQL statements with [UPDATE](javascript:call_link\('abapupdate.htm'\)). Note that with this syntax, the whole line and all components are changed.

UPDATE dbtab FROM @structure.
UPDATE dbtab FROM @( VALUE #( comp1 = ... comp2 = ... ) ).

If you want to update a database table row from a structure by specifying components to be changed without overwriting other components, you might use choose the following way. First, read the intended line from the database table into a structure. Then, use the VALUE operator with the addition BASE and specify the components to be changed.

SELECT SINGLE \* FROM dbtab WHERE ... INTO @DATA(wa).
UPDATE dbtab FROM @( VALUE #( BASE wa comp2 = ... comp4 = ... ) ).

Updating or creating an individual row in a database table from a structure using ABAP SQL statements with [MODIFY](javascript:call_link\('abapmodify_dbtab.htm'\)). If a line in the database table already exists having the same keys as specified in the structure, the line gets updated. If a line does not exist with the keys specified in the structure, a new line is created in the database table.

MODIFY dbtab FROM @structure.
MODIFY dbtab FROM @( VALUE #( comp1 = ... comp2 = ... ) ).

Adding rows to and updating individual rows in an internal table from a structure using statements with [INSERT](javascript:call_link\('abapinsert_itab.htm'\)), [APPEND](javascript:call_link\('abapappend.htm'\)), and [MODIFY](javascript:call_link\('abapmodify_itab.htm'\)). Note that all statements, including INSERT and MODIFY, are ABAP statements in this context, not ABAP SQL statements.

Both INSERT and APPEND add one line (or more) to an internal table. While APPEND adds at the bottom of the internal table, INSERT can be used to add lines at a specific position in tables. If you go without specifying the position, then the lines are added at the bottom of the table, too. However, when using INSERT, sy-tabix is not set as compared to APPEND.

MODIFY changes the content of an internal table entry.

Statements using the VALUE operator for directly creating and filling the structures are possible, too.

INSERT structure INTO TABLE itab.
APPEND structure TO itab.
MODIFY TABLE itab FROM structure.

Excursion: Including structures

Although the use is not recommended according to the ABAP programming guidelines, you might stumble upon statements with [INCLUDE TYPE](javascript:call_link\('abapinclude_type.htm'\)) and [INCLUDE STRUCTURE](javascript:call_link\('abapinclude_type.htm'\)) in the context of local structures. Structured data objects and types that are created with ... BEGIN OF... END OF ... can include the said syntax to integrate components of another structure, no matter if it is a locally defined or global structure, without the need to create substructures. With INCLUDE TYPE, you can include a structured type. With INCLUDE STRUCTURE, you can include a structure.

Note:

-   They are not additions to ... BEGIN OF... END OF ... but individual ABAP statements.
-   If a chained statement is used for the structure declaration with the colon, the inclusion of other structures with these statements interrupts the chained statement, that is, the components of the included structures are taken over as direct components of the [superstructure](javascript:call_link\('abensuperstructure_glosry.htm'\) "Glossary Entry").
-   With the optional addition AS and the specification of a name, the included components can be addressed by this common name as if the components are actually components of a substructure.
-   With the optional addition RENAMING WITH SUFFIX and the specification of a name, the included components get a suffix name to avoid naming conflicts with other components.

The below example shows the inclusion of structured types and data objects in another structure. First, three structured types as well as a structured data object based on one of those types are created. Then, the types and the structure are included in the structured type address\_type. The demonstration program visualizes a structure that includes other structures this way.

TYPES:
      BEGIN OF name\_type,
        title   TYPE string,
        prename TYPE string,
        surname TYPE string,
      END OF name\_type,
      BEGIN OF street\_type,
        name   TYPE string,
        number TYPE string,
      END OF street\_type,
      BEGIN OF city\_type,
        zipcode TYPE string,
        name    TYPE string,
      END OF city\_type.
DATA city\_struc TYPE city\_type.
TYPES BEGIN OF address\_type.
      INCLUDE TYPE name\_type AS name.
      INCLUDE TYPE street\_type AS street RENAMING WITH SUFFIX \_street.
      INCLUDE STRUCTURE city\_struc AS city RENAMING WITH SUFFIX \_city.
TYPES END OF address\_type.

Demonstration program

Executable Example

The example [Working with structures](javascript:call_link\('abensheet_structures_abexa.htm'\)) demonstrates the abovementioned syntactical options and beyond in one program.

Continue
![Example](exa.gif "Example") [Working with Structures](javascript:call_link\('abensheet_structures_abexa.htm'\))