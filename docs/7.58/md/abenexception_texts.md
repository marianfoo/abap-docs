---
title: "Exception Texts"
description: |
  Each exception is assigned a text that can be parameterized by attributes and that describes the exception situation. This text is displayed in the short dump(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshort_dump_glosry.htm 'Glossary Entry') of the runtime error if the exceptio
version: "7.58"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_texts.htm"
abapFile: "abenexception_texts.htm"
keywords: ["do", "if", "try", "method", "class", "exception-handling", "abenexception", "texts"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_exceptions.htm) →  [Class-Based Exceptions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexceptions.htm) →  [Exception Classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexceptions_classes.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Exception%20Texts%2C%20ABENEXCEPTION_TEXTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Exception Texts

Each exception is assigned a text that can be parameterized by attributes and that describes the exception situation. This text is displayed in the [short dump](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshort_dump_glosry.htm "Glossary Entry") of the runtime error if the exception is not handled. If the exception is handled in the program, the text can be read using the method GET\_TEXT of the interface IF\_MESSAGE, which is implemented by every exception class. Any long text can be read using the method GET\_LONGTEXT. A global exception class has a predefined exception text with the same name as the exception class. This predefined text can be edited and further exception texts can be defined.

From a technical perspective, each exception text is defined by an identically named static constant in the public visibility section of the exception class that defines its properties. The instance constructor of an exception class has an input parameter TEXTID to which such a constant can be passed when the exception is raised to determine the exception text. If the parameter is not passed, the predefined exception text with the same name as the exception class is used.

The exception texts of an exception class are usually defined by referring to [messages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmessage_glosry.htm "Glossary Entry") in the table T100. In predefined system classes, OTR (Online Text Repository) texts can also be used.

-   [Messages as Exception Texts](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_texts_t100.htm)
-   [Exception Texts for System Classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_texts_internal.htm)

Programming Guideline

[Using Messages as Exception Texts](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_texts_guidl.htm "Guideline")

Hints

-   The names of the exception texts or the associated constants should be understood as keys of the existing texts for an exception class. This means that when an exception is raised, only the constants of the exception class with the same name should be passed to the parameter TEXTID to determine the exception text.
-   The maintenance of the exception texts, that is, the associated constants and the instance constructor, depends largely on whether the [Class Builder](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_builder_glosry.htm "Glossary Entry") in the ABAP Workbench or the source code editor in the [ABAP development tools for Eclipse (ADT)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadt_glosry.htm "Glossary Entry") is used.

Continue
[Messages as Exception Texts](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_texts_t100.htm)
[Exception Texts for System Classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_texts_internal.htm)