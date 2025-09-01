  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.0 and its EhPs](javascript:call_link\('abennews-70_ehps.htm'\)) →  [Changes for Release 7.0](javascript:call_link\('abennews-70.htm'\)) → 

XML Interface in Release 7.0

[1\. Enhancements to ST](#!ABAP_MODIFICATION_1@1@)

[2\. Changes to CALL TRANSFORMATION](#!ABAP_MODIFICATION_2@2@)

Modification 1

Enhancements to ST

The following changes were made to the syntax for [simple transformations](javascript:call_link\('abensimple_transformation_glosry.htm'\) "Glossary Entry"):

-   New statements tt:type, tt:node, and tt:front for the definition of types in the ST program.
    
-   New attribute type for tt:root for the typing of data roots.
    
-   In type definitions and typings, string and xstring can now be also be entered as elementary ABAP types, and lengths can be specified for c and x.
    
-   New statement tt:extensible for controlling the extensibility of literal XML elements.
    
-   Generalization of the term "pattern" for conditional transformations.
    

See the [ST Command Overview](javascript:call_link\('abenst_statements.htm'\)).

Modification 2

Changes to CALL TRANSFORMATION

In the statement [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)), the dynamic specification of parameters after the addition PARAMETERS has been enhanced by the option of entering the following table types:

-   ABAP\_TRANS\_OBJ\_BIND\_TAB for the specification of data references
    
-   ABAP\_TRANS\_OBJBIND\_TAB for the specification of object references.