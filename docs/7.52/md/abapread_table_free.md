  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) →  [Processing Statements for Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_processing_statements.htm) →  [READ TABLE itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table.htm) → 

READ TABLE - free\_key

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table_itab_shortref.htm)

Syntax

... WITH KEY *{* [comp1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_components.htm) = operand1 [comp2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_components.htm) = operand2 ... *\[*BINARY SEARCH*\]* *}*
           *|* *{* [keyname](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenkeyname.htm) COMPONENTS [comp1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_components.htm) = operand1 [comp2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_components.htm) = operand2 ... *}* ...

Variants:

[1\. ... WITH KEY comp1 = operand1 comp2 = operand2 ... *\[*BINARY SEARCH*\]* ...](#!ABAP_VARIANT_1@1@)
[2\. ... WITH KEY keyname COMPONENTS comp1 = operand1 comp2 = operand2 ... .](#!ABAP_VARIANT_2@2@)

Effect

Specifies a free search key. The free search key can be defined freely or linked to the specification of a [secondary table key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") in [keyname](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenkeyname.htm).

Notes

-   [Table expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expression_glosry.htm "Glossary Entry") enable reads to be performed in operand positions too. The free key search is used whenever components are specified without an explicit [key specified](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_exp_itab_line.htm).
    
-   Outside of classes, the two obsolete variants of the addition [WITH KEY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table_obsolet.htm) are possible.
    

Variant 1

... WITH KEY comp1 = operand1 comp2 = operand2 ... *\[*BINARY SEARCH*\]* ...

Addition:

[... BINARY SEARCH](#!ABAP_ONE_ADD@1@)

Effect

Components comp1 comp2 ... can be specified as search keys after the addition WITH KEY, following the rules [here](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_components.htm). An operand operand1 operand2 ... is assigned to each of these search keys and must be [compatible](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencompatible_glosry.htm "Glossary Entry") with the data type of the component (or convertible to this data type). No duplicate or overlapping key specifications can be made.

operand1 operand2 ... are [general expression positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"). If necessary, the content of the operands is converted to the data type of the components before the comparison. If an [arithmetic expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") is specified, the [calculation type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencalculation_type_glosry.htm "Glossary Entry") is determined from its operands and the data type of the component and the result, if necessary, is converted to the data type of the component.

The first row of the internal table is searched for whose values in the specified components (or their subareas or attributes) match the values in the assigned operands operand1 operand2 ...

The search runs as follows for the individual table categories, without BINARY SEARCH being specified:

-   [Standard tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_table_glosry.htm "Glossary Entry") are searched in a linear fashion.
    
-   [Sorted tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensorted_table_glosry.htm "Glossary Entry") are sorted in a binary fashion if the specified search key is an initial part of the [primary table key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") or includes this key; otherwise the search is linear.
    
-   The hash algorithm is used for [hashed tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhashed_table_glosry.htm "Glossary Entry") if the specified search key is an initial part of the [primary table key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") or includes this key; otherwise the search is linear.
    

If the [name](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_components.htm) field of a component comp is initial, the first row that matches the search key is read. If all name fields are initial, the first row of the internal table is read.

When a row is found, the system field sy-tabix is set as specified by the table category:

-   For index tables it is set to the number of rows found in the primary table index
    
-   For hashed tables it is set to the value 0.
    

If no row is found, sy-tabix is undefined (-1), except when the complete table key or the addition BINARY SEARCH is specified in a sorted table. In this case, sy-tabix is set to the row number of the entry in the primary table index in front of which the row would be inserted using INSERT ... INDEX ..., to preserve the sort.

Notes

-   If the row type of the internal table is not known statically, the components of the search key can only be specified dynamically and not directly.
    
-   If the search key includes components that supply a [secondary table key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") of the internal table without the key being specified in keyname, a warning is raised by the syntax check.
    
-   If there are multiple hits (due to an incomplete search key or duplicate entries in the table), binary searches (using the addition BINARY SEARCH in standard tables; automatic in sorted tables) also return the first hit in accordance with the order of the rows in the primary index. This is the row with the lowest row number.
    
-   If WITH KEY is used, note that the values of incompatible operands operand1 operand2 ... are converted to the data type of the columns before the comparison. This means that the [comparison rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_rules.htm) do not apply to incompatible data types. If a WHERE condition is used in the statements [LOOP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_cond.htm), [MODIFY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab_multiple.htm), and [DELETE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_itab_lines.htm), however, the comparison rules do apply, which can produce differing results.
    

Example

The internal table html\_viewer\_tab contains references to HTML [controls](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencontrol_glosry.htm "Glossary Entry"). The READ statement reads the reference that points to a HTML control in a specific container control.

DATA: container TYPE REF TO cl\_gui\_container,
      html\_viewer TYPE REF TO cl\_gui\_html\_viewer.
DATA html\_viewer\_tab LIKE TABLE OF html\_viewer WITH EMPTY KEY.
...
CREATE OBJECT html\_viewer EXPORTING parent = container.
APPEND html\_viewer TO html\_viewer\_tab.
...
READ TABLE html\_viewer\_tab
           WITH KEY table\_line->parent = container
           INTO html\_viewer.
...

Addition

... BINARY SEARCH

Effect

The addition BINARY SEARCH produces a binary search of the table, not linear. In the case of large tables (from approximately 100 entries), this can significantly reduce runtime. The table must, however, be sorted in ascending order by the components specified in the search key. The priority of the sort order must match exactly the order of the components in the search key. If this requirement is not met, the correct row is not usually found.

-   The addition BINARY SEARCH is recommended for standard tables where no appropriate [sorted](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensorted_key_glosry.htm "Glossary Entry") [secondary table key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") is defined.
    
-   The addition BINARY SEARCH can only be specified for [sorted tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensorted_table_glosry.htm "Glossary Entry") if the specified search key is in the correct order and is an initial part of the table key, or includes the key. It has no special effect in this situation.
    
-   The addition BINARY SEARCH cannot be specified for [hashed tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhashed_table_glosry.htm "Glossary Entry").
    

Notes

-   The statement READ always uses the addition BINARY SEARCH to perform an index access; this index access can therefore only be used for tables with the appropriate type. [Formal parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenformal_parameter_glosry.htm "Glossary Entry") or a [field symbol](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfield_symbol_glosry.htm "Glossary Entry") must have at least the generic type INDEX TABLE.
    
-   The addition BINARY SEARCH is based on standard sorting according to the size of the components. Text sorting with the addition AS TEXT of the statement [SORT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsort_itab.htm) can produce unexpected results, since the result for text-like components no longer depends on the binary representation, but on the [locale](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlocale_glosry.htm "Glossary Entry") of the current [text environment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_environment_glosry.htm "Glossary Entry").
    
-   The method READ\_BINARY\_SEARCH\_CHECK of the class CL\_ABAP\_ITAB\_UTILITIES can be used to verify whether the required sort exists for the addition BINARY SEARCH.
    
-   When the addition BINARY SEARCH is used, if there are multiple hits (due to an incomplete search key or duplicate entries in the table), the first hit according to the order of the rows in the primary index is returned. This is the row with the lowest row number.
    
-   Instead of using the addition BINARY SEARCH, it is best to work either with [sorted tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensorted_table_glosry.htm "Glossary Entry") or with [sorted](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensorted_key_glosry.htm "Glossary Entry") [secondary table keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_table_key_glosry.htm "Glossary Entry").
    

Example

Reads a table row with BINARY SEARCH after the table has been sorted accordingly. However, if possible sflight\_tab should be created as a sorted table, or given a sorted secondary key afterwards (see example below).

DATA sflight\_tab TYPE STANDARD TABLE OF sflight WITH EMPTY KEY.
...
SORT sflight\_tab BY carrid connid fldate.
READ TABLE sflight\_tab
     WITH KEY carrid = '...' connid = '...' fldate = '...'
     BINARY SEARCH
     ASSIGNING FIELD-SYMBOL(<flight>).

Variant 2

... WITH KEY keyname COMPONENTS comp1 = operand1 comp2 = operand2 ...

Effect

[keyname](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenkeyname.htm) can be used to specify a [table key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_key_glosry.htm "Glossary Entry"). The same applies when specifying the components as in the variant without specifying keys.

If a [secondary table key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_table_index_glosry.htm "Glossary Entry") is specified in keyname, the behavior is as follows:

-   If a [sorted key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensorted_key_glosry.htm "Glossary Entry") is specified, the specified search key must be an initial part of the secondary table key or include it. The associated [secondary table index](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_table_index_glosry.htm "Glossary Entry") is then searched in a binary fashion. If multiple entries are found when using a non-unique search key, the first hit, that is the row with the lowest row number, is read in the secondary index. Additional search criteria can also be specified which are also evaluated.
    
-   If a [hash key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhash_key_glosry.htm "Glossary Entry") is specified, the specified search key must include the secondary table key and the hash algorithm is used. Additional search criteria can also be specified which are also evaluated.
    

When a row is found, the system field sy-tabix is set with respect to the specified secondary table key:

-   For sorted secondary keys, it is set to the number of the found row in the corresponding secondary table index
    
-   For hash keys it is set to the value 0.
    

If no row is found, sy-tabix is undefined (-1), except when it is covered in full by a sorted secondary key. In this case, sy-tabix is set to the row number of the entry in the secondary table index in front of which the row would be inserted using INSERT ... INDEX ..., to preserve the sort.

If the [primary table key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") is specified in keyname under the name primary\_key, the behavior is the same as in the variant without keys specified.

Notes

-   When free keys are specified, secondary table keys differ from the [table\_key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table_key.htm) variant (for specifying the table key) by making it possible to specify additional conditions in the search key. These conditions can reduce the length of the hit list. For secondary sorted keys, however, free search keys make it possible to specify an incomplete search key, which can make the hit list longer.
    
-   If a secondary table key is used, when the value of sy-tabix is used subsequently as an index specification in other processing statements for the internal table, it must be ensured that the same table key is used.
    

Example

Reads a table row using the sorted secondary table key dbkey. The read is now performed automatically using a binary search (like the example above where BINARY SEARCH is specified explicitly) and an explicit sort is not necessary.

DATA sflight\_tab TYPE STANDARD TABLE OF sflight WITH EMPTY KEY
                 WITH UNIQUE SORTED KEY dbkey
                      COMPONENTS carrid connid fldate.
...
READ TABLE sflight\_tab WITH KEY dbkey
     COMPONENTS carrid = '...' connid = '...' fldate = '...'
     ASSIGNING FIELD-SYMBOL(<flight>).

Example

The DEMO\_SECONDARY\_KEYS program demonstrates the specification of a secondary table key compared to the completely free specification of a key and the resulting performance benefits.