---
title: "DESCRIBE DISTANCE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdescribe_distance_shortref.htm) Syntax DESCRIBE DISTANCE BETWEEN dobj1 AND dobj2 INTO dst IN BYTECHARACTER MODE. Effect This statement determines the distance between the start positions of the data objects dob
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdescribe_distance.htm"
abapFile: "abapdescribe_distance.htm"
keywords: ["do", "if", "case", "try", "catch", "data", "types", "internal-table", "abapdescribe", "distance"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Attributes of Data Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendescribe_field.htm) →  [DESCRIBE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdescribe.htm) → 

DESCRIBE DISTANCE

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdescribe_distance_shortref.htm)

Syntax

DESCRIBE DISTANCE BETWEEN dobj1 AND dobj2 INTO dst
                          IN *{*BYTE*|*CHARACTER*}* MODE.

Effect

This statement determines the distance between the start positions of the data objects dobj1 and dobj2.

The return value has the type i. The following can be specified for dst:

-   An existing variable to which the return value can be converted.

-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_inline.htm), where a variable of type i is declared.

It is not important in which order dobj1 and dobj2 are specified.

The variant with the addition IN BYTE MODE determines the distance in bytes. The variant with the addition IN CHARACTER MODE converts the distance into the number of characters that can be stored in this length according to the current character format. When this addition is used in IN CHARACTER MODE and the determined distance cannot be converted into a number of characters, an uncatchable exception is raised.

In the case of [deeper](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeep_glosry.htm "Glossary Entry") data types, the referenced data object is not relevant but the position of the internal reference (for strings and internal tables) or the reference variables instead.

Hints

-   The distance between data objects should only be determined within the same structure and only its components should be used, since this is the only way to guarantee that they follow each other directly in the memory. It should be noted that the [alignment gaps](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenalignment_gap_glosry.htm "Glossary Entry") are counted as well, which is why the addition in IN BYTE MODE should be used to avoid an uncatchable exception.

-   With respect to DESCRIBE DISTANCE, every substructure declared as a [boxed component](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenboxed_component_glosry.htm "Glossary Entry") is an independent structure. The distance between components which are not in the same boxed component is undefined.
    

Example

The results of the two statements in a Unicode system are 5 and 10.

DATA text TYPE c LENGTH 10 VALUE '0123456789'.
DESCRIBE DISTANCE BETWEEN text+2(1) AND text+7(1)
         INTO DATA(cdist)
         IN CHARACTER MODE.
DESCRIBE DISTANCE BETWEEN text+2(1) AND text+7(1)
         INTO DATA(bdist)
         IN BYTE MODE.

Executable Example

[Determining Data Object Distances](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendescribe_distance_abexa.htm)

[Exceptions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_exceptions.htm)

Uncatchable Exceptions

-   Cause: Distance cannot be converted into characters.
    Runtime error: UC\_NO\_CHAR\_NUMBER

Continue
![Example](exa.gif "Example") [Determining Data Object Distances](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendescribe_distance_abexa.htm)