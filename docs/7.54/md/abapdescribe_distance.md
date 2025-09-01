  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Attributes of Data Objects](javascript:call_link\('abendescribe_field.htm'\)) →  [DESCRIBE](javascript:call_link\('abapdescribe.htm'\)) → 

DESCRIBE DISTANCE

[Quick Reference](javascript:call_link\('abapdescribe_distance_shortref.htm'\))

Syntax

DESCRIBE DISTANCE BETWEEN dobj1 AND dobj2 INTO dst
                          IN *{*BYTE*|*CHARACTER*}* MODE.

Effect

This statement determines the distance between the start positions of the data objects dobj1 and dobj2.

The return value has the type i. The following can be specified for dst:

-   An existing variable to which the return value can be converted.
    
-   An inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)), where a variable of type i is declared.
    

It is not important in which order dobj1 and dobj2 are specified.

The variant with the addition IN BYTE MODE determines the distance in bytes. The variant with the addition IN CHARACTER MODE converts the distance into characters that can be stored in this length according to the current character format. When this addition is used in IN CHARACTER MODE and the determined distance cannot be converted into a number of characters, a non-handleable exception is raised.

In the case of [deeper](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data types, the referenced data object is not relevant but the position of the internal reference (for strings and internal tables) or the reference variables instead.

Notes

-   The distance between data objects should only be determined within the same structure and only the structure's components should be used, since this is the only way to guarantee that they follow each other immediately in the memory. Note that the [alignment gaps](javascript:call_link\('abenalignment_gap_glosry.htm'\) "Glossary Entry") are counted as well. Therefore, use the addition in IN BYTE MODE to avoid a non-handleable exception.
    
-   With respect to DESCRIBE DISTANCE, every substructure declared as a [boxed component](javascript:call_link\('abenboxed_component_glosry.htm'\) "Glossary Entry") is an independent structure. The distance between components which are not in the same boxed component is undefined.
    

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

[Determining Data Object Distances](javascript:call_link\('abendescribe_distance_abexa.htm'\))

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Non-Handleable Exceptions

-   Cause: Distance cannot be converted into characters.
    Runtime error: UC\_NO\_CHAR\_NUMBER
    

Continue
![Example](exa.gif "Example") [Determining Data Object Distances](javascript:call_link\('abendescribe_distance_abexa.htm'\))