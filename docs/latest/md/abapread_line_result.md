  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Editing List Buffers](javascript:call_link\('abenabap_lists_complex.htm'\)) →  [READ LINE](javascript:call_link\('abapread_line.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20READ%20LINE%2C%20result%2C%20ABAPREAD_LINE_RESULT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

READ LINE, result

[Short Reference](javascript:call_link\('abapread_line_shortref.htm'\))

Syntax

... *\[*LINE VALUE INTO wa*\]*
    *\[*FIELD VALUE dobj1 *\[*INTO wa1*\]* dobj2 *\[*INTO wa2*\]* ...*\]*.

Additions:

[1\. ... LINE VALUE INTO wa](#!ABAP_ADDITION_1@1@)
[2\. ... FIELD VALUE dobj1 *\[*INTO wa1*\]* dobj2 *\[*INTO wa2*\]* ...](#!ABAP_ADDITION_2@2@)

Effect

Specifies target fields for READ LINE.

Addition 1   

... LINE VALUE INTO wa

Effect

The addition LINE VALUE assigns the formatted content of the complete list line in the list buffer to the data object wa.

Addition 2   

... FIELD VALUE dobj1 *\[*INTO wa1*\]* dobj2 *\[*INTO wa2*\]* ...

Effect

The addition FIELD VALUE assigns the output areas of individual data objects dobj1 dobj2... that have been output to the list buffer to these data objects, or, if specified, to the data objects wa1 wa2 .... wa or wa1 wa2 ... expects data objects whose data type is covered by the generic type [simple](javascript:call_link\('abenbuilt_in_types_generic.htm'\)), except for [enumerated objects](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry"). The list line or data objects dobj1 dobj2 ... are handled as if they have the data type c, which means that trailing blanks are ignored.

If identically named data objects dobj1 dobj2... appear more than once in a line, only the first object is read. If a data object dobj1 dobj2 ... does not exist at all, the specification is ignored.

If the output area of a data object addressed in the [WRITE](javascript:call_link\('abapwrite-.htm'\)) statement using a field symbol is to be read, and the same data object is no longer assigned to the field symbol, the name of the data object must be specified and not the name of the field symbol.

Hints

-   No [conversion exit](javascript:call_link\('abenconversion_exit_glosry.htm'\) "Glossary Entry") is executed when an output area is read.
-   The content of the line or of the individual output areas in the list is character-like and formatted according to the rules for the WRITE statement. When the read line or an area is assigned to a data object, the conversion rules apply in the same way as to a [source field of type c](javascript:call_link\('abenconversion_type_c.htm'\)). This can cause problems with the target fields dobj1 dob ... or war war ..., particularly if these fields are numeric and the output contains separators. Due to this, use of READ LINE is mainly recommended for the evaluation of fields that are ready for input. For other evaluations, [HIDE](javascript:call_link\('abaphide.htm'\)) can be used to save values in a type-compliant way.