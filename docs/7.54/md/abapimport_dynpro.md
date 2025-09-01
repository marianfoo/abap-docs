  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [program editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Dynamic Program Editing](javascript:call_link\('abenabap_language_dynamic.htm'\)) →  [Screen](javascript:call_link\('abenabap_generic_dynpro.htm'\)) →  [Internal Statements for Editing Dynpros](javascript:call_link\('abengeneric_dynpro_internal.htm'\)) → 

IMPORT DYNPRO

This statement is for internal use only.
It must not be used in application programs.

Syntax

IMPORT DYNPRO h f e m ID id.

Effect

The [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") specified in the structure id is imported. To enable this, the structure id must contain two components for the name of the program and the ID of the dynpro in the following order:

-   A component of type PROGNAME
    
-   A component of type SYDYNNR.
    

The dynpro information is loaded into the structure h (dynpro header, structure D020S) and into the internal tables f (field list, structure D021S), e (flow logic, structure D022S), and m (matchcode information, structure D023S). Standard tables without secondary keys can be specified for f, e, and m.

Note

As an alternative to a structure, a character-like field (including string) can be specified for id, where the field contains the chained contents of the structure components (including trailing blanks).

System Fields

sy-subrc

Meaning

0

The dynpro was imported.

4

The dynpro does not exist.

Example

Reads the attributes of dynpro "0100" of the program DEMO\_DYNPRO.

DATA h TYPE d020s.
DATA f TYPE TABLE OF d021s.
DATA e TYPE TABLE OF d022s.
DATA m TYPE TABLE OF d023s.
DATA: BEGIN OF id,
         p TYPE progname VALUE 'DEMO\_DYNPRO',
         d TYPE sydynnr  VALUE '0100',
       END OF id.
IMPORT DYNPRO h f e m ID id.