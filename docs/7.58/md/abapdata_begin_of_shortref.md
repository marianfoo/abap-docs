  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_shortref.htm) →  D

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DATA%20BEGIN%20OF%2C%20ABAPDATA_BEGIN_OF_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DATA BEGIN OF - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_struc.htm)

Syntax

DATA BEGIN OF struc *\[*READ-ONLY*\]* *\[*OCCURS n*\]*.
  ...
  [INCLUDE ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinclude_type_shortref.htm)
  ...
DATA END OF struc *\[*VALID BETWEEN intlim1 AND intlim2*\]*.

Effect

Declares a data object or instance attribute struc. This variant of the statement DATA creates a structure whose components can be declared using any DATA statements or adopted from other structures using INCLUDE.

Additions   

-   [READ-ONLY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_options.htm)
    Protects a non-private structure against writes from outside its own class.
-   [OCCURS n](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_begin_of_occurs.htm)
    Obsolete: Creates an internal table with a structured line type, [standard key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_key_glosry.htm "Glossary Entry"), a [header line](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenheader_line_glosry.htm "Glossary Entry"), and [initial memory requirement](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninitial_mem_req_glosry.htm "Glossary Entry") n.
-   [VALID BETWEEN intlim1 AND intlim2](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_begin_of_occurs.htm)
    Obsolete: Defines the columns intlim1 and intlim2 in an internal table, created using OCCURS, as interval limits for the obsolete short form of [PROVIDE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapprovide_obsolete.htm).