---
title: "ABAP and JavaScript"
description: |
  In the kernel of an AS ABAP, a JavaScript (JS) Engine is integrated, in which JavaScript programs can be executed either in normal or in debugging mode (server-side scripting). The JavaScript (JS) Engine used supports JavaScript Version 1.5. Proxies can be used to bind script variables to data objec
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_java_script.htm"
abapFile: "abenabap_java_script.htm"
keywords: ["do", "method", "class", "data", "abenabap", "java", "script"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Data and Communication Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenextern_obsolete.htm) → 

ABAP and JavaScript

In the kernel of an AS ABAP, a JavaScript (JS) Engine is integrated, in which JavaScript programs can be executed either in normal or in debugging mode (server-side scripting). The JavaScript (JS) Engine used supports JavaScript Version 1.5. Proxies can be used to bind script variables to data objects in ABAP programs.

The class CL\_JAVA\_SCRIPT implements an API, which can be used in ABAP programs, for the JavaScript (JS) Engine implemented in the kernel. This class encapsulates the JavaScript C Engine API and makes methods and attributes available to the ABAP programmer to perform JavaScript programs.

Hint

Support for the connection of JavaScript to ABAP is scheduled to be discontinued. This means that the class CL\_JAVA\_SCRIPT can no longer be used.

Example

The program DEMO\_JAVA\_SCRIPT\_MINI\_EDITOR is an example of a minimal JavaScript editor in which JavaScript programs can be edited, executed, and tested. This program was created using ABAP methods only and uses the class CL\_JAVA\_SCRIPT.