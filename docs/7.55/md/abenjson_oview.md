---
title: "JSON - Quick Overview"
description: |
  JSON (JavaScript Object Notation)(http://www.json.org/) is a data exchange format whose syntax generally represents a subset of the JavaScript syntax. JSON data is saved and transported as character strings in a character format. The syntax of JSON consists of the following components: -   Syntax
version: "7.55"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenjson_oview.htm"
abapFile: "abenjson_oview.htm"
keywords: ["do", "if", "try", "data", "abenjson", "oview"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_json.htm) → 

JSON - Quick Overview

[JSON (JavaScript Object Notation)](http://www.json.org/) is a data exchange format whose syntax generally represents a subset of the JavaScript syntax. JSON data is saved and transported as character strings in a character format.

The syntax of JSON consists of the following components:

-   Syntax characters

-   Curly brackets { } define objects.

-   Square brackets \[ \] define arrays.

-   A colon : divides the name and the value of an object component.

-   A comma , divides the components inside arrays and objects.

-   Representation of values

-   Character-like values are specified between double quotation marks " ". The \\ character is used as the escape character for syntax characters.

-   Number values are represented in [mathematical notation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmathematical_notation_glosry.htm "Glossary Entry") or in [scientific notation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenscientific_notation_glosry.htm "Glossary Entry").

-   Boolean values are represented by the keywords true and false.

-   Null values are represented by the keyword null.

-   Data structures

-   An array is an ordered list of values, arrays, or objects enclosed in square brackets \[ \] and divided by commas ,, which do not need to have the same type. An empty array, \[ \], is also possible.

-   An object is an ordered list of components enclosed in curly brackets { } and divided by commas ,. A component is a name enclosed in double quotation marks followed by a colon : followed by a value, array, or object.. An empty object, { }, is also possible. Unique names for the components of an object are recommended, but not mandatory.

Empty space (blanks, line breaks) can be used anywhere before and after the syntax characters. At the top level, valid JSON data contains a single value, an array, or an object. Arrays and objects can contain further values, arrays, or objects.

Hint

In JavaScript, JSON data can be transformed to JavaScript objects directly using a built-in function, eval, due to its compatibility. In other programming languages, JSON data is read using parsers, which is also recommended for JavaScript for reasons of performance and security.

Examples

-   The program DEMO\_JSON\_EXAMPLES shows examples of valid JSON data.

-   The program DEMO\_JSON\_SYNTAX\_CHECK enables JSON data to be entered and its syntax checked.