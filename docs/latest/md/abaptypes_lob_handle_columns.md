  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types](javascript:call_link\('abentypes_statements.htm'\)) →  [TYPES](javascript:call_link\('abaptypes.htm'\)) →  [TYPES, LOB HANDLE](javascript:call_link\('abaptypes_lob_handle.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TYPES%2C%20lob_handle_columns%2C%20ABAPTYPES_LOB_HANDLE_COLUMNS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TYPES, lob\_handle\_columns

Syntax

  ... *{* COLUMNS blob1 blob2 ... clob1 clob2 ... *}*
    *|* *{* ALL *\[*OTHER*\]* *\[*BLOB*|*CLOB*\]* COLUMNS *}* ...

Effect

These additions define which columns of the database table or the view dbtab are declared as [LOB handle components](javascript:call_link\('abenlob_handle_component_glosry.htm'\) "Glossary Entry") when deriving a [LOB handle structure](javascript:call_link\('abenlob_handle_component_glosry.htm'\) "Glossary Entry") using the statement [TYPES](javascript:call_link\('abaptypes_lob_handle.htm'\)).

-   COLUMNS blob1 blob2 ... clob1 clob2 ...
    
    specifies individual [BLOBs](javascript:call_link\('abenblob_glosry.htm'\) "Glossary Entry") blob1, blob2, ... or [CLOBs](javascript:call_link\('abenclob_glosry.htm'\) "Glossary Entry") clob1, clob2, ... These must exist in dbtab.
    
-   ALL OTHER BLOB*|*CLOB COLUMNS
    
    This specifies all [BLOBs](javascript:call_link\('abenblob_glosry.htm'\) "Glossary Entry") or [CLOBs](javascript:call_link\('abenclob_glosry.htm'\) "Glossary Entry") in dbtab that are not covered when individual columns are specified. In the statement [TYPES](javascript:call_link\('abaptypes_lob_handle.htm'\)), at least one individual column blob or clob must be specified using COLUMNS ...
    
-   ALL BLOB*|*CLOB COLUMNS
    
    specifies all [BLOBs](javascript:call_link\('abenblob_glosry.htm'\) "Glossary Entry") or [CLOBs](javascript:call_link\('abenclob_glosry.htm'\) "Glossary Entry") of dbtab.
    
-   ALL OTHER COLUMNS
    
    This specifies all [LOBs](javascript:call_link\('abenlob_glosry.htm'\) "Glossary Entry") in dbtab that are not covered when individual columns are specified. In the statement [TYPES](javascript:call_link\('abaptypes_lob_handle.htm'\)), at least one individual column must be specified using COLUMNS ...
    
-   ALL COLUMNS
    
    This specifies all [LOBs](javascript:call_link\('abenlob_glosry.htm'\) "Glossary Entry") in dbtab.
    

No other columns can be specified in the statement [TYPES](javascript:call_link\('abaptypes_lob_handle.htm'\)) after the column specification ALL OTHER ...

The combination options of the column specifications with each other below and with the types specified using [lob\_handle\_type](javascript:call_link\('abaptypes_lob_handle_type.htm'\)) are explained in the statement [TYPES](javascript:call_link\('abaptypes_lob_handle.htm'\)).

Hint

Columns of the data type [GEOM\_EWKB](javascript:call_link\('abenddic_builtin_types.htm'\)) are not supported as [BLOBs](javascript:call_link\('abenblob_glosry.htm'\) "Glossary Entry").

Example

Demonstration of various column specifications in the definition of LOB-Handle components.

TYPES lob\_handle TYPE demo\_lob\_table
                 READER FOR COLUMNS clob1 clob2
                 LOB HANDLE FOR ALL BLOB COLUMNS
                 LOCATOR FOR ALL OTHER CLOB COLUMNS.

Executable Example

[Deriving LOB Handle Structures](javascript:call_link\('abentypes_lob_handle_abexa.htm'\))