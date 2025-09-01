  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dynpro_list.htm) →  [Lists - Editing List Buffers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_lists_complex.htm) →  [MODIFY LINE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_line.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20MODIFY%20LINE%2C%20source%2C%20ABAPMODIFY_LINE_MODIFICATION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

MODIFY LINE, source

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_line_shortref.htm)

Syntax

... *\[*LINE VALUE FROM wa*\]*
    *\[*FIELD VALUE dobj1 *\[*FROM wa1*\]*
                 dobj2 *\[*FROM wa2*\]* ...*\]*
    *\[*LINE FORMAT ext\_format\_options*\]*
    *\[*FIELD FORMAT dobj1 ext\_format\_options1
                  dobj2 ext\_format\_options2 ...*\]*.

Additions:

[1\. ... LINE VALUE FROM wa](#!ABAP_ADDITION_1@1@)
[2\. ... FIELD VALUE dobj1 *\[*FROM wa1*\]* dobj2 *\[*FROM wa2*\]* ...](#!ABAP_ADDITION_2@2@)
[3\. ... LINE FORMAT ext\_format\_options](#!ABAP_ADDITION_3@3@)
[4\. ... FIELD FORMAT dobj1 ext\_format\_options1 ...](#!ABAP_ADDITION_4@4@)

Effect

Specifies source fields for MODIFY LINE. The additions modify the list line once this has been overwritten with the content of the sy-lisel system field.

Addition 1   

... LINE VALUE FROM wa

Effect

The addition LINE VALUE overwrites the entire list line with the content of wa.

Addition 2   

... FIELD VALUE dobj1 *\[*FROM wa1*\]* dobj2 *\[*FROM wa2*\]* ...

Effect

The addition FIELD VALUE overwrites the output areas of individual dobj1 dobj2 ... data objects that are shown in the list line with the current content of these objects, or (if specified) the content of the data objects wa1 wa2 .... wa or wa1 wa2 ... expect character-like data objects, which are truncated if they are too long. For data objects that are too short, the line or the output areas are filled from the right with blanks. If specified, FIELD VALUE overrides LINE VALUE.

If data objects dobj1 dobj2... appear more than once in a line with the same name, only the first one is processed. If a data object dobj1 dobj2 ... does not exist at all, the specification is ignored.

Addition 3   

... LINE FORMAT ext\_format\_options

Addition 4   

... FIELD FORMAT dobj1 ext\_format\_options1 ...

Effect

For ext\_format\_options, one or more additions of the statement [FORMAT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapformat.htm) can be specified. The addition FRAMES cannot be used. The addition LINE FORMAT formats the whole list line accordingly; FIELD FORMAT formats only the output areas of the dobj1 dobj2 ... data objects displayed in the list line. If specified, FIELD FORMAT overrides LINE FORMAT.

If data objects dobj1 dobj2... appear more than once in a line with the same name, only the first one is processed. If a data object dobj1 dobj2 ... does not exist at all, the specification is ignored.