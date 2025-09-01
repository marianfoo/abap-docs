  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Attributes of Data Objects](javascript:call_link\('abendescribe_field.htm'\)) →  [DESCRIBE](javascript:call_link\('abapdescribe.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DESCRIBE%20DISTANCE%2C%20ABAPDESCRIBE_DISTANCE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DESCRIBE DISTANCE

[Short Reference](javascript:call_link\('abapdescribe_distance_shortref.htm'\))

Syntax

DESCRIBE DISTANCE BETWEEN dobj1 AND dobj2 INTO dst
                          IN *{*BYTE*|*CHARACTER*}* MODE.

Effect

This statement determines the distance between the start positions of the data objects dobj1 and dobj2.

The return value has the type i. The following can be specified for dst:

-   An existing variable to which the return value can be converted.
-   An inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)) or [FINAL(var)](javascript:call_link\('abenfinal_inline.htm'\)), where a variable of type i is declared.

It is not important in which order dobj1 and dobj2 are specified.

The variant with the addition IN BYTE MODE determines the distance in bytes. The variant with the addition IN CHARACTER MODE converts the distance into the number of characters that can be stored in this length according to the current character format. When this addition is used in IN CHARACTER MODE and the determined distance cannot be converted into a number of characters, an uncatchable exception is raised.

In the case of [deeper](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data types, the referenced data object is not relevant but the position of the internal reference (for strings and internal tables) or the reference variables instead.

Hints

-   The distance between data objects should only be determined within a structure for its components, since this is the only way to guarantee that they follow each other directly in the memory. It should be noted that the [alignment gaps](javascript:call_link\('abenalignment_gap_glosry.htm'\) "Glossary Entry") are counted as well, which is why the addition in IN BYTE MODE should be used to avoid an uncatchable exception.
-   The byte offset of a component in a structure can be determined by applying DESCRIBE DISTANCE to this component and the first component of the structure.
-   With respect to DESCRIBE DISTANCE, every substructure declared as a [boxed component](javascript:call_link\('abenboxed_component_glosry.htm'\) "Glossary Entry") is an independent structure. The distance between components which are not in the same boxed component is undefined.

Example

The results of the two statements in a Unicode system are 5 and 10.

DATA text TYPE c LENGTH 10 VALUE '0123456789'.
DESCRIBE DISTANCE BETWEEN text+2(1) AND text+7(1)
         INTO FINAL(cdist)
         IN CHARACTER MODE.
DESCRIBE DISTANCE BETWEEN text+2(1) AND text+7(1)
         INTO FINAL(bdist)
         IN BYTE MODE.

Example

The DESCRIBE statement returns the offset of component col3 in structure struct in bytes. The result is 8. It consists of 1 byte for col1, 3 bytes for an alignment gap, and 4 bytes for col2.

DATA:
  BEGIN OF struct,
    col1 TYPE x LENGTH 1 VALUE 'FF',
    col2 TYPE i VALUE 333,
    col3 TYPE c LENGTH 1 VALUE 'X',
  END OF struct.
DESCRIBE DISTANCE BETWEEN struct-col3 AND struct-col1
                          INTO FINAL(dist) IN BYTE MODE.
cl\_demo\_output=>new(
)->write( struct
)->display( dist ).

Executable Example

[Determining Data Object Distances](javascript:call_link\('abendescribe_distance_abexa.htm'\))

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Uncatchable Exceptions

-   Cause: Distance cannot be converted into characters.
    Runtime error: UC\_NO\_CHAR\_NUMBER

Continue
![Example](exa.gif "Example") [Determining Data Object Distances](javascript:call_link\('abendescribe_distance_abexa.htm'\))