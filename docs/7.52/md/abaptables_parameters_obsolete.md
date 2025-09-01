---
title: "Obsolete Syntax"
description: |
  ... TABLES p1  TYPE itab_type   STRUCTURE struc(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfunction_typing_obsolete.htm) OPTIONAL p2  TYPE itab_type   STRUCTURE struc(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfunction_
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptables_parameters_obsolete.htm"
abapFile: "abaptables_parameters_obsolete.htm"
keywords: ["do", "if", "try", "data", "internal-table", "abaptables", "parameters", "obsolete"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Modularization](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobsolete_modularization.htm) →  [Function Modules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunction_modules_obsolete.htm) → 

FUNCTION - table\_parameters

Obsolete Syntax

... TABLES p1  *{*TYPE itab\_type*}* *|* *{* [STRUCTURE struc](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfunction_typing_obsolete.htm)*}* *\[*OPTIONAL*\]*
           p2  *{*TYPE itab\_type*}* *|* *{* [STRUCTURE struc](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfunction_typing_obsolete.htm)*}* *\[*OPTIONAL*\]*
           ...

Effect

Defines the [table parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_parameter_glosry.htm "Glossary Entry") t1 t2 ... in the [function module interface](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunction.htm) display in the source code of function modules. Table parameters are obsolete CHANGING parameters that are typed as [standard tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_table_glosry.htm "Glossary Entry") with a [header line](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenheader_line_glosry.htm "Glossary Entry"). If an internal table without a header line or a [table body](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_body_glosry.htm "Glossary Entry") is passed as an actual parameter to a formal parameter of this type, an empty local header line is generated in the function module. If an internal table with a header line is used as an actual parameter, both the table body and the header line are passed to the function module. Pass by value is not possible in formal parameters defined using TABLES.

Information about TYPE, STRUCTURE, and OPTIONAL is available in [Properties of the Interface Parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunction_parameters.htm). The following special rules apply to table parameters:

-   Only [pass by reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpass_by_reference_glosry.htm "Glossary Entry") is allowed in TABLES parameters.
    
-   After TYPE, only one table type itab\_type from ABAP Dictionary (including type groups) with the table category standard table with a flat row type can be specified.
    
-   A type with TYPE REF TO is not permitted.
    

When TABLES parameters are accessed that are not bound to any type-compliant actual parameters, a special [exception situation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentables_parameters_restrictions.htm) can arise.

Note

Formal parameters defined with TABLES can be replaced by formal parameters defined with CHANGING. A local work area can be created for the internal table in the function module by using the addition LIKE LINE OF itab of the statement DATA.

Exception

Provided that [basXML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbasxml_glosry.htm "Glossary Entry") is not set as the [RFC log](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrfc_protocol.htm), using TABLES parameters for [remote-enabled function modules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenremote_enabled_fm_glosry.htm "Glossary Entry") for [RFC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrfc_glosry.htm "Glossary Entry") can be significantly faster than passing by means of the CHANGING parameter.

Continue
[Exceptions when Accessing TABLES Parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentables_parameters_restrictions.htm)