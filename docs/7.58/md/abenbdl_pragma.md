  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP BDL - Syntax](javascript:call_link\('abenbdl_syntax.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20BDL%20-%20Pragmas%2C%20ABENBDL_PRAGMA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP BDL - Pragmas

Syntax

... ##code...

Effect

Pragmas can be used to hide [syntax check](javascript:call_link\('abensyntax_check_glosry.htm'\) "Glossary Entry") warnings from the [ABAP Compiler](javascript:call_link\('abenabap_compiler_glosry.htm'\) "Glossary Entry").

A pragma is not case-sensitive and does not contain blanks. A pragma starts with two hash characters (##), followed by the pragma code code. The pragma code determines the effect.

A pragma applies to the current statement, that is to the statement that ends at the next semicolon ( ; ) or curly bracket ( { ), or ( }).

Pragmas can be used at specific positions in the source code, namely:

-   At the start of a line, after any number of blanks
-   At the end of a line, only followed by a semicolon ( ; ), or a curly bracket ( { ), or ( } ).
-   Not before, after, or within brackets ( ... ).
    
    Multiple pragmas may be positioned one after another, separated by blanks, at allowed positions.
    

Pragmas used at a wrong position have no effect.

Hint

The long text error message provides the information on which pragma can be used to hide a specific syntax check warning.

Example

The following BDEF uses three different pragmas to suppress syntax check warnings:

-   ##UNMAPPED\_FIELD: Suppresses a syntax check warning that is issued because the field names of the RAP BO entity do not match the BDEF derived type component pattern.
-   ##DRAFT\_ASSOC: Suppresses a syntax check warning that is issued because the association \_child is not draft-enabled.
-   ##TYPE: Suppresses a syntax check warning that is issued because the action parameter DEMO\_CDS\_ABSTRACT\_ROOT is a deep structure, but it is only used as a flat parameter in the current BDEF.
    
    managed implementation in class bp\_demo\_rap\_pragma unique;
    strict ( 2 );
    with draft;
    define behavior for DEMO\_RAP\_PRAGMA alias Root
    persistent table demo\_dbtab\_root ##UNMAPPED\_FIELD
    draft table demo\_dbtab\_dr
    lock master
    total etag LchgDateTimeRoot
    authorization master ( instance )
    {
      create;
      update;
      delete;
      association \_child ##DRAFT\_ASSOC { create; }
      action MyAction parameter DEMO\_CDS\_ABSTRACT\_ROOT ##TYPE;
      field ( readonly : update ) KeyField;
      draft action Edit;
      draft action Activate optimized;
      draft action Discard;
      draft action Resume;
      draft determine action Prepare;
    }
    define behavior for DEMO\_RAP\_PRAGMA\_CHILD alias Child
    persistent table demo\_dbtab\_child ##UNMAPPED\_FIELD
    draft table demo\_draft\_child
    lock dependent by \_parent
    authorization dependent by \_parent
    //etag master <field\_name>
    {
      update;
      delete;
      field ( readonly ) KeyField, KeyFieldChild;
      association \_parent ##DRAFT\_ASSOC;
    }