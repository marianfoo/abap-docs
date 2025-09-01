---
title: "Program Layout"
description: |
  !Figure(abdoc_program.gif) -   Each ABAP program starts with an introductory statement(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_program_statement.htm) that is specified by the program type(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_type_ov
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_program_layout.htm"
abapFile: "abenabap_program_layout.htm"
keywords: ["do", "while", "if", "try", "method", "class", "data", "types", "abenabap", "program", "layout"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) → 

Program Layout

![Figure](abdoc_program.gif)

-   Each ABAP program starts with an [introductory statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_program_statement.htm) that is specified by the [program type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_type_oview.htm).

-   The functions of an ABAP program are implemented in processing blocks. Processing blocks are defined using [modularization statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_modularization.htm). [Declarative statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) in processing blocks of the type [procedure](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_procedures.htm) can be used to define local data types and data objects. The other processing blocks do not have a local [data area](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_area_glosry.htm "Glossary Entry") and any declarative statements apply to the program globally. The most important processing blocks in ABAP objects are methods. They can only be implemented in the implementation part of their class. The order of the processing blocks or implementation parts is irrelevant for program execution, but should be designed to make the program easy to read.

-   Each ABAP program can make use of [predefined data types, data objects, and predefined functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in.htm).

-   Following the introductory statement, every program contains a global declaration part, in which [definitions and declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) are implemented that are valid and visible in the entire program. This includes the declaration of data types and data objects, as well as the definition of interfaces or the declaration part of classes in ABAP Objects. The definitions of interfaces and classes contain the declarations of their components. While the order of the individual definitions and declarations is not specified, it should be noted that an ABAP statement can only reference existing definitions and declarations. For example, a reference variable can only reference to a previously defined class, which in turn can only implement a previously defined interface. Once a [procedure](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprocedure_glosry.htm "Glossary Entry") is introduced, data types and data objects that are visible within the procedure can be declared. The declaration of data types also includes the [typing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping.htm) of objects that have an undetermined data type when the program is created.

-   All other statements of an ABAP program are implementation statements, which can always be assigned to a [processing block](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprocessing_block_glosry.htm "Glossary Entry"). The implementation statements are used to implement the functions of a processing block. The functions of all processing blocks are largely implemented using the same statements.

-   Since ABAP is a language that has grown over time, it contains several [obsolete additions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) of statements that have been replaced with improved language constructs, but which have not been eliminated to ensure downward compatibility. In ABAP Objects, that is in the implementation of methods, almost all of the obsolete language elements fail syntax checks. In general, these language elements should no longer be used in new programs, but they may still be encountered in older programs.

Continue
[ABAP Program Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_type_oview.htm)
[Introductory Statements for Programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_program_statement.htm)
[Modularization Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_modularization.htm)