---
title: "Released APIs"
description: |
  The following tables show all transportable repository objects(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrepository_object_glosry.htm 'Glossary Entry') of the current system that are released APIs(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenreleased_api_gl
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenreleased_apis.htm"
abapFile: "abenreleased_apis.htm"
keywords: ["select", "insert", "update", "delete", "loop", "do", "if", "case", "try", "method", "class", "data", "types", "abenreleased", "apis"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Rules for Strict ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_strict_rules.htm) → 

Released APIs

The following tables show all transportable [repository objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrepository_object_glosry.htm "Glossary Entry") of the current system that are [released APIs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenreleased_api_glosry.htm "Glossary Entry") and can be used in [restricted ABAP language versions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrestricted_version_glosry.htm "Glossary Entry").

-   The first three columns show the repository objects or parts of repository objects.
-   Column Release Contract shows the [release contract](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrelease_contract_glosry.htm "Glossary Entry") that is used for releasing the API.
-   The subsequent columns show, whether the API is released for restricted ABAP language version [ABAP for Cloud Development](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_sap_cloud_glosry.htm "Glossary Entry"), [ABAP for Key Users](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_key_users_glosry.htm "Glossary Entry") or for both

Any repository object that can be used in a restricted ABAP language versions must be classified with an appropriate release contract ( [C1 contract](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenc1_contract_glosry.htm "Glossary Entry") in general). But not all repository objects with a release contract can be used in a restricted language version.

Hint

You can also execute program ABAP\_DOCU\_RELEASED\_APIS, where you can restrict the result to certain release contracts or language versions.

-   [AUTH - Authorization Check Fields](#abenreleased-apis-1-------chkc---check-category---@ITOC@@ABENRELEASED_APIS_2)
-   [CHKO - Check](#abenreleased-apis-3-------chkv---check-variant---@ITOC@@ABENRELEASED_APIS_4)
-   [CLAS - Class (ABAP Objects)](#abenreleased-apis-5-------ddls---data-definition-language-source---@ITOC@@ABENRELEASED_APIS_6)
-   [DOMA - Domain](#abenreleased-apis-7-------dtel---data-element---@ITOC@@ABENRELEASED_APIS_8)
-   [ENHS - Enhancement Spot](#abenreleased-apis-9-------fdt0---fdt-brfplus--system-application---@ITOC@@ABENRELEASED_APIS_10)
-   [FUGR - Function Group](#abenreleased-apis-11-------g4ba---sap-gateway-odata-v4-backend-service-group---assigments---@ITOC@@ABENRELEASED_APIS_12)
-   [INTF - Interface (ABAP Objects)](#abenreleased-apis-13-------msag---message-class---@ITOC@@ABENRELEASED_APIS_14)
-   [SUSO - Authorization object](#abenreleased-apis-15-------tabl---table---@ITOC@@ABENRELEASED_APIS_16)
-   [TTYP - Table Type](#abenreleased-apis-17-------type---type-group---@ITOC@@ABENRELEASED_APIS_18)
-   [VIEW - View](#abenreleased-apis-19-------wdca---web-dynpro-application-configuration---@ITOC@@ABENRELEASED_APIS_20)
-   [XSLT - Transformation](#@@ITOC@@ABENRELEASED_APIS_21)

AUTH - Authorization Check Fields

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

ACTVT

\-

\-

C1

X

TABLE

\-

\-

C1

X

CHKC - Check category

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

CHKC\_TEST1

\-

\-

C1

X

CI\_BUSINESS\_SERVICES

\-

\-

C1

X

CI\_CDS

\-

\-

C1

X

CI\_CDS\_GENERAL

\-

\-

C1

X

CI\_CDS\_SYNTAX

\-

\-

C1

X

CI\_DICTIONARY

\-

\-

C1

X

CI\_DYNAMIC

\-

\-

C1

X

CI\_PERFORMANCE

\-

\-

C1

X

CI\_RAP

\-

\-

C1

X

CI\_ROBUSTNESS

\-

\-

C1

X

CI\_SEARCH

\-

\-

C1

X

CI\_SECURITY

\-

\-

C1

X

CI\_SYNTAX

\-

\-

C1

X

SADL\_RUNTIME

\-

\-

C1

X

SYCM\_CLOUD\_READINESS

\-

\-

C1

X

SYCM\_S4H\_READINESS

\-

\-

C1

X

CHKO - Check

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

ABAP\_UNIT

\-

\-

C1

X

BSP\_SEC

\-

\-

C1

X

CDS\_ACCESS\_CONDITIONS

\-

\-

C1

X

CDS\_DDLX\_SYNTAX\_CHECK

\-

\-

C1

X

CDS\_REFERENCED\_OBJECTS

\-

\-

C1

X

CHKO\_TEST1

\-

\-

C1

X

CI\_AMDP\_HDB\_MIGRATION

\-

\-

C1

X

CI\_ANALYZE\_SELECT\_HANA

\-

\-

C1

X

CI\_ANALYZE\_WHERE

\-

\-

C1

X

CI\_ANALYZE\_WHERE\_IMUD

\-

\-

C1

X

CI\_CRITICAL\_STATEMENTS

\-

\-

C1

X

CI\_DDIC\_TABLES

\-

\-

C1

X

CI\_FIND\_DYN\_SQL

\-

\-

C1

X

CI\_FOR\_ALL\_ENTRIES

\-

\-

C1

X

CI\_FOR\_ALL\_ENTRIES\_HANA

\-

\-

C1

X

CI\_ITAB\_PERFORMANCE

\-

\-

C1

X

CI\_NO\_ORDER\_BY

\-

\-

C1

X

CI\_SEARCH\_ABAP\_PATTERN

\-

\-

C1

X

CI\_SEARCH\_DB\_OPS\_IN\_PC

\-

\-

C1

X

CI\_SELECT\_TAW\_BYBUF

\-

\-

C1

X

CI\_SQL1\_CONSISTENCY

\-

\-

C1

X

CI\_VALUE\_PARAMETER

\-

\-

C1

X

DD\_CI\_DDIC\_CONSISTENCY\_AC

\-

\-

C1

X

DD\_CI\_DDIC\_CONSISTENCY\_PA

\-

\-

C1

X

SADL\_RUNTIME

\-

\-

C1

X

SLIN\_MAIN

\-

\-

C1

X

SLIN\_SEC

\-

\-

C1

X

SLIN\_VERS

\-

\-

C1

X

SYCM\_CLOUD\_ALLOWED\_OBJCT\_TYPES

\-

\-

C1

X

SYCM\_CLOUD\_RELEASED\_OBJECTS

\-

\-

C1

X

SYCM\_S4H\_CDS\_PRIV\_ACC

\-

\-

C1

X

SYCM\_S4H\_DD\_ENHANCEMENTS

\-

\-

C1

X

SYCM\_S4H\_DD\_VIEW\_BASE

\-

\-

C1

X

SYCM\_S4H\_FIELD\_EXT

\-

\-

C1

X

SYCM\_S4H\_SAP\_QUERY

\-

\-

C1

X

SYCM\_S4H\_SEARCH\_DB\_OPS

\-

\-

C1

X

SYCM\_S4H\_TRAN\_LITERALS

\-

\-

C1

X

SYCM\_S4H\_WHERE\_USED

\-

\-

C1

X

CHKV - Check Variant

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

ABAP\_CLOUD\_DEVELOPMENT\_DEFAULT

\-

\-

C1

X

ABAP\_CLOUD\_READINESS

\-

\-

C1

X

CHKV\_TEST1

\-

\-

C1

X

FUNCTIONAL\_DB

\-

\-

C1

X

SAP\_CLOUD\_PLATFORM\_ATC\_DEFAULT

\-

\-

C1

X

SAP\_CP\_READINESS

\-

\-

C1

X

SLIN\_SEC

\-

\-

C1

X

CLAS - Class (ABAP Objects)

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

/IWBEP/CX\_CP\_REMOTE

\-

\-

C1

X

/IWBEP/CX\_GATEWAY

\-

\-

C1

X

CL\_ABAP\_API\_STATE

\-

\-

C1

X

CL\_ABAP\_BEHV\_AUX

\-

\-

C1

X

CL\_ABAP\_BEHV\_TEST\_ENVIRONMENT

\-

\-

C1

X

CL\_ABAP\_CHAR\_UTILITIES

\-

\-

C1

X

X

CL\_ABAP\_CLASSDESCR

\-

\-

C1

X

CL\_ABAP\_COMPLEXDESCR

\-

\-

C1

X

CL\_ABAP\_CONTEXT\_INFO

\-

\-

C1

X

X

CL\_ABAP\_CONV\_CODEPAGE

\-

\-

C1

X

X

CL\_ABAP\_CORRESPONDING

\-

\-

C1

X

X

CL\_ABAP\_C\_READER

\-

\-

C1

X

CL\_ABAP\_C\_WRITER

\-

\-

C1

X

CL\_ABAP\_DATADESCR

\-

\-

C1

X

CL\_ABAP\_DATFM

\-

\-

C1

X

X

CL\_ABAP\_DB\_C\_LOCATOR

\-

\-

C1

X

CL\_ABAP\_DB\_C\_READER

\-

\-

C1

X

CL\_ABAP\_DB\_C\_WRITER

\-

\-

C1

X

CL\_ABAP\_DB\_X\_LOCATOR

\-

\-

C1

X

CL\_ABAP\_DB\_X\_READER

\-

\-

C1

X

CL\_ABAP\_DB\_X\_WRITER

\-

\-

C1

X

CL\_ABAP\_DECFLOAT

\-

\-

C1

X

X

CL\_ABAP\_DYN\_PRG

\-

\-

C1

X

CL\_ABAP\_ELEMDESCR

\-

\-

C1

X

CL\_ABAP\_ENUMDESCR

\-

\-

C1

X

CL\_ABAP\_EXCEPTIONAL\_VALUES

\-

\-

C1

X

X

CL\_ABAP\_FORMAT

\-

\-

C1

X

X

CL\_ABAP\_GZIP

\-

\-

C1

X

X

CL\_ABAP\_GZIP\_BINARY\_STREAM

\-

\-

C1

X

X

CL\_ABAP\_GZIP\_TEXT\_STREAM

\-

\-

C1

X

X

CL\_ABAP\_HMAC

\-

\-

C1

X

CL\_ABAP\_INTFDESCR

\-

\-

C1

X

CL\_ABAP\_ITAB\_C\_READER

\-

\-

C1

X

CL\_ABAP\_ITAB\_C\_WRITER

\-

\-

C1

X

CL\_ABAP\_ITAB\_X\_READER

\-

\-

C1

X

CL\_ABAP\_ITAB\_X\_WRITER

\-

\-

C1

X

CL\_ABAP\_LOCK\_OBJECT\_FACTORY

\-

\-

C1

X

CL\_ABAP\_MATCHER

\-

\-

C1

X

X

CL\_ABAP\_MATH

\-

\-

C1

X

X

CL\_ABAP\_MEMORY\_C\_READER

\-

\-

C1

X

CL\_ABAP\_MEMORY\_C\_WRITER

\-

\-

C1

X

CL\_ABAP\_MEMORY\_X\_READER

\-

\-

C1

X

CL\_ABAP\_MEMORY\_X\_WRITER

\-

\-

C1

X

CL\_ABAP\_MESSAGE\_DIGEST

\-

\-

C1

X

X

CL\_ABAP\_OBJECTDESCR

\-

\-

C1

X

CL\_ABAP\_PARALLEL

\-

\-

C1

X

CL\_ABAP\_RANDOM

\-

\-

C1

X

X

CL\_ABAP\_RANDOM\_DECFLOAT16

\-

\-

C1

X

X

CL\_ABAP\_RANDOM\_DECFLOAT34

\-

\-

C1

X

X

CL\_ABAP\_RANDOM\_FLOAT

\-

\-

C1

X

X

CL\_ABAP\_RANDOM\_INT

\-

\-

C1

X

X

CL\_ABAP\_RANDOM\_INT8

\-

\-

C1

X

X

CL\_ABAP\_RANDOM\_PACKED

\-

\-

C1

X

X

CL\_ABAP\_RANDOM\_PACKED\_DEC1

\-

\-

C1

X

X

CL\_ABAP\_RANDOM\_PACKED\_DEC10

\-

\-

C1

X

X

CL\_ABAP\_RANDOM\_PACKED\_DEC11

\-

\-

C1

X

X

CL\_ABAP\_RANDOM\_PACKED\_DEC12

\-

\-

C1

X

X

CL\_ABAP\_RANDOM\_PACKED\_DEC13

\-

\-

C1

X

X

CL\_ABAP\_RANDOM\_PACKED\_DEC14

\-

\-

C1

X

X

CL\_ABAP\_RANDOM\_PACKED\_DEC2

\-

\-

C1

X

X

CL\_ABAP\_RANDOM\_PACKED\_DEC3

\-

\-

C1

X

X

CL\_ABAP\_RANDOM\_PACKED\_DEC4

\-

\-

C1

X

X

CL\_ABAP\_RANDOM\_PACKED\_DEC5

\-

\-

C1

X

X

CL\_ABAP\_RANDOM\_PACKED\_DEC6

\-

\-

C1

X

X

CL\_ABAP\_RANDOM\_PACKED\_DEC7

\-

\-

C1

X

X

CL\_ABAP\_RANDOM\_PACKED\_DEC8

\-

\-

C1

X

X

CL\_ABAP\_RANDOM\_PACKED\_DEC9

\-

\-

C1

X

X

CL\_ABAP\_RANGE

\-

\-

C1

X

CL\_ABAP\_REFDESCR

\-

\-

C1

X

CL\_ABAP\_REGEX

\-

\-

C1

X

X

CL\_ABAP\_RUNTIME

\-

\-

C1

 

X

CL\_ABAP\_SQL\_CHANGING\_STMNT

\-

\-

C1

X

CL\_ABAP\_SQL\_SELECT\_STATEMENT

\-

\-

C1

X

CL\_ABAP\_SQL\_STATEMENT\_HANDLE

\-

\-

C1

X

CL\_ABAP\_STRING\_C\_READER

\-

\-

C1

X

CL\_ABAP\_STRING\_C\_WRITER

\-

\-

C1

X

CL\_ABAP\_STRING\_UTILITIES

\-

\-

C1

X

X

CL\_ABAP\_STRING\_X\_READER

\-

\-

C1

X

CL\_ABAP\_STRING\_X\_WRITER

\-

\-

C1

X

CL\_ABAP\_STRUCTDESCR

\-

\-

C1

X

CL\_ABAP\_TABLEDESCR

\-

\-

C1

X

CL\_ABAP\_TESTDOUBLE

\-

\-

C1

X

CL\_ABAP\_TIMEFM

\-

\-

C1

X

X

CL\_ABAP\_TIMESTAMP\_UTIL

\-

\-

C1

 

X

CL\_ABAP\_TSTMP

\-

\-

C1

X

X

CL\_ABAP\_TYPEDESCR

\-

\-

C1

X

CL\_ABAP\_UNGZIP\_BINARY\_STREAM

\-

\-

C1

X

X

CL\_ABAP\_UNGZIP\_TEXT\_STREAM

\-

\-

C1

X

X

CL\_ABAP\_UNIT\_ASSERT

\-

\-

C1

X

X

CL\_ABAP\_UTCLONG

\-

\-

C1

X

X

CL\_ABAP\_X\_WRITER

\-

\-

C1

X

CL\_ABAP\_ZIP

\-

\-

C1

X

X

CL\_ADDRESS\_FORMAT

\-

\-

C1

X

X

CL\_APJ\_DT\_CREATE\_CONTENT

\-

\-

C1

X

CL\_APJ\_JT\_CHECK\_BASE

\-

\-

C1

X

CL\_APJ\_RT\_API

\-

\-

C1

X

CL\_APJ\_SCP\_TOOLS

\-

\-

C1

X

CL\_AUNIT\_AUTHORITY\_CHECK

\-

\-

C1

X

CL\_AUNIT\_AUTH\_CHECK\_TYPES\_DEF

\-

\-

C1

X

CL\_AUNIT\_CONSTRAINTS

\-

\-

C1

X

CL\_AUTH\_CHECK\_FOR\_BU

\-

\-

C1

X

CL\_AUTH\_FACTORY

\-

\-

C1

X

CL\_BADI\_BASE

\-

\-

C1

X

CL\_BALI\_EXCEPTION\_SETTER

\-

\-

C1

X

CL\_BALI\_FREE\_TEXT\_SETTER

\-

\-

C1

X

CL\_BALI\_HEADER\_SETTER

\-

\-

C1

X

CL\_BALI\_LOG

\-

\-

C1

X

CL\_BALI\_LOG\_DB

\-

\-

C1

X

CL\_BALI\_LOG\_FILTER

\-

\-

C1

X

CL\_BALI\_MESSAGE\_SETTER

\-

\-

C1

X

CL\_BALI\_OBJECT\_HANDLER

\-

\-

C1

X

CL\_BCFG\_CD\_REUSE\_API\_FACTORY

\-

\-

C1

X

CL\_BCFG\_CD\_REUSE\_API\_INJECTOR

\-

\-

C1

X

CL\_BCS\_MAIL\_BINARYPART

\-

\-

C1

X

CL\_BCS\_MAIL\_BODYPART

\-

\-

C1

X

CL\_BCS\_MAIL\_MESSAGE

\-

\-

C1

X

CL\_BCS\_MAIL\_TEXTPART

\-

\-

C1

X

CL\_BLE\_API\_MT\_TENANT

\-

\-

C1

X

CL\_BLE\_BADI\_RUNTIME

\-

\-

C1

 

X

CL\_BLE\_TRACE\_WRITER

\-

\-

C1

 

X

CL\_CDS\_ENTITY\_INSPECTOR

\-

\-

C1

X

CL\_CDS\_TEST\_DATA

\-

\-

C1

X

CL\_CDS\_TEST\_DATA\_FOR\_CURR\_CONV

\-

\-

C1

X

CL\_CDS\_TEST\_DATA\_FOR\_UNIT\_CONV

\-

\-

C1

X

CL\_CDS\_TEST\_ENVIRONMENT

\-

\-

C1

X

CL\_CHDO\_OBJECT\_TOOLS\_REL

\-

\-

C1

X

CL\_CHDO\_READ\_TOOLS

\-

\-

C1

X

CL\_CHDO\_WRITE\_TOOLS

\-

\-

C1

X

CL\_CMIS\_CLIENT\_FACTORY

\-

\-

C1

X

CL\_CMIS\_CONSTANTS

\-

\-

C1

X

CL\_CMIS\_OBJECT\_FACTORY

\-

\-

C1

X

CL\_CMIS\_PROPERTY\_IDS

\-

\-

C1

X

CL\_EXCHANGE\_RATES

\-

\-

C1

X

CL\_FDT\_BRS\_PROCESSOR

\-

\-

C1

X

X

CL\_FDT\_CP\_AST\_FACTORY

\-

\-

C1

X

CL\_FDT\_CP\_AST\_HELPER

\-

\-

C1

X

CL\_FDT\_CP\_AST\_SIMPLE\_NODE

\-

\-

C1

X

CL\_FDT\_CP\_FACTORY

\-

\-

C1

X

CL\_FDT\_CP\_UTILITY\_API

\-

\-

C1

X

CL\_FDT\_OBJ\_SYSTEM\_VARIABLES

\-

\-

C1

X

X

CL\_HTTP\_SERVICE\_UTILITY

\-

\-

C1

X

CL\_ICU\_TRANSFORMATION

\-

\-

C1

X

CL\_IXML\_CORE

\-

\-

C1

X

CL\_IXML\_XPATH

\-

\-

C1

X

CL\_MESSAGE\_HELPER

\-

\-

C1

X

CL\_NUMBERRANGE\_INTERVALS

\-

\-

C1

X

CL\_NUMBERRANGE\_OBJECTS

\-

\-

C1

X

CL\_NUMBERRANGE\_RUNTIME

\-

\-

C1

X

CL\_OSQL\_TEST\_DATA

\-

\-

C1

X

CL\_OSQL\_TEST\_ENVIRONMENT

\-

\-

C1

X

CL\_PCF\_FIELD\_VALIDATION

\-

\-

C1

X

X

CL\_PCF\_GENERIC\_TEXT\_PROVIDER

\-

\-

C1

X

CL\_PROXY\_CLIENT

\-

\-

C1

X

CL\_RFC\_DESTINATION\_PROVIDER

\-

\-

C1

X

CL\_SCAL\_API

\-

\-

C1

X

CL\_SCAL\_UTILS

\-

\-

C1

X

CL\_SWF\_CPWF\_API\_FACTORY\_A4C

\-

\-

C1

X

CL\_SXML\_STRING\_READER

\-

\-

C1

X

CL\_SXML\_STRING\_WRITER

\-

\-

C1

X

CL\_SXML\_TABLE\_READER

\-

\-

C1

X

CL\_SXML\_TABLE\_WRITER

\-

\-

C1

X

CL\_SYSTEM\_UUID

\-

\-

C1

X

X

CL\_UOM\_CONVERSION

\-

\-

C1

X

X

CL\_UOM\_DIM\_MAINTENANCE

\-

\-

C1

X

CL\_UOM\_MAINTENANCE

\-

\-

C1

X

CL\_UUID\_FACTORY

\-

\-

C1

X

X

CL\_WEB\_HTTP\_UTILITY

\-

\-

C1

X

CL\_XCO\_ABAP\_T\_BI\_FIXED\_LENGTH

\-

\-

C1

X

CL\_XCO\_ABAP\_T\_BI\_P

\-

\-

C1

X

CL\_XCO\_ABAP\_T\_BI\_VRBLE\_LENGTH

\-

\-

C1

X

CL\_XCO\_ABAP\_T\_BUILT\_IN

\-

\-

C1

X

CL\_XCO\_ABAP\_T\_BUILT\_IN\_FACTORY

\-

\-

C1

X

CL\_XCO\_ABAP\_T\_GENERIC\_DATA

\-

\-

C1

X

CL\_XCO\_ABAP\_T\_GENERIC\_FACTORY

\-

\-

C1

X

CL\_XCO\_ABAP\_T\_G\_DATA

\-

\-

C1

X

CL\_XCO\_ABAP\_T\_G\_OBJECT

\-

\-

C1

X

CL\_XCO\_ABAP\_T\_R\_BUILT\_IN

\-

\-

C1

X

CL\_XCO\_ABAP\_T\_R\_GENERIC

\-

\-

C1

X

CL\_XCO\_AD\_BUILT\_IN\_TYPE

\-

\-

C1

X

CL\_XCO\_AD\_BUILT\_IN\_TYPE\_F

\-

\-

C1

X

CL\_XCO\_AD\_OBJECT\_READ\_STATE

\-

\-

C1

X

CL\_XCO\_AD\_OBJECT\_STATE

\-

\-

C1

X

CL\_XCO\_AD\_OBJECT\_STATE\_F

\-

\-

C1

X

CL\_XCO\_AMDP\_DB\_LANGUAGE

\-

\-

C1

X

CL\_XCO\_AMDP\_DB\_OPTION

\-

\-

C1

X

CL\_XCO\_AMDP\_DB\_TYPE

\-

\-

C1

X

CL\_XCO\_AO\_TYPING\_METHOD

\-

\-

C1

X

CL\_XCO\_AO\_VISIBILITY

\-

\-

C1

X

CL\_XCO\_AO\_VISIBILITY\_F

\-

\-

C1

X

CL\_XCO\_APLO\_OBJ\_TEXT

\-

\-

C1

X

CL\_XCO\_APLO\_OBJ\_TEXT\_ATTRIBUTE

\-

\-

C1

X

CL\_XCO\_APLO\_SUBOBJ\_TEXT

\-

\-

C1

X

CL\_XCO\_APLO\_SUBOBJ\_TEXT\_ATTRBT

\-

\-

C1

X

CL\_XCO\_ARS\_API\_STATE

\-

\-

C1

X

CL\_XCO\_ARS\_RELEASE\_CONTRACT

\-

\-

C1

X

CL\_XCO\_ARS\_RELEASE\_STATE

\-

\-

C1

X

CL\_XCO\_ARS\_VISIBILITY

\-

\-

C1

X

CL\_XCO\_AR\_SELECTION\_BUILDER

\-

\-

C1

X

CL\_XCO\_ASQL\_CONSTRAINT

\-

\-

C1

X

CL\_XCO\_ASQL\_CONSTRAINT\_FACTORY

\-

\-

C1

X

CL\_XCO\_BAL\_LEVEL\_OF\_DETAIL

\-

\-

C1

X

CL\_XCO\_BAL\_LOG\_SELECTION\_BLDR

\-

\-

C1

X

CL\_XCO\_BCO\_TEXT

\-

\-

C1

X

CL\_XCO\_BCO\_TEXT\_ATTRIBUTE

\-

\-

C1

X

CL\_XCO\_BDEF\_EVALUATION\_F

\-

\-

C1

X

CL\_XCO\_BDEF\_EVALUATION\_TIME

\-

\-

C1

X

CL\_XCO\_BDEF\_EVALUATION\_TIME\_F

\-

\-

C1

X

CL\_XCO\_BDEF\_EVAL\_TRIGGER\_OPRTN

\-

\-

C1

X

CL\_XCO\_BDEF\_EVAL\_TRIGGER\_OP\_F

\-

\-

C1

X

CL\_XCO\_BDEF\_IMPLEMENTATION\_TYP

\-

\-

C1

X

CL\_XCO\_BDEF\_IMPLEMENTATN\_TYP\_F

\-

\-

C1

X

CL\_XCO\_BDEF\_STANDARD\_OPERATION

\-

\-

C1

X

CL\_XCO\_BDEF\_STANDARD\_OPERATN\_F

\-

\-

C1

X

CL\_XCO\_BOOLEAN

\-

\-

C1

X

X

CL\_XCO\_CDS\_ANN\_CLASS

\-

\-

C1

X

CL\_XCO\_CDS\_ANN\_SELECTION\_BLDR

\-

\-

C1

X

CL\_XCO\_CDS\_CARDINALITY

\-

\-

C1

X

CL\_XCO\_CDS\_CARDINALITY\_1

\-

\-

C1

X

CL\_XCO\_CDS\_CARDINALITY\_C

\-

\-

C1

X

CL\_XCO\_CDS\_CARDINALITY\_CN

\-

\-

C1

X

CL\_XCO\_CDS\_CARDINALITY\_F

\-

\-

C1

X

CL\_XCO\_CDS\_CARDINALITY\_N

\-

\-

C1

X

CL\_XCO\_CDS\_LEFT\_OUTER\_JOIN\_CAR

\-

\-

C1

X

CL\_XCO\_CDS\_LEFT\_OUTER\_JOIN\_C\_F

\-

\-

C1

X

CL\_XCO\_CP\_ADT\_SIMPLE\_CLASSRUN

\-

\-

C1

X

CL\_XCO\_CP\_AD\_OBJ\_READ\_STATE\_F

\-

\-

C1

X

CL\_XCO\_CP\_AMDP\_DB\_LANGUAGE\_F

\-

\-

C1

X

CL\_XCO\_CP\_AMDP\_DB\_OPTION\_F

\-

\-

C1

X

CL\_XCO\_CP\_AMDP\_DB\_TYPE\_F

\-

\-

C1

X

CL\_XCO\_CP\_APLO\_OBJ\_TEXT\_ATTR\_F

\-

\-

C1

X

CL\_XCO\_CP\_APLO\_SUBOBJ\_T\_ATTR\_F

\-

\-

C1

X

CL\_XCO\_CP\_APLO\_TEXT\_ATTR\_F

\-

\-

C1

X

CL\_XCO\_CP\_ARS\_API\_STATE\_FCTRY

\-

\-

C1

X

CL\_XCO\_CP\_ARS\_RELEASE\_CNTRCT\_F

\-

\-

C1

X

CL\_XCO\_CP\_ARS\_RELEASE\_STATE\_F

\-

\-

C1

X

CL\_XCO\_CP\_ARS\_VISIBILITY\_F

\-

\-

C1

X

CL\_XCO\_CP\_BAL\_LVL\_OF\_DTL\_F

\-

\-

C1

X

CL\_XCO\_CP\_BCO\_TEXT\_ATTRIBUTE\_F

\-

\-

C1

X

CL\_XCO\_CP\_BOOLEAN\_F

\-

\-

C1

X

CL\_XCO\_CP\_DDEF\_ENT\_TEXT\_ATTR\_F

\-

\-

C1

X

CL\_XCO\_CP\_DDEF\_FLD\_TEXT\_ATTR\_F

\-

\-

C1

X

CL\_XCO\_CP\_DDEF\_OBJ\_RD\_STATE\_F

\-

\-

C1

X

CL\_XCO\_CP\_DDEF\_PRM\_TEXT\_ATTR\_F

\-

\-

C1

X

CL\_XCO\_CP\_DDEF\_TEXT\_ATTR\_F

\-

\-

C1

X

CL\_XCO\_CP\_DOMA\_TEXT\_ATTR\_F

\-

\-

C1

X

CL\_XCO\_CP\_DTEL\_TEXT\_ATTR\_F

\-

\-

C1

X

CL\_XCO\_CP\_GEN\_DOMA\_TEMPLATE

\-

\-

C1

X

CL\_XCO\_CP\_GEN\_DTEL\_TEMPLATE

\-

\-

C1

X

CL\_XCO\_CP\_GEN\_D\_O\_PUT\_OPTION

\-

\-

C1

X

CL\_XCO\_CP\_GEN\_O\_PUT\_O\_SKP\_ACTN

\-

\-

C1

X

CL\_XCO\_CP\_GEN\_TABL\_DBT\_TMPLT

\-

\-

C1

X

CL\_XCO\_CP\_GEN\_TABL\_STR\_TMPLT

\-

\-

C1

X

CL\_XCO\_CP\_GEN\_TTYP\_TEMPLATE

\-

\-

C1

X

CL\_XCO\_CP\_MC\_TEXT\_ATTR\_F

\-

\-

C1

X

CL\_XCO\_CP\_MESSAGE\_TYPE\_F

\-

\-

C1

X

CL\_XCO\_CP\_ME\_ENT\_TEXT\_ATTR\_F

\-

\-

C1

X

CL\_XCO\_CP\_ME\_FLD\_TEXT\_ATTR\_F

\-

\-

C1

X

CL\_XCO\_CP\_ME\_LAYER\_F

\-

\-

C1

X

CL\_XCO\_CP\_ME\_PRM\_TEXT\_ATTR\_F

\-

\-

C1

X

CL\_XCO\_CP\_ME\_TEXT\_ATTR\_F

\-

\-

C1

X

CL\_XCO\_CP\_SRVB\_BINDING\_TYPE\_F

\-

\-

C1

X

CL\_XCO\_CP\_TAB\_FIELD\_PROPERTY\_F

\-

\-

C1

X

CL\_XCO\_CP\_TEN\_URL\_TYPE\_F

\-

\-

C1

X

CL\_XCO\_CP\_TM\_FMT\_ABAP

\-

\-

C1

X

CL\_XCO\_CP\_TM\_FMT\_ISO\_8601\_BSC

\-

\-

C1

X

CL\_XCO\_CP\_TM\_FMT\_ISO\_8601\_EXT

\-

\-

C1

X

CL\_XCO\_CP\_TR\_RESOLUTION\_FCTRY

\-

\-

C1

X

CL\_XCO\_CTS\_CHANGE

\-

\-

C1

X

CL\_XCO\_CTS\_CHANGE\_CONTEXT

\-

\-

C1

X

CL\_XCO\_CTS\_PROGRAM\_ID

\-

\-

C1

X

CL\_XCO\_CTS\_PROGRAM\_ID\_F

\-

\-

C1

X

CL\_XCO\_DBT\_BUFFERING

\-

\-

C1

X

CL\_XCO\_DBT\_BUFFERING\_F

\-

\-

C1

X

CL\_XCO\_DBT\_BUFFERING\_TYPE

\-

\-

C1

X

CL\_XCO\_DBT\_BUFFERING\_TYPE\_F

\-

\-

C1

X

CL\_XCO\_DBT\_DATA\_CLASS

\-

\-

C1

X

CL\_XCO\_DBT\_DATA\_CLASS\_F

\-

\-

C1

X

CL\_XCO\_DBT\_DATA\_MAINTENANCE

\-

\-

C1

X

CL\_XCO\_DBT\_DATA\_MAINTENANCE\_F

\-

\-

C1

X

CL\_XCO\_DBT\_DELIVERY\_CLASS

\-

\-

C1

X

CL\_XCO\_DBT\_DELIVERY\_CLASS\_F

\-

\-

C1

X

CL\_XCO\_DBT\_SIZE\_CATEGORY

\-

\-

C1

X

CL\_XCO\_DBT\_SIZE\_CATEGORY\_F

\-

\-

C1

X

CL\_XCO\_DDEF\_ENT\_TEXT

\-

\-

C1

X

CL\_XCO\_DDEF\_ENT\_TEXT\_ATTRIBUTE

\-

\-

C1

X

CL\_XCO\_DDEF\_FLD\_TEXT

\-

\-

C1

X

CL\_XCO\_DDEF\_FLD\_TEXT\_ATTRIBUTE

\-

\-

C1

X

CL\_XCO\_DDEF\_OBJECT\_READ\_STATE

\-

\-

C1

X

CL\_XCO\_DDEF\_OBJECT\_STATE

\-

\-

C1

X

CL\_XCO\_DDEF\_OBJECT\_STATE\_F

\-

\-

C1

X

CL\_XCO\_DDEF\_PRM\_TEXT

\-

\-

C1

X

CL\_XCO\_DDEF\_PRM\_TEXT\_ATTRIBUTE

\-

\-

C1

X

CL\_XCO\_DDEF\_TYPE

\-

\-

C1

X

CL\_XCO\_DDEF\_TYPE\_F

\-

\-

C1

X

CL\_XCO\_DDL\_EXPR\_CAST\_BP\_DTYPE

\-

\-

C1

X

CL\_XCO\_DOMAIN\_OUTPUT\_STYLE

\-

\-

C1

X

CL\_XCO\_DOMAIN\_OUTPUT\_STYLE\_F

\-

\-

C1

X

CL\_XCO\_DOMAIN\_TEXT

\-

\-

C1

X

CL\_XCO\_DOMAIN\_TEXT\_ATTRIBUTE

\-

\-

C1

X

CL\_XCO\_DTEL\_TEXT

\-

\-

C1

X

CL\_XCO\_DTEL\_TEXT\_ATTRIBUTE

\-

\-

C1

X

CL\_XCO\_GEN\_AO\_BP\_PRMTR\_TYPE

\-

\-

C1

X

CL\_XCO\_GEN\_AO\_BP\_TYPE\_SOURCE

\-

\-

C1

X

CL\_XCO\_GEN\_CDS\_BP\_CARDINALITY

\-

\-

C1

X

CL\_XCO\_GEN\_DDLS\_BP\_DDL\_EXPRESS

\-

\-

C1

X

CL\_XCO\_GEN\_DDLS\_BP\_FIELD\_TYPE

\-

\-

C1

X

CL\_XCO\_GEN\_DDLS\_BP\_PARAM\_DTYPE

\-

\-

C1

X

CL\_XCO\_GEN\_DOMA\_BP\_FORMAT

\-

\-

C1

X

CL\_XCO\_GEN\_DTEL\_BP\_DATA\_TYPE

\-

\-

C1

X

CL\_XCO\_GEN\_TABL\_APS\_ENH\_CAT

\-

\-

C1

X

CL\_XCO\_GEN\_TABL\_BP\_FKEY\_CARD

\-

\-

C1

X

CL\_XCO\_GEN\_TABL\_BP\_FLD\_TYP\_DBT

\-

\-

C1

X

CL\_XCO\_GEN\_TABL\_BP\_FLD\_TYP\_GTT

\-

\-

C1

X

CL\_XCO\_GEN\_TABL\_BP\_FLD\_TYP\_STR

\-

\-

C1

X

CL\_XCO\_GEN\_TABL\_DBT\_BP\_INDX\_NU

\-

\-

C1

X

CL\_XCO\_GEN\_TTYP\_BP\_ROW\_TYPE

\-

\-

C1

X

CL\_XCO\_KU\_BOOLEAN\_F

\-

\-

C1

 

X

CL\_XCO\_KU\_TEN\_URL\_TYPE\_F

\-

\-

C1

 

X

CL\_XCO\_KU\_TM\_FMT\_ABAP

\-

\-

C1

 

X

CL\_XCO\_KU\_TM\_FMT\_ISO\_8601\_BSC

\-

\-

C1

 

X

CL\_XCO\_KU\_TM\_FMT\_ISO\_8601\_EXT

\-

\-

C1

 

X

CL\_XCO\_MC\_TEXT

\-

\-

C1

X

CL\_XCO\_MC\_TEXT\_ATTRIBUTE

\-

\-

C1

X

CL\_XCO\_MESSAGE\_TYPE

\-

\-

C1

X

X

CL\_XCO\_ME\_ENT\_TEXT

\-

\-

C1

X

CL\_XCO\_ME\_ENT\_TEXT\_ATTRIBUTE

\-

\-

C1

X

CL\_XCO\_ME\_FLD\_TEXT

\-

\-

C1

X

CL\_XCO\_ME\_FLD\_TEXT\_ATTRIBUTE

\-

\-

C1

X

CL\_XCO\_ME\_LAYER

\-

\-

C1

X

CL\_XCO\_ME\_PRM\_TEXT

\-

\-

C1

X

CL\_XCO\_ME\_PRM\_TEXT\_ATTRIBUTE

\-

\-

C1

X

CL\_XCO\_PKG\_TYPE

\-

\-

C1

X

CL\_XCO\_PKG\_TYPE\_F

\-

\-

C1

X

CL\_XCO\_PKG\_T\_RELEVANCE

\-

\-

C1

X

CL\_XCO\_SC\_CHANGEABILITY

\-

\-

C1

X

CL\_XCO\_SC\_CHANGEABILITY\_F

\-

\-

C1

X

CL\_XCO\_SC\_EXTENDABILITY

\-

\-

C1

X

CL\_XCO\_SC\_EXTENDABILITY\_F

\-

\-

C1

X

CL\_XCO\_SRVB\_BINDING\_TYPE

\-

\-

C1

X

CL\_XCO\_TAB\_EC\_0

\-

\-

C1

X

CL\_XCO\_TAB\_EC\_1

\-

\-

C1

X

CL\_XCO\_TAB\_EC\_2

\-

\-

C1

X

CL\_XCO\_TAB\_EC\_3

\-

\-

C1

X

CL\_XCO\_TAB\_EC\_4

\-

\-

C1

X

CL\_XCO\_TAB\_ENHANCEMENT\_CTGRY

\-

\-

C1

X

CL\_XCO\_TAB\_ENHANCEMENT\_CTGRY\_F

\-

\-

C1

X

CL\_XCO\_TAB\_FKEY\_CARDINALITY

\-

\-

C1

X

CL\_XCO\_TAB\_FKEY\_CARDINALITY\_1

\-

\-

C1

X

CL\_XCO\_TAB\_FKEY\_CARDINALITY\_C

\-

\-

C1

X

CL\_XCO\_TAB\_FKEY\_CARDINALITY\_CN

\-

\-

C1

X

CL\_XCO\_TAB\_FKEY\_CARDINALITY\_F

\-

\-

C1

X

CL\_XCO\_TAB\_FKEY\_CARDINALITY\_N

\-

\-

C1

X

CL\_XCO\_TAB\_FKEY\_FIELD\_TYPE

\-

\-

C1

X

CL\_XCO\_TAB\_FKEY\_FIELD\_TYPE\_F

\-

\-

C1

X

CL\_XCO\_TAB\_FP\_FK\_CHECK\_TABLE

\-

\-

C1

X

CL\_XCO\_TAB\_FP\_FK\_FIELD\_TYPE

\-

\-

C1

X

CL\_XCO\_TEN\_URL\_TYPE

\-

\-

C1

X

X

CL\_XCO\_TR\_KIND

\-

\-

C1

X

CL\_XCO\_TR\_KIND\_F

\-

\-

C1

X

CL\_XCO\_TR\_RESOLUTION

\-

\-

C1

X

CL\_XCO\_TR\_SELECTION\_BUILDER

\-

\-

C1

X

CL\_XCO\_TR\_STATUS

\-

\-

C1

X

CL\_XCO\_TR\_STATUS\_F

\-

\-

C1

X

CL\_XCO\_TR\_TYPE

\-

\-

C1

X

CL\_XCO\_TR\_TYPE\_F

\-

\-

C1

X

CL\_XCO\_TT\_ACCESS

\-

\-

C1

X

CL\_XCO\_TT\_ACCESS\_F

\-

\-

C1

X

CL\_XCO\_TT\_KEY\_ACCESS

\-

\-

C1

X

CL\_XCO\_TT\_KEY\_ACCESS\_F

\-

\-

C1

X

CL\_XCO\_TT\_KEY\_CATEGORY

\-

\-

C1

X

CL\_XCO\_TT\_KEY\_CATEGORY\_F

\-

\-

C1

X

CL\_XCO\_TT\_KEY\_DEFINITION

\-

\-

C1

X

CM\_APJ\_BASE

\-

\-

C1

X

CX\_ABAP\_API\_STATE

\-

\-

C1

X

CX\_ABAP\_AUTH\_CHECK\_EXCEPTION

\-

\-

C1

X

CX\_ABAP\_CONTEXT\_INFO\_ERROR

\-

\-

C1

X

X

CX\_ABAP\_DATFM

\-

\-

C1

X

X

CX\_ABAP\_DATFM\_AMBIGUOUS

\-

\-

C1

X

X

CX\_ABAP\_DATFM\_FORMAT\_UNKNOWN

\-

\-

C1

X

X

CX\_ABAP\_DATFM\_INVALID\_DATE

\-

\-

C1

X

X

CX\_ABAP\_DATFM\_NO\_DATE

\-

\-

C1

X

X

CX\_ABAP\_DECFLOAT\_INVALID\_CHAR

\-

\-

C1

X

X

CX\_ABAP\_DECFLOAT\_PARSE\_ERR

\-

\-

C1

X

X

CX\_ABAP\_DECFLOAT\_PARSE\_FATAL

\-

\-

C1

X

X

CX\_ABAP\_FOREIGN\_LOCK

\-

\-

C1

X

CX\_ABAP\_INT\_INVALID\_CHAR

\-

\-

C1

 

X

CX\_ABAP\_INVALID\_NAME

\-

\-

C1

X

X

CX\_ABAP\_INVALID\_PARAM\_VALUE

\-

\-

C1

 

X

CX\_ABAP\_INVALID\_VALUE

\-

\-

C1

X

X

CX\_ABAP\_LOCK\_FAILURE

\-

\-

C1

X

CX\_ABAP\_MESSAGE\_DIGEST

\-

\-

C1

X

X

CX\_ABAP\_NOT\_AN\_INTEGER

\-

\-

C1

X

X

CX\_ABAP\_NOT\_A\_PROGRAM

\-

\-

C1

X

X

CX\_ABAP\_NOT\_A\_TABLE

\-

\-

C1

X

X

CX\_ABAP\_NOT\_IN\_PACKAGE

\-

\-

C1

X

X

CX\_ABAP\_NOT\_IN\_WHITELIST

\-

\-

C1

X

X

CX\_ABAP\_RANDOM

\-

\-

C1

X

X

CX\_ABAP\_RANGE\_CONV

\-

\-

C1

X

CX\_ABAP\_TIMEFM\_INVALID

\-

\-

C1

X

X

CX\_ABAP\_UTCLONG\_INVALID

\-

\-

C1

X

X

CX\_ACO\_APPLICATION\_EXCEPTION

\-

\-

C1

X

CX\_ACO\_COMMUNICATION\_FAILURE

\-

\-

C1

X

CX\_ACO\_SYSTEM\_FAILURE

\-

\-

C1

X

CX\_AI\_APPLICATION\_FAULT

\-

\-

C1

X

CX\_AI\_SYSTEM\_FAULT

\-

\-

C1

X

CX\_AMDP\_CREATION\_ERROR

\-

\-

C1

X

CX\_AMDP\_DBPROC\_CREATE\_FAILED

\-

\-

C1

X

CX\_AMDP\_EXECUTION\_ERROR

\-

\-

C1

X

CX\_AMDP\_EXECUTION\_FAILED

\-

\-

C1

X

CX\_AMDP\_VERSION\_ERROR

\-

\-

C1

X

CX\_AMDP\_VERSION\_MISMATCH

\-

\-

C1

X

CX\_APJ\_DT\_CONTENT

\-

\-

C1

X

CX\_APJ\_RT

\-

\-

C1

X

CX\_APJ\_RT\_CONTENT

\-

\-

C1

X

CX\_ATD\_EXCEPTION\_CORE

\-

\-

C1

X

CX\_ATD\_PARAM\_NOT\_FOUND

\-

\-

C1

X

CX\_BADI

\-

\-

C1

X

CX\_BADI\_CONTEXT\_ERROR

\-

\-

C1

X

CX\_BADI\_DEPREC\_HANDLE\_CLASS

\-

\-

C1

X

CX\_BADI\_FILTER\_ERROR

\-

\-

C1

X

CX\_BADI\_INITIAL\_CONTEXT

\-

\-

C1

X

CX\_BADI\_INITIAL\_REFERENCE

\-

\-

C1

X

CX\_BADI\_MULTIPLY\_IMPLEMENTED

\-

\-

C1

X

CX\_BADI\_NOT\_IMPLEMENTED

\-

\-

C1

X

CX\_BADI\_NOT\_SINGLE\_USE

\-

\-

C1

X

CX\_BADI\_UNKNOWN\_ERROR

\-

\-

C1

X

CX\_BALI\_INTERNAL\_ERROR

\-

\-

C1

X

CX\_BALI\_INVALID\_PARAMETER

\-

\-

C1

X

CX\_BALI\_NOT\_FOUND

\-

\-

C1

X

CX\_BALI\_NOT\_POSSIBLE

\-

\-

C1

X

CX\_BALI\_OBJECTS

\-

\-

C1

X

CX\_BALI\_RUNTIME

\-

\-

C1

X

CX\_BCFG\_TRANSPORT\_RECORDER

\-

\-

C1

X

CX\_BCFG\_TRANSPORT\_REQUEST

\-

\-

C1

X

CX\_BCS\_MAIL

\-

\-

C1

X

CX\_BLE\_DYNAMIC\_TABLE\_ERROR

\-

\-

C1

 

X

CX\_BLE\_RUNTIME\_ERROR

\-

\-

C1

X

X

CX\_BU\_AUTHORIZATION

\-

\-

C1

X

CX\_CALL\_ST\_ERROR

\-

\-

C1

X

X

CX\_CBO\_RUNTIME\_EXCEPTION

\-

\-

C1

 

X

CX\_CBO\_WRITE\_LOCKED

\-

\-

C1

 

X

CX\_CBO\_WRITE\_NOT\_AUTHORIZED

\-

\-

C1

 

X

CX\_CBO\_WRITE\_NOT\_EXISTING

\-

\-

C1

 

X

CX\_CHDO\_GENERATION\_ERROR

\-

\-

C1

X

CX\_CHDO\_READ\_ERROR

\-

\-

C1

X

CX\_CHDO\_WRITE\_ERROR

\-

\-

C1

X

CX\_CLOSE\_RESOURCE\_ERROR

\-

\-

C1

X

CX\_CMIS\_CONSTRAINT

\-

\-

C1

X

CX\_CMIS\_CONTENT\_ALREADY\_EXISTS

\-

\-

C1

X

CX\_CMIS\_FILTER\_NOT\_VALID

\-

\-

C1

X

CX\_CMIS\_INVALID\_ARGUMENT

\-

\-

C1

X

CX\_CMIS\_NAME\_CONSTRAINT

\-

\-

C1

X

CX\_CMIS\_NOT\_SUPPORTED

\-

\-

C1

X

CX\_CMIS\_OAUTH

\-

\-

C1

X

CX\_CMIS\_OBJECT\_NOT\_FOUND

\-

\-

C1

X

CX\_CMIS\_PERMISSION\_DENIED

\-

\-

C1

X

CX\_CMIS\_ROOT

\-

\-

C1

X

CX\_CMIS\_RUNTIME

\-

\-

C1

X

CX\_CMIS\_STORAGE

\-

\-

C1

X

CX\_CMIS\_STREAM\_NOT\_SUPPORTED

\-

\-

C1

X

CX\_CMIS\_UNAUTHORIZED

\-

\-

C1

X

CX\_CMIS\_UPDATE\_CONFLICT

\-

\-

C1

X

CX\_CMIS\_VERSIONING

\-

\-

C1

X

CX\_CONVERSION\_NO\_DURATION

\-

\-

C1

X

X

CX\_CORR\_DYN\_ERROR

\-

\-

C1

X

X

CX\_CREATE\_MEM\_DUMP\_ERROR

\-

\-

C1

 

X

CX\_CRL\_RUNTIME\_EXCEPTION

\-

\-

C1

 

X

CX\_DYNAMIC\_CHECK

\-

\-

C1

X

X

CX\_EXCHANGE\_RATES

\-

\-

C1

X

CX\_FDT\_CP\_UTILITY\_EXCEPTIONS

\-

\-

C1

X

CX\_FDT\_INPUT

\-

\-

C1

X

X

CX\_FDT\_PROCESSING

\-

\-

C1

X

X

CX\_FDT\_SYSTEM

\-

\-

C1

 

X

CX\_ICU\_OTHER\_ERROR

\-

\-

C1

X

CX\_ICU\_PARSE\_ERROR

\-

\-

C1

X

CX\_INVALID\_TRANSFORMATION

\-

\-

C1

X

X

CX\_KMETH\_ERR

\-

\-

C1

 

X

CX\_LIST\_ALREADY\_ACTIVE

\-

\-

C1

 

X

CX\_LIST\_ERROR

\-

\-

C1

 

X

CX\_LIST\_ERROR\_DOWNLOAD

\-

\-

C1

 

X

CX\_LIST\_ERROR\_EMPTY\_LIST

\-

\-

C1

 

X

CX\_LOB\_SQL\_ERROR

\-

\-

C1

X

CX\_MBC\_API\_EXCEPTION

\-

\-

C1

X

CX\_NO\_CHECK

\-

\-

C1

X

X

CX\_NR\_OBJECT\_NOT\_FOUND

\-

\-

C1

X

CX\_NR\_SUBOBJECT

\-

\-

C1

X

CX\_NUMBER\_RANGES

\-

\-

C1

X

CX\_PARAMETER\_INVALID

\-

\-

C1

X

X

CX\_PARAMETER\_INVALID\_RANGE

\-

\-

C1

X

X

CX\_PARAMETER\_INVALID\_TYPE

\-

\-

C1

X

X

CX\_PROGRAM\_NOT\_FOUND

\-

\-

C1

 

X

CX\_RAP\_QUERY\_FILTER\_NO\_RANGE

\-

\-

C1

X

CX\_RAP\_QUERY\_PROVIDER

\-

\-

C1

X

CX\_RAP\_QUERY\_PROV\_NOT\_IMPL

\-

\-

C1

X

CX\_RAP\_QUERY\_RESPONSE\_SET\_TWIC

\-

\-

C1

X

CX\_REDUNDANCY\_CHECK

\-

\-

C1

 

X

CX\_REFERENCE\_NOT\_SERIALIZABLE

\-

\-

C1

X

X

CX\_RESOURCE\_ALREADY\_CLOSED

\-

\-

C1

X

CX\_RFC\_DEST\_PROVIDER\_ERROR

\-

\-

C1

X

CX\_ROOT

\-

\-

C1

X

X

CX\_SADL\_EXIT

\-

\-

C1

X

CX\_SCAL

\-

\-

C1

X

CX\_STACKOFWP\_INVALID\_WP

\-

\-

C1

 

X

CX\_STACKOFWP\_NOSTACK\_AVAIL

\-

\-

C1

 

X

CX\_STACKOFWP\_NO\_AUTHORITY

\-

\-

C1

 

X

CX\_STACKOFWP\_WP\_NOT\_RUN

\-

\-

C1

 

X

CX\_STATIC\_CHECK

\-

\-

C1

X

X

CX\_STREAM\_ERROR

\-

\-

C1

X

CX\_STREAM\_IO\_EXCEPTION

\-

\-

C1

X

CX\_STREAM\_POSITION\_ERROR

\-

\-

C1

X

CX\_STREAM\_STATE\_ERROR

\-

\-

C1

X

CX\_ST\_CALL\_ERROR

\-

\-

C1

X

X

CX\_ST\_CALL\_METHOD\_ERROR

\-

\-

C1

X

X

CX\_ST\_CONDITION

\-

\-

C1

X

X

CX\_ST\_COND\_CHECK\_FAIL

\-

\-

C1

X

X

CX\_ST\_CONSTRAINT\_ERROR

\-

\-

C1

X

X

CX\_ST\_DESERIALIZATION\_ERROR

\-

\-

C1

X

X

CX\_ST\_DYNAMIC\_CALL\_ST\_ERROR

\-

\-

C1

X

CX\_ST\_ERROR

\-

\-

C1

X

X

CX\_ST\_FORMAT\_ERROR

\-

\-

C1

X

X

CX\_ST\_GROUP\_MISSING\_CASE

\-

\-

C1

X

X

CX\_ST\_INVALID\_XML

\-

\-

C1

X

X

CX\_ST\_MATCH

\-

\-

C1

X

X

CX\_ST\_MATCH\_ATTRIBUTE

\-

\-

C1

X

X

CX\_ST\_MATCH\_ELEMENT

\-

\-

C1

X

X

CX\_ST\_MATCH\_NAMED

\-

\-

C1

X

X

CX\_ST\_MATCH\_TEXT

\-

\-

C1

X

X

CX\_ST\_MATCH\_TYPE

\-

\-

C1

X

X

CX\_ST\_REF\_ACCESS

\-

\-

C1

X

X

CX\_ST\_RUNTIME\_ERROR

\-

\-

C1

X

X

CX\_ST\_SERIALIZATION\_ERROR

\-

\-

C1

X

X

CX\_ST\_SWITCH\_NO\_CASE

\-

\-

C1

X

X

CX\_ST\_VALIDATION\_ERROR

\-

\-

C1

X

X

CX\_SWF\_CPWF\_API

\-

\-

C1

X

CX\_SWF\_CPWF\_CALLBACK

\-

\-

C1

X

CX\_SXML\_ILLEGAL\_ARGUMENT\_ERROR

\-

\-

C1

X

CX\_SXML\_INTERNAL\_ERROR

\-

\-

C1

X

CX\_SXML\_NAME\_ERROR

\-

\-

C1

X

CX\_SXML\_PARSE\_ERROR

\-

\-

C1

X

CX\_SXML\_STATE\_ERROR

\-

\-

C1

X

CX\_SY\_ARG\_OUT\_OF\_DOMAIN

\-

\-

C1

X

X

CX\_SY\_ARITHMETIC\_ERROR

\-

\-

C1

X

X

CX\_SY\_ARITHMETIC\_OVERFLOW

\-

\-

C1

X

X

CX\_SY\_ASSIGN\_CAST\_ERROR

\-

\-

C1

X

X

CX\_SY\_ASSIGN\_CAST\_ILLEGAL\_CAST

\-

\-

C1

X

X

CX\_SY\_ASSIGN\_CAST\_UNKNOWN\_TYPE

\-

\-

C1

X

X

CX\_SY\_ASSIGN\_ERROR

\-

\-

C1

X

X

CX\_SY\_ASSIGN\_OUT\_OF\_RANGE

\-

\-

C1

X

X

CX\_SY\_BUFFER\_OVERFLOW

\-

\-

C1

X

X

CX\_SY\_CODEPAGE\_CONVERTER\_INIT

\-

\-

C1

X

X

CX\_SY\_COMPRESSION\_ERROR

\-

\-

C1

X

X

CX\_SY\_CONVERSION\_CODEPAGE

\-

\-

C1

X

X

CX\_SY\_CONVERSION\_CODEPAGE\_EX

\-

\-

C1

X

X

CX\_SY\_CONVERSION\_DATA\_LOSS

\-

\-

C1

X

X

CX\_SY\_CONVERSION\_ERROR

\-

\-

C1

X

X

CX\_SY\_CONVERSION\_EXACT\_NOT\_SUP

\-

\-

C1

X

X

CX\_SY\_CONVERSION\_INEXACT\_FLTP

\-

\-

C1

X

X

CX\_SY\_CONVERSION\_LOST\_DECIMALS

\-

\-

C1

X

X

CX\_SY\_CONVERSION\_NOT\_SUPPORTED

\-

\-

C1

X

X

CX\_SY\_CONVERSION\_NO\_BOOLEAN

\-

\-

C1

X

X

CX\_SY\_CONVERSION\_NO\_DATE

\-

\-

C1

X

X

CX\_SY\_CONVERSION\_NO\_DATE\_TIME

\-

\-

C1

X

X

CX\_SY\_CONVERSION\_NO\_ENUM\_VALUE

\-

\-

C1

X

X

CX\_SY\_CONVERSION\_NO\_NUMBER

\-

\-

C1

X

X

CX\_SY\_CONVERSION\_NO\_QNAME

\-

\-

C1

X

X

CX\_SY\_CONVERSION\_NO\_RAW

\-

\-

C1

X

X

CX\_SY\_CONVERSION\_NO\_TIME

\-

\-

C1

X

X

CX\_SY\_CONVERSION\_NO\_UUID

\-

\-

C1

X

X

CX\_SY\_CONVERSION\_OVERFLOW

\-

\-

C1

X

X

CX\_SY\_CONVERSION\_ROUNDING

\-

\-

C1

X

X

CX\_SY\_CONVERSION\_SRC\_TOO\_SHORT

\-

\-

C1

X

X

CX\_SY\_CONVERSION\_UNKNOWN\_CURR

\-

\-

C1

X

X

CX\_SY\_CONVERSION\_UNKNOWN\_LANGU

\-

\-

C1

X

X

CX\_SY\_CONVERSION\_UNKNOWN\_UNIT

\-

\-

C1

X

X

CX\_SY\_CREATE\_DATA\_ERROR

\-

\-

C1

X

X

CX\_SY\_CREATE\_ERROR

\-

\-

C1

X

X

CX\_SY\_CREATE\_OBJECT\_ERROR

\-

\-

C1

X

X

CX\_SY\_DATA\_ACCESS\_ERROR

\-

\-

C1

X

X

CX\_SY\_DYNAMIC\_OSQL\_ERROR

\-

\-

C1

X

X

CX\_SY\_DYNAMIC\_OSQL\_SEMANTICS

\-

\-

C1

X

X

CX\_SY\_DYNAMIC\_OSQL\_SYNTAX

\-

\-

C1

X

X

CX\_SY\_DYN\_CALL\_ERROR

\-

\-

C1

X

X

CX\_SY\_DYN\_CALL\_EXCP\_NOT\_FOUND

\-

\-

C1

X

X

CX\_SY\_DYN\_CALL\_ILLEGAL\_CLASS

\-

\-

C1

X

X

CX\_SY\_DYN\_CALL\_ILLEGAL\_FUNC

\-

\-

C1

X

X

CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD

\-

\-

C1

X

X

CX\_SY\_DYN\_CALL\_ILLEGAL\_TYPE

\-

\-

C1

X

X

CX\_SY\_DYN\_CALL\_PARAMETER\_CONV

\-

\-

C1

X

X

CX\_SY\_DYN\_CALL\_PARAMETER\_ERROR

\-

\-

C1

X

X

CX\_SY\_DYN\_CALL\_PARAM\_MISSING

\-

\-

C1

X

X

CX\_SY\_DYN\_CALL\_PARAM\_NOT\_FOUND

\-

\-

C1

X

X

CX\_SY\_DYN\_TABLE\_ERROR

\-

\-

C1

X

X

CX\_SY\_DYN\_TABLE\_ILL\_COMP\_VAL

\-

\-

C1

X

X

CX\_SY\_DYN\_TABLE\_ILL\_LINE\_TYPE

\-

\-

C1

X

X

CX\_SY\_ENUM\_CREATION

\-

\-

C1

X

CX\_SY\_FIND\_INFINITE\_LOOP

\-

\-

C1

X

X

CX\_SY\_ILLEGAL\_HANDLER

\-

\-

C1

X

X

CX\_SY\_IMPORT\_FORMAT\_ERROR

\-

\-

C1

X

X

CX\_SY\_IMPORT\_MISMATCH\_ERROR

\-

\-

C1

X

X

CX\_SY\_INVALID\_REGEX

\-

\-

C1

X

X

CX\_SY\_INVALID\_REGEX\_FORMAT

\-

\-

C1

X

X

CX\_SY\_INVALID\_REGEX\_OPERATION

\-

\-

C1

X

X

CX\_SY\_INVALID\_SUBMATCH

\-

\-

C1

X

X

CX\_SY\_ITAB\_DUPLICATE\_KEY

\-

\-

C1

X

X

CX\_SY\_ITAB\_DYN\_LOOP

\-

\-

C1

X

X

CX\_SY\_ITAB\_ERROR

\-

\-

C1

X

X

CX\_SY\_ITAB\_LINE\_NOT\_FOUND

\-

\-

C1

X

X

CX\_SY\_MATCHER

\-

\-

C1

X

X

CX\_SY\_MESSAGE\_ILLEGAL\_TEXT

\-

\-

C1

X

X

CX\_SY\_MISSING\_OUTBUF

\-

\-

C1

X

X

CX\_SY\_MOVE\_CAST\_ERROR

\-

\-

C1

X

X

CX\_SY\_NO\_CURRENT\_MATCH

\-

\-

C1

X

X

CX\_SY\_NO\_HANDLER

\-

\-

C1

X

X

CX\_SY\_NO\_REFERENCE

\-

\-

C1

X

X

CX\_SY\_OFFSET\_NOT\_ALLOWED

\-

\-

C1

X

X

CX\_SY\_OPEN\_SQL\_DATA\_ERROR

\-

\-

C1

X

CX\_SY\_OPEN\_SQL\_DB

\-

\-

C1

X

X

CX\_SY\_OPEN\_SQL\_ERROR

\-

\-

C1

X

X

CX\_SY\_OPERATION\_FAILURE

\-

\-

C1

X

X

CX\_SY\_PRECISION\_LOSS

\-

\-

C1

X

X

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

\-

\-

C1

X

X

CX\_SY\_REF\_CREATION

\-

\-

C1

X

CX\_SY\_REF\_IS\_INITIAL

\-

\-

C1

X

X

CX\_SY\_REF\_NOT\_SUPPORTED

\-

\-

C1

X

X

CX\_SY\_REGEX

\-

\-

C1

X

X

CX\_SY\_REGEX\_LOCALE\_MISMATCH

\-

\-

C1

X

X

CX\_SY\_REGEX\_TOO\_COMPLEX

\-

\-

C1

X

X

CX\_SY\_REPLACE\_INFINITE\_LOOP

\-

\-

C1

X

X

CX\_SY\_RTTI\_NO\_CHECK

\-

\-

C1

X

CX\_SY\_RTTI\_SYNTAX\_ERROR

\-

\-

C1

X

CX\_SY\_RTTI\_TYPE\_NOT\_RELEASED

\-

\-

C1

X

CX\_SY\_SERIALIZABLE\_OBJECT

\-

\-

C1

X

X

CX\_SY\_SQL\_ERROR

\-

\-

C1

X

X

CX\_SY\_SQL\_REDIRECT\_ERROR

\-

\-

C1

X

CX\_SY\_SQL\_REPLACEMENT\_ERROR

\-

\-

C1

X

CX\_SY\_SQL\_SHARING\_ERROR

\-

\-

C1

X

CX\_SY\_SQL\_UNSUPPORTED\_FEATURE

\-

\-

C1

X

X

CX\_SY\_STRG\_FORMAT

\-

\-

C1

X

X

CX\_SY\_STRG\_PAR\_VAL

\-

\-

C1

X

X

CX\_SY\_STRUCT\_ATTRIBUTES

\-

\-

C1

X

CX\_SY\_STRUCT\_COMP\_NAME

\-

\-

C1

X

CX\_SY\_STRUCT\_COMP\_TYPE

\-

\-

C1

X

CX\_SY\_STRUCT\_CREATION

\-

\-

C1

X

CX\_SY\_STRUCT\_SUFFIX\_NAME

\-

\-

C1

X

CX\_SY\_TABLE\_ATTRIBUTES

\-

\-

C1

X

X

CX\_SY\_TABLE\_CREATION

\-

\-

C1

X

CX\_SY\_TABLE\_KEY\_SPECIFICATION

\-

\-

C1

X

X

CX\_SY\_TABLE\_LINE\_TYPE

\-

\-

C1

X

CX\_SY\_TAB\_RANGE\_OUT\_OF\_BOUNDS

\-

\-

C1

X

X

CX\_SY\_TRANS\_OPTION\_ERROR

\-

\-

C1

X

X

CX\_SY\_TYPE\_CREATION

\-

\-

C1

X

CX\_SY\_TYPE\_NOT\_EXACT

\-

\-

C1

X

X

CX\_SY\_TYPE\_NOT\_RELEASED

\-

\-

C1

X

CX\_SY\_UNKNOWN\_CURRENCY

\-

\-

C1

X

X

CX\_SY\_UNKNOWN\_TYPE

\-

\-

C1

X

CX\_SY\_UNSUPPORTED\_FUNCTION

\-

\-

C1

X

X

CX\_SY\_ZERODIVIDE

\-

\-

C1

X

X

CX\_TRANSFORMATION\_ERROR

\-

\-

C1

X

X

CX\_TSTMP\_INTERNAL\_ERROR

\-

\-

C1

X

X

CX\_UOM\_ERROR

\-

\-

C1

X

CX\_UUID\_ERROR

\-

\-

C1

X

X

CX\_WEB\_HTTP\_CONVERSION\_FAILED

\-

\-

C1

X

CX\_WEB\_MESSAGE\_ERROR

\-

\-

C1

X

CX\_XCO\_AR\_EXISTENCE\_EXCEPTION

\-

\-

C1

X

CX\_XCO\_GEN\_DELETE\_EXCEPTION

\-

\-

C1

X

CX\_XCO\_GEN\_PATCH\_EXCEPTION

\-

\-

C1

X

CX\_XCO\_GEN\_POST\_EXCEPTION

\-

\-

C1

X

CX\_XCO\_GEN\_PUT\_EXCEPTION

\-

\-

C1

X

CX\_XCO\_LOCK\_EXCEPTION

\-

\-

C1

X

CX\_XCO\_RUNTIME\_EXCEPTION

\-

\-

C1

X

CX\_XSDANY\_ERROR

\-

\-

C1

X

CX\_XSDANY\_NAMESPACE\_ERROR

\-

\-

C1

X

CX\_XSDANY\_PARSE\_ERROR

\-

\-

C1

X

CX\_XSDANY\_PREFIX\_CONFLICT

\-

\-

C1

X

CX\_XSLT\_ABAP\_CALL\_ERROR

\-

\-

C1

X

X

CX\_XSLT\_CALL\_ERROR

\-

\-

C1

X

CX\_XSLT\_DESERIALIZATION\_ERROR

\-

\-

C1

X

X

CX\_XSLT\_EXCEPTION

\-

\-

C1

X

CX\_XSLT\_FORMAT\_ERROR

\-

\-

C1

X

X

CX\_XSLT\_ID\_HREF\_ERROR

\-

\-

C1

X

X

CX\_XSLT\_INVALID\_XML

\-

\-

C1

X

X

CX\_XSLT\_RUNTIME\_ERROR

\-

\-

C1

X

CX\_XSLT\_SERIALIZATION\_ERROR

\-

\-

C1

X

X

CX\_XSLT\_SYSTEM\_ERROR

\-

\-

C1

X

X

MBC\_CP\_API

\-

\-

C1

X

XCO\_CP

\-

\-

C1

X

XCO\_CP\_ABAP

\-

\-

C1

X

XCO\_CP\_ABAP\_DICTIONARY

\-

\-

C1

X

XCO\_CP\_ABAP\_OBJECTS

\-

\-

C1

X

XCO\_CP\_ABAP\_REPOSITORY

\-

\-

C1

X

XCO\_CP\_ABAP\_SQL

\-

\-

C1

X

XCO\_CP\_AMDP

\-

\-

C1

X

XCO\_CP\_APPLICATION\_LOG\_OBJECT

\-

\-

C1

X

XCO\_CP\_ARS

\-

\-

C1

X

XCO\_CP\_BAL

\-

\-

C1

X

XCO\_CP\_BEHAVIOR\_DEFINITION

\-

\-

C1

X

XCO\_CP\_BEHAVIOR\_IMPLEMENTATION

\-

\-

C1

X

XCO\_CP\_BINARY

\-

\-

C1

X

XCO\_CP\_BUSINESS\_CNFGRTN\_OBJECT

\-

\-

C1

X

XCO\_CP\_CDS

\-

\-

C1

X

XCO\_CP\_CDS\_ANNOTATION

\-

\-

C1

X

XCO\_CP\_CTS

\-

\-

C1

X

XCO\_CP\_DATABASE\_TABLE

\-

\-

C1

X

XCO\_CP\_DATA\_DEFINITION

\-

\-

C1

X

XCO\_CP\_DATA\_ELEMENT

\-

\-

C1

X

XCO\_CP\_DCL

\-

\-

C1

X

XCO\_CP\_DDL

\-

\-

C1

X

XCO\_CP\_DOMAIN

\-

\-

C1

X

XCO\_CP\_GENERATION

\-

\-

C1

X

XCO\_CP\_GENERATION\_DOMA

\-

\-

C1

X

XCO\_CP\_GENERATION\_DTEL

\-

\-

C1

X

XCO\_CP\_GENERATION\_TABL

\-

\-

C1

X

XCO\_CP\_GENERATION\_TTYP

\-

\-

C1

X

XCO\_CP\_I18N

\-

\-

C1

X

XCO\_CP\_JSON

\-

\-

C1

X

XCO\_CP\_LANGUAGE

\-

\-

C1

X

XCO\_CP\_MESSAGE

\-

\-

C1

X

XCO\_CP\_MESSAGE\_CLASS

\-

\-

C1

X

XCO\_CP\_METADATA\_EXTENSION

\-

\-

C1

X

XCO\_CP\_NAME

\-

\-

C1

X

XCO\_CP\_PACKAGE

\-

\-

C1

X

XCO\_CP\_REGULAR\_EXPRESSION

\-

\-

C1

X

XCO\_CP\_SERVICE\_BINDING

\-

\-

C1

X

XCO\_CP\_SOFTWARE\_COMPONENT

\-

\-

C1

X

XCO\_CP\_STRING

\-

\-

C1

X

XCO\_CP\_SYSTEM

\-

\-

C1

X

XCO\_CP\_TABLE

\-

\-

C1

X

XCO\_CP\_TABLE\_TYPE

\-

\-

C1

X

XCO\_CP\_TENANT

\-

\-

C1

X

XCO\_CP\_TIME

\-

\-

C1

X

XCO\_CP\_TRANSPORT

\-

\-

C1

X

XCO\_CP\_UUID

\-

\-

C1

X

XCO\_KU

\-

\-

C1

 

X

XCO\_KU\_BINARY

\-

\-

C1

 

X

XCO\_KU\_JSON

\-

\-

C1

 

X

XCO\_KU\_REGULAR\_EXPRESSION

\-

\-

C1

 

X

XCO\_KU\_STRING

\-

\-

C1

 

X

XCO\_KU\_TENANT

\-

\-

C1

 

X

XCO\_KU\_TIME

\-

\-

C1

 

X

XCO\_KU\_UUID

\-

\-

C1

 

X

DDLS - Data Definition Language Source

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

A\_BANK\_2

\-

\-

C2

 

A\_BPGENDERVALUEHELP

\-

\-

C2

 

A\_BPGENDERVALUEHELPTEXT

\-

\-

C2

 

A\_BUSINESSPARTNERGENDER

\-

\-

C2

 

A\_BUSINESSPARTNERGENDERTEXT

\-

\-

C2

 

A\_CITYCODE

\-

\-

C2

 

A\_CITYCODETEXT

\-

\-

C2

 

C\_GREGORIANCALDATEFUNCVH

\-

\-

C1

X

X

C\_GREGORIANCALSGLDATEFUNCVH

\-

\-

C1

X

X

C\_PCF\_CODEVALUEHELP

\-

\-

C1

X

X

DDCDS\_CUSTOMER\_DOMAIN\_VALUE

\-

\-

C1

X

DDCDS\_CUSTOMER\_DOMAIN\_VALUE\_T

\-

\-

C1

X

D\_SELECTCUSTOMIZINGTRANSPTREQP

\-

\-

C1

X

I\_APISFORCLOUDDEVELOPMENT

\-

\-

C1

X

I\_BANK\_2

\-

\-

C1

X

X

I\_BPCOMPANYRELATIONSHIP

\-

\-

C1

 

X

I\_BPCOMPANYRELATIONSHIPTEXT

\-

\-

C1

 

X

I\_BPCOMPANYRELATIONSHIPVH

\-

\-

C1

 

X

I\_BPCRDTSTANDINGSTATUSTEXT

\-

\-

C1

 

X

I\_BPCRDTWRTHNSSRATINGTEXT

\-

\-

C1

 

X

I\_BPCREDITRATINGAGENCY

\-

\-

C1

 

X

I\_BPCREDITRATINGAGENCYTEXT

\-

\-

C1

 

X

I\_BPCREDITSTANDING

\-

\-

C1

 

X

I\_BPCREDITSTANDINGSTATUS

\-

\-

C1

 

X

I\_BPCREDITSTANDINGTEXT

\-

\-

C1

 

X

I\_BPCREDITWORTHINESS

\-

\-

C1

 

X

I\_BPCREDITWORTHINESSRATING

\-

\-

C1

 

X

I\_BPEMPLOYMENT

\-

\-

C1

 

X

I\_BPEMPLOYMENTINDUSTRY

\-

\-

C1

 

X

I\_BPEMPLOYMENTINDUSTRYTEXT

\-

\-

C1

 

X

I\_BPEMPLOYMENTSTATUS

\-

\-

C1

 

X

I\_BPEMPLOYMENTSTATUSTEXT

\-

\-

C1

 

X

I\_BPFINANCIALSERVICESEXTN

\-

\-

C1

 

X

I\_BPGENDERVALUEHELP

\-

\-

C1

 

X

I\_BPGENDERVALUEHELPTEXT

\-

\-

C1

 

X

I\_BPLEGALPROCEEDINGSTATUS

\-

\-

C1

 

X

I\_BPLEGALPROCEEDINGSTSTEXT

\-

\-

C1

 

X

I\_BPLETTERSALUTATION

\-

\-

C1

 

X

I\_BPLETTERSALUTATIONTEXT

\-

\-

C1

 

X

I\_BPOCCUPATIONGROUP

\-

\-

C1

 

X

I\_BPOCCUPATIONGROUPTEXT

\-

\-

C1

 

X

I\_BPRATGPROCEDUREGRADETEXT

\-

\-

C1

 

X

I\_BPRATINGPROCEDURE

\-

\-

C1

 

X

I\_BPRATINGPROCEDUREGRADE

\-

\-

C1

 

X

I\_BPRATINGPROCEDUREGRADEVH

\-

\-

C1

 

X

I\_BPRATINGPROCEDURETEXT

\-

\-

C1

 

X

I\_BPRATINGPROCEDUREVH

\-

\-

C1

 

X

I\_BPRATINGTREND

\-

\-

C1

 

X

I\_BPRATINGTRENDTEXT

\-

\-

C1

 

X

I\_BPRATINGTRENDVH

\-

\-

C1

 

X

I\_BPRELATIONSHIP

\-

\-

C1

 

X

I\_BPUSREXTERNALID

\-

\-

C1

X

X

I\_BPUSRROLE

\-

\-

C1

X

X

I\_BUPAIDENTIFICATION

\-

\-

C1

 

X

I\_BUSINESSPARTNER

\-

\-

C1

X

X

I\_BUSINESSPARTNERRATING

\-

\-

C1

 

X

I\_BUSINESSPARTNERROLE

\-

\-

C1

 

X

I\_BUSINESSPARTNERROLETEXT

\-

\-

C1

 

X

I\_BUSINESSPARTNERTAXNUMBER

\-

\-

C1

X

X

I\_BUSINESSPARTNERVH

\-

\-

C1

 

X

I\_BUSINESSUSERBASIC

\-

\-

C1

X

X

I\_BUSINESSUSERVH

\-

\-

C1

X

X

I\_BUSPARTADDRDEPDNTTAXNMBR

\-

\-

C1

X

X

I\_CALENDARDATE

\-

\-

C1

X

X

I\_CALENDARMONTH

\-

\-

C1

X

X

I\_CALENDARMONTHTEXT

\-

\-

C1

X

X

I\_CALENDARQUARTER

\-

\-

C1

X

X

I\_CALENDARQUARTERTEXT

\-

\-

C1

X

X

I\_CALENDARYEAR

\-

\-

C1

X

X

I\_CASEATTRIBUTE

\-

\-

C1

 

X

I\_CASEATTRIBUTEPROFILE

\-

\-

C1

 

X

I\_CASEATTRIBUTEPROFILETEXT

\-

\-

C1

 

X

I\_CASEAUTHORIZATIONLEVEL

\-

\-

C1

 

X

I\_CASEAUTHORIZATIONLEVELTEXT

\-

\-

C1

 

X

I\_CASECATEGORY

\-

\-

C1

 

X

I\_CASECATEGORYTEXT

\-

\-

C1

 

X

I\_CASEENTITY

\-

\-

C1

 

X

I\_CASEESCALATIONREASON

\-

\-

C1

 

X

I\_CASEESCALATIONREASONTEXT

\-

\-

C1

 

X

I\_CASEFUNCTIONPROFILE

\-

\-

C1

 

X

I\_CASEFUNCTIONPROFILETEXT

\-

\-

C1

 

X

I\_CASEINDIVIDUALSTATUS

\-

\-

C1

 

X

I\_CASEINDIVIDUALSTATUSTEXT

\-

\-

C1

 

X

I\_CASEPRIORITY

\-

\-

C1

 

X

I\_CASEPRIORITYTEXT

\-

\-

C1

 

X

I\_CASEPROCESS

\-

\-

C1

 

X

I\_CASEPROCESSTEXT

\-

\-

C1

 

X

I\_CASEREASONS

\-

\-

C1

 

X

I\_CASEREASONSTEXT

\-

\-

C1

 

X

I\_CASESTATUSPROFILE

\-

\-

C1

 

X

I\_CASESTATUSPROFILETEXT

\-

\-

C1

 

X

I\_CASESYSTEMSTATUS

\-

\-

C2

 

I\_CASESYSTEMSTATUSTEXT

\-

\-

C1

 

X

I\_CASETERMINOLOGYPROFILE

\-

\-

C1

 

X

I\_CASETERMINOLOGYPROFILETEXT

\-

\-

C1

 

X

I\_CASETEXTPROFILE

\-

\-

C1

 

X

I\_CASETEXTPROFILETEXT

\-

\-

C1

 

X

I\_CASETYPES

\-

\-

C1

 

X

I\_CASETYPESTEXT

\-

\-

C1

 

X

I\_CITYCODE

\-

\-

C1

 

X

I\_CITYCODETEXT

\-

\-

C1

 

X

I\_CONFIGNDEPRECATIONCODE

\-

\-

C1

X

X

I\_CONFIGNDEPRECATIONCODETEXT

\-

\-

C1

X

X

I\_COUNTRY

\-

\-

C1

X

X

I\_COUNTRYTEXT

\-

\-

C1

X

X

I\_COUNTRYVH

\-

\-

C1

 

X

I\_CURRENCY

\-

\-

C1

X

X

I\_CURRENCYSTDVH

\-

\-

C1

X

X

I\_CURRENCYTEXT

\-

\-

C1

X

X

I\_CUSTABAPOBJDIRECTORYENTRY

\-

\-

C1

X

I\_CUSTABAPPACKAGE

\-

\-

C1

X

I\_DATAEXTRACTIONENABLEDVIEW

\-

\-

C1

 

X

I\_DAYLIGHTSAVINGRULE

\-

\-

C1

X

X

I\_DAYLIGHTSAVINGRULETEXT

\-

\-

C1

X

X

I\_EXCHANGERATEFACTORSRAWDATA

\-

\-

C1

X

X

I\_EXCHANGERATERAWDATA

\-

\-

C1

X

X

I\_EXCHANGERATESPREADRAWDATA

\-

\-

C1

X

X

I\_EXCHANGERATETYPE

\-

\-

C1

X

X

I\_EXCHANGERATETYPETEXT

\-

\-

C1

X

X

I\_EXCHRATEQTANTYPERAWDATA

\-

\-

C1

X

X

I\_FISCALCALENDARDATE

\-

\-

C1

X

X

I\_FISCALDATEFUNCTION

\-

\-

C1

 

X

I\_FISCALDATEFUNCTIONTEXT

\-

\-

C1

 

X

I\_FISCALDATEFUNCTIONVALUE

\-

\-

C1

 

X

I\_FISCALPERIODFORVARIANT

\-

\-

C1

X

X

I\_FISCALPERIODRAWDATA

\-

\-

C1

X

X

I\_FISCALPERIODTEXT

\-

\-

C1

X

X

I\_FISCALPERIODTEXTRAWDATA

\-

\-

C1

X

X

I\_FISCALQUARTERFORVARIANT

\-

\-

C1

X

X

I\_FISCALWEEK

\-

\-

C1

X

X

I\_FISCALWEEKFORVARIANT

\-

\-

C1

X

X

I\_FISCALYEAR

\-

\-

C1

X

X

I\_FISCALYEARFORVARIANT

\-

\-

C1

X

X

I\_FISCALYEARPERIOD

\-

\-

C1

X

X

I\_FISCALYEARPERIODFORVARIANT

\-

\-

C1

X

X

I\_FISCALYEARPERIODTEXT

\-

\-

C1

X

X

I\_FISCALYEARQUARTER

\-

\-

C1

X

X

I\_FISCALYEARQUARTERFORVARIANT

\-

\-

C1

X

X

I\_FISCALYEARVARIANT

\-

\-

C1

X

X

I\_FISCALYEARVARIANTTEXT

\-

\-

C1

X

X

I\_FISCALYEARWEEK

\-

\-

C1

X

X

I\_FISCALYEARWEEKFORVARIANT

\-

\-

C1

X

X

I\_FORMOFADDRESS

\-

\-

C1

X

X

I\_FORMOFADDRESSTEXT

\-

\-

C1

X

X

I\_ILMDATAPRIVACYNOTIFICATION

\-

\-

C1

 

X

I\_LANGUAGE

\-

\-

C1

X

X

I\_LANGUAGETEXT

\-

\-

C1

X

X

I\_PAI\_DEMOSALES\_APPLY

\-

\-

C1

 

X

I\_PAI\_DEMOSALES\_TRAIN

\-

\-

C1

 

X

I\_PAI\_EPM\_POI\_DEMO\_1

\-

\-

C1

 

X

I\_REGION

\-

\-

C1

X

X

I\_REGIONTEXT

\-

\-

C1

X

X

I\_RSANA\_UMM2\_DEMO

\-

\-

C1

 

X

I\_RSANA\_UMM2\_DEMO\_APPLY\_CLASIF

\-

\-

C1

 

X

I\_SGLGREGORIANCALDATEFUNCTION

\-

\-

C1

X

X

I\_SHIFTEDCALENDARDATE

\-

\-

C1

X

X

I\_SHORTENEDFISCALYEAR

\-

\-

C1

X

X

I\_SYSTEMUSER

\-

\-

C1

X

X

I\_TIMEZONE

\-

\-

C1

X

X

I\_TIMEZONERULE

\-

\-

C1

X

X

I\_TIMEZONERULETEXT

\-

\-

C1

X

X

I\_TIMEZONETEXT

\-

\-

C1

X

X

I\_UNITOFMEASURE

\-

\-

C1

X

X

I\_UNITOFMEASURECOMMERCIALNAME

\-

\-

C1

X

X

I\_UNITOFMEASUREDIMENSION

\-

\-

C1

X

X

I\_UNITOFMEASUREDIMENSIONTEXT

\-

\-

C1

X

X

I\_UNITOFMEASUREISOCODE

\-

\-

C1

X

X

I\_UNITOFMEASUREISOCODETEXT

\-

\-

C1

X

X

I\_UNITOFMEASURESTDVH

\-

\-

C1

X

X

I\_UNITOFMEASURETECHNICALNAME

\-

\-

C1

X

X

I\_UNITOFMEASURETEXT

\-

\-

C1

X

X

I\_USER

\-

\-

C1

X

X

I\_WEEKDAY

\-

\-

C1

X

X

I\_WEEKDAYTEXT

\-

\-

C1

X

X

I\_WORKFLOWAGENTRULE

\-

\-

C1

 

X

I\_WORKFLOWAGENTRULETEXT

\-

\-

C1

 

X

I\_WORKFLOWEXTERNALSTATUS

\-

\-

C1

 

X

I\_WORKFLOWEXTERNALSTATUSTEXT

\-

\-

C1

 

X

I\_WORKFLOWLEAVEREQUEST

\-

\-

C1

 

X

I\_WORKFLOWRECIPIENTS

\-

\-

C1

 

X

I\_WORKFLOWSCENARIODEFINITION

\-

\-

C1

 

X

I\_WORKFLOWSCENARIODEFTEXT

\-

\-

C1

 

X

I\_WORKFLOWSCENARIORESULT

\-

\-

C1

 

X

I\_WORKFLOWSCENARIORESULTTEXT

\-

\-

C1

 

X

I\_WORKFLOWSTATUSDETAILS

\-

\-

C1

 

X

I\_WORKFLOWSTATUSOVERVIEW

\-

\-

C1

 

X

I\_WORKFLOWSTEPRESULT

\-

\-

C1

 

X

I\_WORKFLOWSTEPRESULTTEXT

\-

\-

C1

 

X

I\_WORKFLOWSTEPTYPE

\-

\-

C1

 

X

I\_WORKFLOWSTEPTYPETEXT

\-

\-

C1

 

X

I\_WORKFLOWTASKEXTERNALSTATTEXT

\-

\-

C1

 

X

I\_WORKFLOWTASKEXTERNALSTATUS

\-

\-

C1

 

X

I\_WORKPLACEADDRESS

\-

\-

C1

X

X

I\_YEARMONTH

\-

\-

C1

X

X

RIS\_SEARCH\_RELEASED\_OBJECTS

\-

\-

C1

 

X

SPAK\_CLS\_DDL\_TEST\_VIEW

\-

\-

C1

 

X

DOMA - Domain

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

/AIF/IFNAME

\-

\-

C1

 

X

/AIF/IFVERSION

\-

\-

C1

 

X

/AIF/NS

\-

\-

C1

 

X

ABAPVRS

\-

\-

C1

 

X

ABAP\_BOOLEAN

\-

\-

C1

X

X

ABAP\_MSIZE

\-

\-

C1

 

X

ACTIV\_AUTH

\-

\-

C1

X

ALIAS\_TYPE

\-

\-

C1

X

ALS\_TYPE\_RULE

\-

\-

C1

X

ALS\_TYPE\_VALIDATION

\-

\-

C1

X

AUART

\-

\-

C1

 

X

BANK\_ALIAS

\-

\-

C1

X

BAPIFLAG

\-

\-

C1

X

X

BEGRU

\-

\-

C1

X

BSTKD

\-

\-

C1

 

X

CHAR01

\-

\-

C1

X

X

CHAR1

\-

\-

C1

X

X

CHAR30

\-

\-

C1

X

X

CHARG

\-

\-

C1

 

X

DATUM

\-

\-

C1

 

X

DDOPTION

\-

\-

C1

X

DDSIGN

\-

\-

C1

X

DUMMY

\-

\-

C1

 

X

ELOEK

\-

\-

C1

 

X

FAKSP

\-

\-

C1

 

X

FIS\_GJAHR\_NO\_CONV

\-

\-

C1

X

X

ISOCD

\-

\-

C1

X

ISOCD\_UNIT

\-

\-

C1

X

KUNNR

\-

\-

C1

 

X

LGORT

\-

\-

C1

 

X

LIFSP

\-

\-

C1

 

X

MATKL

\-

\-

C1

 

X

MATNR

\-

\-

C1

 

X

MEINS

\-

\-

C1

X

X

MENG15

\-

\-

C1

 

X

PAYMENT\_SYSTEM

\-

\-

C1

X

POSNR

\-

\-

C1

 

X

PROGNAME

\-

\-

C1

 

X

PSTYV

\-

\-

C1

 

X

REGEX\_STANDARD

\-

\-

C1

X

X

SAP\_BOOL

\-

\-

C1

 

X

SERNR

\-

\-

C1

 

X

SNAP\_INST\_ID

\-

\-

C1

 

X

SPART

\-

\-

C1

 

X

SPRAS

\-

\-

C1

X

STATV

\-

\-

C1

 

X

SWF\_PBL\_ID\_FIELD

\-

\-

C1

 

X

SWF\_PBL\_SAP\_OBJECT\_TYPE

\-

\-

C1

 

X

SXSDDURATION\_SIGN

\-

\-

C1

 

X

SYCHAR12K

\-

\-

C1

 

X

TEXT220

\-

\-

C1

 

X

TEXT40

\-

\-

C1

X

X

USNAM

\-

\-

C1

 

X

UTF8STR\_ND

\-

\-

C1

 

X

UTF8STR\_XD

\-

\-

C1

 

X

VBELN

\-

\-

C1

 

X

VKBUR

\-

\-

C1

 

X

VKGRP

\-

\-

C1

 

X

VKORG

\-

\-

C1

 

X

VSBED

\-

\-

C1

 

X

VTWEG

\-

\-

C1

 

X

WAERS

\-

\-

C1

X

X

WERKS

\-

\-

C1

 

X

WERTV8

\-

\-

C1

 

X

XFELD

\-

\-

C1

 

X

XSDANY

\-

\-

C1

X

XSDBOOLEAN

\-

\-

C1

X

X

XSDCURRCODE

\-

\-

C1

X

XSDDATETIME\_ISO

\-

\-

C1

X

XSDDATETIME\_LOCAL

\-

\-

C1

X

XSDDATETIME\_LOCAL\_DT

\-

\-

C1

X

XSDDATETIME\_LONG\_Z

\-

\-

C1

X

XSDDATETIME\_OFFSET

\-

\-

C1

X

XSDDATETIME\_Z

\-

\-

C1

X

XSDDATE\_D

\-

\-

C1

X

XSDDATE\_ISO

\-

\-

C1

X

XSDDURATION\_ISO

\-

\-

C1

X

XSDLANGUAGE

\-

\-

C1

X

XSDQNAME

\-

\-

C1

X

XSDTIME\_ISO

\-

\-

C1

X

XSDTIME\_T

\-

\-

C1

X

XSDUNITCODE

\-

\-

C1

X

XSDUUID\_BASE32

\-

\-

C1

X

XSDUUID\_BASE64

\-

\-

C1

X

XSDUUID\_CHAR

\-

\-

C1

X

XSDUUID\_RAW

\-

\-

C1

X

ZTERM

\-

\-

C1

 

X

DTEL - Data Element

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

/AIF/IFNAME

\-

\-

C1

 

X

/AIF/IFVERSION

\-

\-

C1

 

X

/AIF/NS

\-

\-

C1

 

X

ABAPVRS

\-

\-

C1

 

X

ABAP\_BOOLEAN

\-

\-

C1

X

X

ABAP\_ENCOD

\-

\-

C1

X

X

ABAP\_MSIZE

\-

\-

C1

X

X

ABAP\_REPL

\-

\-

C1

 

X

ABLAD

\-

\-

C1

 

X

ABPER\_RF

\-

\-

C1

 

X

ABP\_ACTION\_NAME

\-

\-

C1

X

ABP\_ASSOCIATION\_NAME

\-

\-

C1

X

ABP\_BEHV\_CID

\-

\-

C1

X

ABP\_BEHV\_DRAFT

\-

\-

C1

X

ABP\_BEHV\_FEATURE

\-

\-

C1

X

ABP\_BEHV\_FLAG

\-

\-

C1

X

ABP\_BEHV\_KIND

\-

\-

C1

X

ABP\_BEHV\_OP\_MODIFY

\-

\-

C1

X

ABP\_BEHV\_OP\_READ

\-

\-

C1

X

ABP\_BEHV\_PID

\-

\-

C1

X

ABP\_BEHV\_TYPEKIND

\-

\-

C1

X

ABP\_CREATION\_DATE

\-

\-

C1

X

ABP\_CREATION\_TIME

\-

\-

C1

X

ABP\_CREATION\_TSTMPL

\-

\-

C1

X

ABP\_CREATION\_USER

\-

\-

C1

X

ABP\_CREATION\_UTCL

\-

\-

C1

X

ABP\_ELEMENT\_NAME

\-

\-

C1

X

ABP\_ENTITY\_NAME

\-

\-

C1

X

ABP\_FIELD\_NAME

\-

\-

C1

X

ABP\_LASTCHANGE\_DATE

\-

\-

C1

X

ABP\_LASTCHANGE\_TIME

\-

\-

C1

X

ABP\_LASTCHANGE\_TSTMPL

\-

\-

C1

X

ABP\_LASTCHANGE\_USER

\-

\-

C1

X

ABP\_LASTCHANGE\_UTCL

\-

\-

C1

X

ABP\_LOCINST\_LASTCHANGE\_DATE

\-

\-

C1

X

ABP\_LOCINST\_LASTCHANGE\_TIME

\-

\-

C1

X

ABP\_LOCINST\_LASTCHANGE\_TSTMPL

\-

\-

C1

X

ABP\_LOCINST\_LASTCHANGE\_USER

\-

\-

C1

X

ABP\_LOCINST\_LASTCHANGE\_UTCL

\-

\-

C1

X

ABP\_ROOT\_ENTITY\_NAME

\-

\-

C1

X

ABP\_TIMEST

\-

\-

C1

 

X

ABWGA\_CURR

\-

\-

C1

X

ABWKT\_CURR

\-

\-

C1

X

ACTIV\_AUTH

\-

\-

C1

X

AD\_ADDRNUM

\-

\-

C1

X

X

AD\_ADRTYPE

\-

\-

C1

X

X

AD\_CTRY\_FR

\-

\-

C1

X

X

AD\_HANDLE

\-

\-

C1

X

X

AD\_LINE\_S

\-

\-

C1

X

X

AD\_PERSNUM

\-

\-

C1

X

X

AD\_TITLE

\-

\-

C1

X

AD\_TITLETX

\-

\-

C1

X

AEDAT

\-

\-

C1

 

X

AFNAM

\-

\-

C1

 

X

ALIAS\_TYPE\_ID

\-

\-

C1

X

ALS\_TYPE\_RULE

\-

\-

C1

X

ALS\_TYPE\_VALIDATION

\-

\-

C1

X

ANLN1

\-

\-

C1

 

X

ANLN2

\-

\-

C1

 

X

ANZEI

\-

\-

C1

X

X

APPL\_VAR

\-

\-

C1

X

X

ARKTX

\-

\-

C1

 

X

ATTYP

\-

\-

C1

 

X

AUART

\-

\-

C1

 

X

AUFNR

\-

\-

C1

X

X

AUFPS

\-

\-

C1

X

AUFTYP

\-

\-

C1

X

X

AUGBL

\-

\-

C1

 

X

AWKEY

\-

\-

C1

 

X

AWREF

\-

\-

C1

 

X

AWREF\_REB

\-

\-

C1

 

X

AWSYS

\-

\-

C1

 

X

BADAT

\-

\-

C1

 

X

BADI\_CONTEXT\_MODE

\-

\-

C1

X

BADI\_FILTER\_NAME

\-

\-

C1

X

BADI\_NAME

\-

\-

C1

X

BAFIX

\-

\-

C1

 

X

BALLEVEL

\-

\-

C1

X

BALLOGHNDL

\-

\-

C1

X

BALMNR

\-

\-

C1

X

BALOBJ\_D

\-

\-

C1

X

BALOGNR

\-

\-

C1

X

BALSUBOBJ

\-

\-

C1

X

BAMEI

\-

\-

C1

 

X

BAMNG

\-

\-

C1

 

X

BANFN

\-

\-

C1

 

X

BANK\_ALIAS

\-

\-

C1

X

BANST

\-

\-

C1

 

X

BAPIAG

\-

\-

C1

X

X

BAPICUREXT

\-

\-

C1

X

X

BAPICUREXT31

\-

\-

C1

X

X

BAPICURR\_D

\-

\-

C1

X

X

BAPIISOCD

\-

\-

C1

 

X

BAPILOGSYS

\-

\-

C1

X

X

BAPIMAXROW

\-

\-

C1

X

X

BAPINETWRK

\-

\-

C1

X

X

BAPIOPTION

\-

\-

C1

X

X

BAPIPARA

\-

\-

C1

X

X

BAPIRELSTA

\-

\-

C1

X

X

BAPISIGN

\-

\-

C1

X

X

BAPIUPDATE

\-

\-

C1

X

X

BAPIWAIT

\-

\-

C1

X

X

BAPI\_BACK

\-

\-

C1

X

X

BAPI\_COMP

\-

\-

C1

X

X

BAPI\_CONV

\-

\-

C1

X

X

BAPI\_FLD

\-

\-

C1

X

X

BAPI\_HIGH

\-

\-

C1

X

X

BAPI\_INDEX

\-

\-

C1

X

X

BAPI\_LFRMT

\-

\-

C1

X

X

BAPI\_LINE

\-

\-

C1

X

X

BAPI\_LINESIZE

\-

\-

C1

X

X

BAPI\_LISTR

\-

\-

C1

X

X

BAPI\_LMASK

\-

\-

C1

X

X

BAPI\_LOW

\-

\-

C1

X

X

BAPI\_MSG

\-

\-

C1

X

X

BAPI\_MTYPE

\-

\-

C1

X

X

BAPI\_NCOMT

\-

\-

C1

X

X

BAPI\_PARAM

\-

\-

C1

X

X

BAPI\_SIGN

\-

\-

C1

X

X

BAPI\_STXT

\-

\-

C1

X

X

BAPI\_TABL

\-

\-

C1

X

X

BAPI\_TFRMT

\-

\-

C1

X

X

BAPI\_TLINE

\-

\-

C1

X

X

BBSRT

\-

\-

C1

 

X

BEDAT

\-

\-

C1

 

X

BEDNR

\-

\-

C1

 

X

BEGRU

\-

\-

C1

X

BELNR\_D

\-

\-

C1

X

X

BEMOT

\-

\-

C1

X

X

BF\_ANBWA

\-

\-

C1

 

X

BF\_ANLN1

\-

\-

C1

 

X

BF\_ANLN2

\-

\-

C1

 

X

BKTXT

\-

\-

C1

X

X

BLART

\-

\-

C1

X

X

BLCKD

\-

\-

C1

 

X

BLDAT

\-

\-

C1

X

X

BNFPO

\-

\-

C1

 

X

BPUEB

\-

\-

C1

 

X

BP\_GEBER

\-

\-

C1

 

X

BSAKZ

\-

\-

C1

 

X

BSCHL

\-

\-

C1

X

X

BSTDK

\-

\-

C1

 

X

BSTKD

\-

\-

C1

 

X

BSTME

\-

\-

C1

 

X

BSTYP

\-

\-

C1

 

X

BUDAT

\-

\-

C1

X

X

BUKRS

\-

\-

C1

X

X

BUPLA

\-

\-

C1

X

X

BUZEI

\-

\-

C1

X

X

BVTYP

\-

\-

C1

 

X

BWART

\-

\-

C1

 

X

BWKEY

\-

\-

C1

 

X

BWSTRAT

\-

\-

C1

X

BWTAR\_D

\-

\-

C1

 

X

CALENDARDATE

\-

\-

C1

X

X

CALLTRANS2

\-

\-

C1

X

X

CFD\_CUSTOM\_CURRENCY\_NAME

\-

\-

C1

 

X

CFD\_CUSTOM\_UOM\_LONG\_NAME

\-

\-

C1

 

X

CFD\_DUMMY

\-

\-

C1

 

X

CHARG\_D

\-

\-

C1

 

X

CIM\_COUNT

\-

\-

C1

 

X

CITYC

\-

\-

C1

 

X

CMIS\_DECIMAL

\-

\-

C1

X

CMIS\_DESTINATION

\-

\-

C1

X

CMIS\_ENUM

\-

\-

C1

X

CMIS\_ID

\-

\-

C1

X

CMIS\_LONG

\-

\-

C1

X

CMIS\_REPOSITORY\_ID

\-

\-

C1

X

CMIS\_STRING

\-

\-

C1

X

CONFIG\_DEPRECATION\_CODE

\-

\-

C1

X

X

CO\_AUFPL

\-

\-

C1

 

X

CO\_BELNR

\-

\-

C1

X

CO\_BLTXT

\-

\-

C1

 

X

CO\_POSNR

\-

\-

C1

 

X

CO\_PRZNR

\-

\-

C1

 

X

CO\_RESSOURCE

\-

\-

C1

X

CO\_STFLG

\-

\-

C1

 

X

CPCODEPAGE

\-

\-

C1

 

X

D16N

\-

\-

C1

X

X

D34N

\-

\-

C1

X

X

DABRBEZ

\-

\-

C1

 

X

DATEFUNCTIONID

\-

\-

C1

X

X

DATN

\-

\-

C1

X

X

DDOPTION

\-

\-

C1

X

X

DDSIGN

\-

\-

C1

X

X

DISPO

\-

\-

C1

 

X

DTAT16

\-

\-

C1

 

X

DTAT17

\-

\-

C1

 

X

DTAT18

\-

\-

C1

 

X

DTAT19

\-

\-

C1

 

X

DUMMY

\-

\-

C1

 

X

DZBD1P

\-

\-

C1

X

X

DZBD1T

\-

\-

C1

X

X

DZBD2P

\-

\-

C1

X

X

DZBD2T

\-

\-

C1

X

X

DZBD3T

\-

\-

C1

X

X

DZFBDT

\-

\-

C1

X

X

DZLSCH

\-

\-

C1

 

X

DZLSPR

\-

\-

C1

 

X

DZTERM

\-

\-

C1

X

X

DZUGBA

\-

\-

C1

 

X

DZUONR

\-

\-

C1

X

X

D\_DELFUNC

\-

\-

C1

X

X

EAN11

\-

\-

C1

X

X

EBAKZ

\-

\-

C1

 

X

EBELN

\-

\-

C1

X

X

EBELP

\-

\-

C1

X

X

EINDT

\-

\-

C1

 

X

EKGRP

\-

\-

C1

 

X

EKORG

\-

\-

C1

 

X

ELIFN

\-

\-

C1

 

X

ELOEK

\-

\-

C1

 

X

EMATN

\-

\-

C1

 

X

EMATNR

\-

\-

C1

 

X

EPRCTR

\-

\-

C1

X

ERDAT

\-

\-

C1

 

X

ERFME

\-

\-

C1

 

X

ERNAM

\-

\-

C1

 

X

ESRNR

\-

\-

C1

 

X

ESRPZ

\-

\-

C1

 

X

ESRRE

\-

\-

C1

 

X

ESTKZ

\-

\-

C1

 

X

ETENR

\-

\-

C1

 

X

EWERK

\-

\-

C1

 

X

FB\_PSEGMENT

\-

\-

C1

X

X

FB\_SEGMENT

\-

\-

C1

 

X

FCO\_SRVDOC\_ID

\-

\-

C1

X

FCO\_SRVDOC\_ITEM\_ID

\-

\-

C1

X

FCO\_SRVDOC\_TYPE

\-

\-

C1

X

FCURR\_CURR

\-

\-

C1

X

X

FDT\_CALENDAR\_WEEK

\-

\-

C1

X

X

FDT\_DAY\_OF\_MONTH

\-

\-

C1

X

X

FDT\_DAY\_OF\_WEEK

\-

\-

C1

X

X

FDT\_MONTH

\-

\-

C1

X

X

FDT\_QUARTER\_OF\_YEAR

\-

\-

C1

X

X

FDT\_SYBATCH

\-

\-

C1

X

X

FDT\_SYDATUM

\-

\-

C1

X

X

FDT\_SYUZEIT

\-

\-

C1

X

X

FFACT\_CURR

\-

\-

C1

X

FIKRS

\-

\-

C1

 

X

FILKD

\-

\-

C1

 

X

FINS\_CALDATE

\-

\-

C1

 

X

FINS\_CALYEAR

\-

\-

C1

 

X

FINS\_CALYEARMONTH

\-

\-

C1

 

X

FINS\_CALYEARMONTH\_I

\-

\-

C1

 

X

FINS\_CALYEARQUARTER

\-

\-

C1

 

X

FINS\_CALYEARQUARTER\_I

\-

\-

C1

 

X

FINS\_CALYEARWEEK

\-

\-

C1

 

X

FINS\_CALYEARWEEK\_I

\-

\-

C1

 

X

FINS\_CALYEAR\_I

\-

\-

C1

 

X

FINS\_FISCALPERIOD

\-

\-

C1

 

X

FINS\_FISCALPERIOD\_I

\-

\-

C1

 

X

FINS\_FISCALWEEK

\-

\-

C1

 

X

FINS\_FISCALYEAR\_I

\-

\-

C1

 

X

FINS\_FPERIOD\_ENDDATE

\-

\-

C1

 

X

FINS\_FPERIOD\_STARTDATE

\-

\-

C1

 

X

FINS\_FQUARTER\_ENDDATE

\-

\-

C1

 

X

FINS\_FQUARTER\_STARTDATE

\-

\-

C1

 

X

FINS\_FSCALQUARTER

\-

\-

C1

 

X

FINS\_FTPERIOD\_ENDDATE

\-

\-

C1

 

X

FINS\_FTPERIOD\_STARTDATE

\-

\-

C1

 

X

FINS\_FWEEK\_ENDDATE

\-

\-

C1

 

X

FINS\_FWEEK\_STARTDATE

\-

\-

C1

 

X

FINS\_FYEARPERIOD

\-

\-

C1

 

X

FINS\_FYEARPERIOD\_I

\-

\-

C1

 

X

FINS\_FYEARQUARTER

\-

\-

C1

 

X

FINS\_FYEARQUARTER\_I

\-

\-

C1

 

X

FINS\_FYEARWEEK

\-

\-

C1

 

X

FINS\_FYEARWEEK\_I

\-

\-

C1

 

X

FINS\_FYEAR\_ENDDATE

\-

\-

C1

 

X

FINS\_FYEAR\_STARTDATE

\-

\-

C1

 

X

FINS\_GJAHR

\-

\-

C1

 

X

FINS\_JAHRPER

\-

\-

C1

 

X

FINS\_NEXT\_FISCALPERIOD

\-

\-

C1

 

X

FINS\_NEXT\_FISCALQUARTER

\-

\-

C1

 

X

FINS\_NEXT\_FISCALWEEK

\-

\-

C1

 

X

FINS\_NEXT\_FISCALYEAR

\-

\-

C1

 

X

FINS\_NEXT\_FISCPERIODFISCYEAR

\-

\-

C1

 

X

FINS\_NEXT\_FPERFYEAR\_ENDDATE

\-

\-

C1

 

X

FINS\_NEXT\_FPERFYEAR\_STARTDATE

\-

\-

C1

 

X

FINS\_NEXT\_FPERIOD\_ENDDATE

\-

\-

C1

 

X

FINS\_NEXT\_FPERIOD\_STARTDATE

\-

\-

C1

 

X

FINS\_NEXT\_FQUARTER\_ENDDATE

\-

\-

C1

 

X

FINS\_NEXT\_FQUARTER\_STARTDATE

\-

\-

C1

 

X

FINS\_NEXT\_FWEEK\_ENDDATE

\-

\-

C1

 

X

FINS\_NEXT\_FWEEK\_STARTDATE

\-

\-

C1

 

X

FINS\_NEXT\_FYEARPERIOD

\-

\-

C1

 

X

FINS\_NEXT\_FYEARQUARTER

\-

\-

C1

 

X

FINS\_NEXT\_FYEARQUARTER\_I

\-

\-

C1

 

X

FINS\_NEXT\_FYEARWEEK

\-

\-

C1

 

X

FINS\_NEXT\_FYEAR\_ENDDATE

\-

\-

C1

 

X

FINS\_NEXT\_FYEAR\_STARTDATE

\-

\-

C1

 

X

FINS\_PERIV

\-

\-

C1

 

X

FINS\_PREV\_FISCALPERIOD

\-

\-

C1

 

X

FINS\_PREV\_FISCALQUARTER

\-

\-

C1

 

X

FINS\_PREV\_FISCALWEEK

\-

\-

C1

 

X

FINS\_PREV\_FISCALYEAR

\-

\-

C1

 

X

FINS\_PREV\_FISCPERIODFISCYEAR

\-

\-

C1

 

X

FINS\_PREV\_FPERFYEAR\_ENDDATE

\-

\-

C1

 

X

FINS\_PREV\_FPERFYEAR\_STARTDATE

\-

\-

C1

 

X

FINS\_PREV\_FPERIOD\_ENDDATE

\-

\-

C1

 

X

FINS\_PREV\_FPERIOD\_STARTDATE

\-

\-

C1

 

X

FINS\_PREV\_FQUARTER\_ENDDATE

\-

\-

C1

 

X

FINS\_PREV\_FQUARTER\_STARTDATE

\-

\-

C1

 

X

FINS\_PREV\_FWEEK\_ENDDATE

\-

\-

C1

 

X

FINS\_PREV\_FWEEK\_STARTDATE

\-

\-

C1

 

X

FINS\_PREV\_FYEARPERIOD

\-

\-

C1

 

X

FINS\_PREV\_FYEARQUARTER

\-

\-

C1

 

X

FINS\_PREV\_FYEARWEEK

\-

\-

C1

 

X

FINS\_PREV\_FYEAR\_ENDDATE

\-

\-

C1

 

X

FINS\_PREV\_FYEAR\_STARTDATE

\-

\-

C1

 

X

FINS\_TPERIOD\_OFFSET\_UNIT

\-

\-

C1

X

X

FINS\_TPER\_OFFSET\_DURATN

\-

\-

C1

X

X

FINS\_XSPECPER

\-

\-

C1

 

X

FIPOS

\-

\-

C1

 

X

FISTL

\-

\-

C1

 

X

FIS\_GJAHR

\-

\-

C1

 

X

FIS\_GJAHR\_NO\_CONV

\-

\-

C1

X

X

FKBER

\-

\-

C1

X

X

FLIEF

\-

\-

C1

 

X

FM\_BUDGET\_PERIOD

\-

\-

C1

 

X

FM\_FIPEX

\-

\-

C1

 

X

FRGDT

\-

\-

C1

 

X

FRGKE

\-

\-

C1

 

X

FRGKZ

\-

\-

C1

 

X

FRGRL

\-

\-

C1

 

X

FRGST

\-

\-

C1

 

X

FRGZU

\-

\-

C1

 

X

GEOM\_EWKB

\-

\-

C1

X

X

GEWEI

\-

\-

C1

 

X

GJAHR

\-

\-

C1

X

X

GLVOR

\-

\-

C1

 

X

GM\_GRANT\_NBR

\-

\-

C1

 

X

GSBER

\-

\-

C1

X

X

GSFRG

\-

\-

C1

 

X

HBKID

\-

\-

C1

X

X

HKMAT

\-

\-

C1

 

X

HKONT

\-

\-

C1

 

X

HKTID

\-

\-

C1

X

X

HRKFT

\-

\-

C1

X

X

ILEN

\-

\-

C1

 

X

IMKEY

\-

\-

C1

 

X

INFNR

\-

\-

C1

 

X

INT1

\-

\-

C1

X

X

INT2

\-

\-

C1

X

X

INT4

\-

\-

C1

X

X

INTCA

\-

\-

C1

X

X

IOFF

\-

\-

C1

 

X

ISLM2\_DE\_BAR01

\-

\-

C1

 

X

ISLM2\_DE\_DOUBLE\_PARAM

\-

\-

C1

 

X

ISLM2\_DE\_FIELDNAME

\-

\-

C1

 

X

ISLM2\_DE\_INTEGER\_PARAM

\-

\-

C1

 

X

ISLM2\_DE\_NCLOB\_PARAM

\-

\-

C1

 

X

ISLM2\_DE\_PROBABILITY01

\-

\-

C1

 

X

ISLM2\_DE\_SCORE01

\-

\-

C1

 

X

ISLM3\_DE\_PERCENTILE

\-

\-

C1

 

X

ISLM\_DE\_REASON\_CODE\_QUALITY

\-

\-

C1

 

X

ISOCD

\-

\-

C1

X

ISOCD\_UNIT

\-

\-

C1

X

JV\_PART

\-

\-

C1

 

X

JV\_RECIND

\-

\-

C1

 

X

KBLNR\_FI

\-

\-

C1

 

X

KBLPOS

\-

\-

C1

 

X

KDAUF

\-

\-

C1

 

X

KDEIN

\-

\-

C1

 

X

KDPOS

\-

\-

C1

 

X

KKBER

\-

\-

C1

 

X

KNTTP

\-

\-

C1

 

X

KOART

\-

\-

C1

X

X

KOKRS

\-

\-

C1

X

X

KONNR

\-

\-

C1

 

X

KOSTL

\-

\-

C1

X

X

KSTRG

\-

\-

C1

X

X

KTOPL

\-

\-

C1

X

KTOSL

\-

\-

C1

 

X

KTPNR

\-

\-

C1

 

X

KUNAG

\-

\-

C1

 

X

KUNNR

\-

\-

C1

 

X

KURSF

\-

\-

C1

 

X

KURST

\-

\-

C1

X

X

KURST\_CURR

\-

\-

C1

X

X

KWMENG

\-

\-

C1

 

X

KZBEW

\-

\-

C1

 

X

KZBWS

\-

\-

C1

 

X

KZVBR

\-

\-

C1

 

X

LAND1

\-

\-

C1

X

X

LANDL

\-

\-

C1

 

X

LGORT\_D

\-

\-

C1

 

X

LIFNR

\-

\-

C1

 

X

LOGSYSTEM

\-

\-

C1

X

X

LPEIN

\-

\-

C1

 

X

LSTAR

\-

\-

C1

X

X

LZBKZ

\-

\-

C1

 

X

MANDT

\-

\-

C1

X

MANSP

\-

\-

C1

 

X

MATKL

\-

\-

C1

 

X

MATNR

\-

\-

C1

X

X

MEINS

\-

\-

C1

X

X

MENGE\_D

\-

\-

C1

X

X

MFRNR

\-

\-

C1

 

X

MFRPN

\-

\-

C1

 

X

MNG06

\-

\-

C1

 

X

MONAT

\-

\-

C1

 

X

MPROF

\-

\-

C1

 

X

MSCHL

\-

\-

C1

 

X

MSEHI

\-

\-

C1

X

MWSKZ

\-

\-

C1

X

X

NPLNR

\-

\-

C1

 

X

NUM12

\-

\-

C1

 

X

NUMTP

\-

\-

C1

X

OUTPUTSTYLE

\-

\-

C1

X

X

PARGB

\-

\-

C1

X

X

PAYMENT\_SYSTEM\_ID

\-

\-

C1

X

PCF\_AMOUNT

\-

\-

C1

X

X

PCF\_BOOLEAN

\-

\-

C1

X

X

PCF\_CURRENCY

\-

\-

C1

X

X

PCF\_DATE

\-

\-

C1

X

X

PCF\_NUMBER

\-

\-

C1

X

X

PCF\_QUANTITY

\-

\-

C1

X

X

PCF\_TIME

\-

\-

C1

X

X

PCF\_TIMESTAMP

\-

\-

C1

X

X

PCF\_UNIT

\-

\-

C1

X

X

PEINH

\-

\-

C1

 

X

PERIV

\-

\-

C1

X

PERNR\_D

\-

\-

C1

 

X

PLIFZ

\-

\-

C1

 

X

POPER

\-

\-

C1

X

X

POSNR\_VA

\-

\-

C1

 

X

PPRCTR

\-

\-

C1

X

X

PRCTR

\-

\-

C1

X

X

PREIS

\-

\-

C1

 

X

PROGNAME

\-

\-

C1

 

X

PRSDT

\-

\-

C1

 

X

PRX\_AUTOMATIC\_RETRY

\-

\-

C1

X

PRX\_LOGICAL\_PORT\_NAME

\-

\-

C1

X

PRX\_NO\_RETRY

\-

\-

C1

X

PRX\_WORKFLOW\_TRIGGERED

\-

\-

C1

X

PSTYP

\-

\-

C1

 

X

PSTYV

\-

\-

C1

 

X

PS\_POSID

\-

\-

C1

 

X

PS\_PSP\_PNR

\-

\-

C1

 

X

PYCUR

\-

\-

C1

 

X

R3STATE

\-

\-

C1

 

X

RAP\_CP\_ODATA\_V2\_EDM\_DATETIME

\-

\-

C1

X

RAP\_CP\_ODATA\_V2\_EDM\_TIME

\-

\-

C1

X

RAP\_CP\_ODATA\_V4\_EDM\_DATE

\-

\-

C1

X

RAP\_CP\_ODATA\_V4\_EDM\_DURATION

\-

\-

C1

X

RAP\_CP\_ODATA\_V4\_EDM\_TIMEOFDAY

\-

\-

C1

X

RAP\_CP\_ODATA\_VALUE\_CONTROL

\-

\-

C1

X

RASSC

\-

\-

C1

 

X

REGEX\_STANDARD

\-

\-

C1

X

X

REGIO

\-

\-

C1

X

X

REPOS

\-

\-

C1

 

X

RESWK

\-

\-

C1

 

X

REVLV

\-

\-

C1

 

X

RFCDEST

\-

\-

C1

X

RKEOBJNR

\-

\-

C1

 

X

RMVCT

\-

\-

C1

 

X

RSANA\_UMM2\_PROBABILITY01

\-

\-

C1

 

X

RSANA\_UMM2\_SCORE01

\-

\-

C1

 

X

RSNUM

\-

\-

C1

 

X

SAEARCHIVI

\-

\-

C1

 

X

SAEARDOID

\-

\-

C1

 

X

SAEDOKTYP

\-

\-

C1

 

X

SAENOTESH

\-

\-

C1

 

X

SAEOBJART

\-

\-

C1

 

X

SAKNR

\-

\-

C1

 

X

SAP\_BOOL

\-

\-

C1

 

X

SCBO\_ACTION\_ID

\-

\-

C1

 

X

SCBO\_BUSINESS\_OBJECT\_ID

\-

\-

C1

 

X

SCBO\_NODE\_ID

\-

\-

C1

 

X

SCX\_ATTRNAME

\-

\-

C1

X

X

SCX\_ST\_TSTAMP

\-

\-

C1

X

X

SDRAFT\_CONSISTENCY\_STATUS

\-

\-

C1

X

SDRAFT\_UUID

\-

\-

C1

X

SECCO

\-

\-

C1

 

X

SEPA\_MNDID

\-

\-

C1

 

X

SERNR

\-

\-

C1

 

X

SGTXT

\-

\-

C1

X

X

SHKZG

\-

\-

C1

X

X

SKOST

\-

\-

C1

X

SPART

\-

\-

C1

 

X

SPRAS

\-

\-

C1

X

X

STAGR

\-

\-

C1

 

X

STCEG

\-

\-

C1

X

X

STGRD

\-

\-

C1

 

X

SVC\_INSTANCE\_NAME

\-

\-

C1

X

SWF\_ALL\_USERS

\-

\-

C1

X

X

SWF\_CPWF\_CONSUMER

\-

\-

C1

X

SWF\_CPWF\_HANDLE

\-

\-

C1

X

SWF\_PBL\_ID\_FIELD\_1

\-

\-

C1

 

X

SWF\_PBL\_ID\_FIELD\_2

\-

\-

C1

 

X

SWF\_PBL\_ID\_FIELD\_3

\-

\-

C1

 

X

SWF\_PBL\_ID\_FIELD\_4

\-

\-

C1

 

X

SWF\_PBL\_ID\_FIELD\_5

\-

\-

C1

 

X

SWF\_PBL\_ID\_FIELD\_6

\-

\-

C1

 

X

SWF\_PBL\_SAP\_OBJECT\_TYPE

\-

\-

C1

 

X

SXCO\_AD\_FIELD\_NAME

\-

\-

C1

X

SXCO\_AD\_OBJECT\_NAME

\-

\-

C1

X

SXCO\_AMDP\_DB\_ENTITY

\-

\-

C1

X

SXCO\_AO\_COMPONENT\_NAME

\-

\-

C1

X

SXCO\_AO\_OBJECT\_NAME

\-

\-

C1

X

SXCO\_AO\_SHORT\_DESCRIPTION

\-

\-

C1

X

SXCO\_AO\_SUBCOMPONENT\_NAME

\-

\-

C1

X

SXCO\_APLO\_OBJECT\_NAME

\-

\-

C1

X

SXCO\_AR\_OBJECT\_NAME

\-

\-

C1

X

SXCO\_AR\_OBJECT\_TYPE

\-

\-

C1

X

SXCO\_AR\_SHORT\_DESCRIPTION

\-

\-

C1

X

SXCO\_BAL\_LOG\_HANDLE

\-

\-

C1

X

SXCO\_BCO\_NAME

\-

\-

C1

X

SXCO\_BDEF\_ACTION\_NAME

\-

\-

C1

X

SXCO\_BDEF\_ALIAS\_NAME

\-

\-

C1

X

SXCO\_BDEF\_EVALUATION\_NAME

\-

\-

C1

X

SXCO\_CDS\_ANN\_PROPERTY

\-

\-

C1

X

SXCO\_CDS\_ASSOCIATION\_NAME

\-

\-

C1

X

SXCO\_CDS\_FIELD\_NAME

\-

\-

C1

X

SXCO\_CDS\_OBJECT\_NAME

\-

\-

C1

X

SXCO\_CDS\_PARAMETER\_NAME

\-

\-

C1

X

SXCO\_CLAS\_METHOD\_NAME

\-

\-

C1

X

SXCO\_CTS\_OBJECT\_NAME

\-

\-

C1

X

SXCO\_CTS\_OBJECT\_TYPE

\-

\-

C1

X

SXCO\_DBT\_OBJECT\_NAME

\-

\-

C1

X

SXCO\_DDEF\_ALIAS\_NAME

\-

\-

C1

X

SXCO\_FG\_OBJECT\_NAME

\-

\-

C1

X

SXCO\_FM\_EXCEPTION\_NAME

\-

\-

C1

X

SXCO\_FM\_NAME

\-

\-

C1

X

SXCO\_FM\_PARAMETER\_NAME

\-

\-

C1

X

SXCO\_GTT\_OBJECT\_NAME

\-

\-

C1

X

SXCO\_I18N\_TEXT\_ATTRIBUTE

\-

\-

C1

X

SXCO\_MC\_OBJECT\_NAME

\-

\-

C1

X

SXCO\_PACKAGE

\-

\-

C1

X

SXCO\_SRVB\_OBJECT\_NAME

\-

\-

C1

X

SXCO\_SRVB\_SERVICE\_NAME

\-

\-

C1

X

SXCO\_SRVB\_SERVICE\_VERSION

\-

\-

C1

X

SXCO\_SRVD\_OBJECT\_NAME

\-

\-

C1

X

SXCO\_TF\_OBJECT\_NAME

\-

\-

C1

X

SXCO\_TRANSPORT

\-

\-

C1

X

SXCO\_USER\_NAME

\-

\-

C1

X

SYABCDE

\-

\-

C1

 

X

SYAPPLI

\-

\-

C1

 

X

SYBATCH

\-

\-

C1

 

X

SYBATZD

\-

\-

C1

 

X

SYBATZM

\-

\-

C1

 

X

SYBATZO

\-

\-

C1

 

X

SYBATZS

\-

\-

C1

 

X

SYBATZW

\-

\-

C1

 

X

SYBIN1

\-

\-

C1

 

X

SYBINPT

\-

\-

C1

 

X

SYBREP4

\-

\-

C1

 

X

SYBSPLD

\-

\-

C1

 

X

SYCALLD

\-

\-

C1

 

X

SYCALLR

\-

\-

C1

 

X

SYCCURS

\-

\-

C1

 

X

SYCCURT

\-

\-

C1

 

X

SYCDATE

\-

\-

C1

 

X

SYCFWAE

\-

\-

C1

 

X

SYCHAR01

\-

\-

C1

X

X

SYCHAR02

\-

\-

C1

 

X

SYCHAR12K

\-

\-

C1

 

X

SYCHAR30

\-

\-

C1

 

X

SYCHWAE

\-

\-

C1

 

X

SYCOLNO

\-

\-

C1

 

X

SYCPAGE

\-

\-

C1

 

X

SYCPROG

\-

\-

C1

 

X

SYCTABL

\-

\-

C1

 

X

SYCTYPE

\-

\-

C1

 

X

SYCUCOL

\-

\-

C1

 

X

SYCUROW

\-

\-

C1

 

X

SYCURR

\-

\-

C1

X

X

SYDATAR

\-

\-

C1

 

X

SYDATE

\-

\-

C1

X

X

SYDATUM

\-

\-

C1

 

X

SYDAYST

\-

\-

C1

 

X

SYDBCNT

\-

\-

C1

 

X

SYDBNAM

\-

\-

C1

 

X

SYDBSYS

\-

\-

C1

 

X

SYDCSYS

\-

\-

C1

 

X

SYDEBUG

\-

\-

C1

 

X

SYDSNAM

\-

\-

C1

 

X

SYDYNGR

\-

\-

C1

 

X

SYDYNNR

\-

\-

C1

 

X

SYENTRY

\-

\-

C1

 

X

SYFDAYW

\-

\-

C1

 

X

SYFDPOS

\-

\-

C1

 

X

SYFFILE

\-

\-

C1

 

X

SYFLENG

\-

\-

C1

 

X

SYFMKEY

\-

\-

C1

 

X

SYFODEC

\-

\-

C1

 

X

SYFOLEN

\-

\-

C1

 

X

SYFTYPE

\-

\-

C1

 

X

SYGROUP

\-

\-

C1

 

X

SYHEX02

\-

\-

C1

 

X

SYHOST

\-

\-

C1

 

X

SYINDEX

\-

\-

C1

 

X

SYINPUT

\-

\-

C1

 

X

SYLANGU

\-

\-

C1

 

X

SYLDBPG

\-

\-

C1

 

X

SYLILLI

\-

\-

C1

 

X

SYLINCT

\-

\-

C1

 

X

SYLINNO

\-

\-

C1

 

X

SYLINSZ

\-

\-

C1

 

X

SYLISEL

\-

\-

C1

 

X

SYLISTI

\-

\-

C1

 

X

SYLOOPC

\-

\-

C1

 

X

SYLPASS

\-

\-

C1

 

X

SYLSIND

\-

\-

C1

 

X

SYLSTAT

\-

\-

C1

 

X

SYMACDB

\-

\-

C1

 

X

SYMACOL

\-

\-

C1

 

X

SYMANDT

\-

\-

C1

 

X

SYMARKY

\-

\-

C1

 

X

SYMAROW

\-

\-

C1

 

X

SYMODNO

\-

\-

C1

 

X

SYMSGID

\-

\-

C1

X

X

SYMSGLI

\-

\-

C1

 

X

SYMSGNO

\-

\-

C1

X

X

SYMSGTY

\-

\-

C1

X

X

SYMSGV

\-

\-

C1

X

X

SYNEWPA

\-

\-

C1

 

X

SYNRPAG

\-

\-

C1

 

X

SYONCOM

\-

\-

C1

 

X

SYOPSYS

\-

\-

C1

 

X

SYPAART

\-

\-

C1

 

X

SYPAGCT

\-

\-

C1

 

X

SYPAGNO

\-

\-

C1

 

X

SYPAUTH

\-

\-

C1

 

X

SYPDEST

\-

\-

C1

 

X

SYPEXPI

\-

\-

C1

 

X

SYPFKEY

\-

\-

C1

 

X

SYPLAYO

\-

\-

C1

 

X

SYPLAYP

\-

\-

C1

 

X

SYPLIST

\-

\-

C1

 

X

SYPNWPA

\-

\-

C1

 

X

SYPRABT

\-

\-

C1

 

X

SYPRBIG

\-

\-

C1

 

X

SYPRCOP

\-

\-

C1

 

X

SYPRDSN

\-

\-

C1

 

X

SYPREFX

\-

\-

C1

 

X

SYPRI40

\-

\-

C1

 

X

SYPRIMM

\-

\-

C1

 

X

SYPRINI

\-

\-

C1

 

X

SYPRLOG

\-

\-

C1

 

X

SYPRNEW

\-

\-

C1

 

X

SYPRREC

\-

\-

C1

 

X

SYPRREL

\-

\-

C1

 

X

SYPRTXT

\-

\-

C1

 

X

SYREPI2

\-

\-

C1

 

X

SYREPID

\-

\-

C1

X

X

SYRSTRT

\-

\-

C1

 

X

SYRTITL

\-

\-

C1

 

X

SYSCOLS

\-

\-

C1

 

X

SYSFNAM

\-

\-

C1

 

X

SYSFOFF

\-

\-

C1

 

X

SYSLSET

\-

\-

C1

 

X

SYSPONO

\-

\-

C1

 

X

SYSPONR

\-

\-

C1

 

X

SYSROWS

\-

\-

C1

 

X

SYSTACO

\-

\-

C1

 

X

SYSTARO

\-

\-

C1

 

X

SYSTDATLO

\-

\-

C1

 

X

SYSTEPL

\-

\-

C1

 

X

SYSTLOCDB

\-

\-

C1

 

X

SYSTLOCOP

\-

\-

C1

 

X

SYSTTIMLO

\-

\-

C1

 

X

SYSTZONLO

\-

\-

C1

 

X

SYST\_LANGU

\-

\-

C1

 

X

SYSUBCS

\-

\-

C1

 

X

SYSUBRC

\-

\-

C1

X

X

SYSUBTY

\-

\-

C1

 

X

SYSUUID\_C22

\-

\-

C1

X

X

SYSUUID\_C26

\-

\-

C1

X

X

SYSUUID\_C32

\-

\-

C1

X

X

SYSUUID\_C36

\-

\-

C1

X

X

SYSUUID\_X16

\-

\-

C1

X

X

SYSYSID

\-

\-

C1

 

X

SYTABID

\-

\-

C1

 

X

SYTABIX

\-

\-

C1

 

X

SYTCODE

\-

\-

C1

 

X

SYTFDSN

\-

\-

C1

 

X

SYTFILL

\-

\-

C1

 

X

SYTITLE

\-

\-

C1

 

X

SYTLENG

\-

\-

C1

 

X

SYTLOPC

\-

\-

C1

 

X

SYTMAXL

\-

\-

C1

 

X

SYTNAME

\-

\-

C1

 

X

SYTOCCU

\-

\-

C1

 

X

SYTPAGI

\-

\-

C1

 

X

SYTSTIS

\-

\-

C1

 

X

SYTTABC

\-

\-

C1

 

X

SYTTABI

\-

\-

C1

 

X

SYTVAR

\-

\-

C1

 

X

SYTZONE

\-

\-

C1

 

X

SYUCOMM

\-

\-

C1

 

X

SYULINE

\-

\-

C1

 

X

SYUNAME

\-

\-

C1

X

X

SYUZEIT

\-

\-

C1

 

X

SYVLINE

\-

\-

C1

 

X

SYWAERS

\-

\-

C1

 

X

SYWILLI

\-

\-

C1

 

X

SYWINCO

\-

\-

C1

 

X

SYWINDI

\-

\-

C1

 

X

SYWINRO

\-

\-

C1

 

X

SYWINSL

\-

\-

C1

 

X

SYWINX1

\-

\-

C1

 

X

SYWINX2

\-

\-

C1

 

X

SYWINY1

\-

\-

C1

 

X

SYWINY2

\-

\-

C1

 

X

SYWTITL

\-

\-

C1

 

X

SYXCODE

\-

\-

C1

 

X

SYXFORM

\-

\-

C1

 

X

SYXPROG

\-

\-

C1

 

X

TABNAME

\-

\-

C1

X

TCODE

\-

\-

C1

X

X

TCURR\_CURR

\-

\-

C1

X

X

TE\_STRUC

\-

\-

C1

X

TFACT\_CURR

\-

\-

C1

X

TIMESTAMP

\-

\-

C1

X

X

TIMESTAMPL

\-

\-

C1

X

X

TIMEZONE

\-

\-

C1

X

X

TIMN

\-

\-

C1

X

X

TWRKZ

\-

\-

C1

 

X

TXDAT

\-

\-

C1

X

X

TXJCD

\-

\-

C1

X

X

TXZ01

\-

\-

C1

 

X

TZNTSTMPL

\-

\-

C1

X

X

TZNTSTMPS

\-

\-

C1

X

X

TZNZONE

\-

\-

C1

X

X

UCCHECK

\-

\-

C1

 

X

UKURS\_CURR

\-

\-

C1

X

USNAM

\-

\-

C1

X

X

UTCL

\-

\-

C1

X

X

UTF8STR\_FL

\-

\-

C1

 

X

UTF8STR\_N

\-

\-

C1

 

X

UTF8STR\_X

\-

\-

C1

 

X

UZAWE

\-

\-

C1

 

X

VALUEPART

\-

\-

C1

X

VALUT

\-

\-

C1

X

X

VBELN

\-

\-

C1

 

X

VBELN\_VA

\-

\-

C1

 

X

VKBUR

\-

\-

C1

 

X

VKGRP

\-

\-

C1

 

X

VKORG

\-

\-

C1

 

X

VOLEH

\-

\-

C1

 

X

VOLUM

\-

\-

C1

 

X

VORNR

\-

\-

C1

 

X

VPROZ

\-

\-

C1

 

X

VRKME

\-

\-

C1

 

X

VRTKZ

\-

\-

C1

 

X

VSBED

\-

\-

C1

 

X

VTWEG

\-

\-

C1

 

X

WAERK

\-

\-

C1

 

X

WAERS

\-

\-

C1

X

X

WAERS\_CURC

\-

\-

C1

X

WEBAZ

\-

\-

C1

 

X

WEEMG

\-

\-

C1

 

X

WEMPF

\-

\-

C1

 

X

WEPOS

\-

\-

C1

 

X

WERKS\_D

\-

\-

C1

X

X

WEUNB

\-

\-

C1

 

X

WF\_RESULT

\-

\-

C1

X

X

WLIEF

\-

\-

C1

 

X

WRBTR\_CS

\-

\-

C1

X

X

WWERT\_D

\-

\-

C1

X

X

XAUTO

\-

\-

C1

 

X

XREF1\_HD

\-

\-

C1

 

X

XREF2\_HD

\-

\-

C1

 

X

XSDANY

\-

\-

C1

X

XSDBOOLEAN

\-

\-

C1

X

X

XSDCURRCODE

\-

\-

C1

X

XSDDATETIME\_ISO

\-

\-

C1

X

XSDDATETIME\_LOCAL

\-

\-

C1

X

XSDDATETIME\_LOCAL\_DT

\-

\-

C1

X

XSDDATETIME\_LONG\_Z

\-

\-

C1

X

XSDDATETIME\_OFFSET

\-

\-

C1

X

XSDDATETIME\_Z

\-

\-

C1

X

XSDDATE\_D

\-

\-

C1

X

XSDDATE\_ISO

\-

\-

C1

X

XSDDURATION\_ISO

\-

\-

C1

X

XSDLANGUAGE

\-

\-

C1

X

XSDQNAME

\-

\-

C1

X

XSDTIME\_ISO

\-

\-

C1

X

XSDTIME\_T

\-

\-

C1

X

XSDUNITCODE

\-

\-

C1

X

XSDUUID\_BASE32

\-

\-

C1

X

XSDUUID\_BASE64

\-

\-

C1

X

XSDUUID\_CHAR

\-

\-

C1

X

XSDUUID\_RAW

\-

\-

C1

X

XSKRL

\-

\-

C1

 

X

ENHS - Enhancement Spot

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

/AIF/CHANGEABLE\_FIELDS

BADI\_DEF

/AIF/CHANGEABLE\_FIELDS

C1

 

X

BADI\_MATN1

BADI\_DEF

BADI\_MATN1

C1

X

ES\_BF\_PAYT\_SYST

BADI\_DEF

BADI\_BF\_PAYT\_SYST

C1

X

FS4BPU\_CUSTOMER\_ENHANCEMENTS

BADI\_DEF

FS4BPU\_B\_USER\_NAME\_ENH

C1

 

X

RSM\_ES\_RESPONSIBILITY\_RULE

BADI\_DEF

RSM\_BADI\_RESPONSIBILITY\_RULE

C1

 

X

SLIN\_SEC\_BADIS

BADI\_DEF

SLIN\_BADI\_DBTAB\_ACCESS

C1

X

SWF\_PROCESS\_WORKFLOW\_CONDITION

BADI\_DEF

SWF\_WORKFLOW\_CONDITION\_EVAL

C1

X

X

SWF\_PROCESS\_WORKFLOW\_CONDITION

BADI\_DEF

SWF\_WORKFLOW\_CONDITION\_DEF

C1

X

X

SWF\_WI\_FORWARD\_AGENTS\_GET

BADI\_DEF

SWF\_FORWARD\_AGENTS\_GET\_CUSTOM

C1

X

X

FDT0 - FDT/BRFplus: System Application

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

FDT\_SYSTEM

\-

\-

C1

X

X

FUGR - Function Group

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

BACV

FUNC

BAPI\_CONVERSION\_EXT2INT

C1

X

BACV

FUNC

BAPI\_CONVERSION\_INT2EXT1

C1

X

BACV

FUNC

BAPI\_CONVERSION\_INT2EXT

C1

X

BACV

FUNC

BAPI\_CONVERSION\_EXT2INT1

C1

X

BAPT

FUNC

BAPI\_TRANSACTION\_COMMIT

C1

X

BAPT

FUNC

BAPI\_TRANSACTION\_ROLLBACK

C1

X

BAPT

FUNC

BUFFER\_REFRESH\_ALL

C1

X

BAPT

FUNC

BUFFER\_SUBSCRIBE\_FOR\_REFRESH

C1

X

BAPT

FUNC

TRANSACTION\_ABORT

C1

X

BAPT

FUNC

TRANSACTION\_BEGIN

C1

X

BAPT

FUNC

TRANSACTION\_END

C1

X

BAPT

FUNC

TRANSACTION\_STATUS

C1

X

BASR

FUNC

BAPI\_MONITOR\_CHECKDOCU

C1

X

BATG

FUNC

BAPI\_MESSAGE\_GETDETAIL

C1

X

BATG

FUNC

BAPI\_INTERFACE\_GETDOCU

C1

X

BATG

FUNC

BAPI\_HYPERLINK\_GETTEXT

C1

X

BATG

FUNC

BAPI\_FIELDHELP\_GETDOCU

C1

X

BATG

FUNC

BAPI\_APPLICATIONLOG\_GETDETAIL

C1

X

BATG

FUNC

BALW\_CONVERT\_DOCU\_LINKS

C1

X

BFHV

FUNC

BAPI\_HELPVALUES\_GET

C1

X

BFHV

FUNC

BAPI\_HELPVALUES\_GET\_SEARCHHELP

C1

X

BFHV

FUNC

BF\_BAPI\_F4\_AUTHORITY

C1

X

BFRT

FUNC

BALW\_BAPIRETURN\_GET

C1

X

BFRT

FUNC

BALW\_BAPIRETURN\_GET1

C1

X

BFRT

FUNC

BALW\_BAPIRETURN\_GET2

C1

X

BFRT

FUNC

BALW\_RANGES\_CHECK

C1

X

BFRT

FUNC

BALW\_RET1\_TO\_RET2

C1

X

BFRT

FUNC

BALW\_RETURN\_TO\_RET2

C1

X

G4BA - SAP Gateway OData V4 Backend Service Group & Assigments

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

API\_BANK

G4S

SRVD\_A2X BANK 0001

C2

 

API\_BANK

G4S

SRVD\_A2X BANK 0002

C2

 

API\_BPGENDERVALUEHELP

G4S

SRVD\_A2X API\_BPGENDERVALUEHELP 0001

C2

 

API\_BUSINESSPARTNERGENDER

G4S

SRVD\_A2X BUSINESSPARTNERGENDER 0001

C2

 

API\_CITYCODE

G4S

SRVD\_A2X API\_CITYCODE 0001

C2

 

INTF - Interface (ABAP Objects)

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

/AIF/IF\_CHANGEABLE\_FIELDS

\-

\-

C1

 

X

/IWBEP/IF\_CP\_CLIENT\_PROXY

\-

\-

C1

X

/IWBEP/IF\_CP\_DATA\_DESC\_NODE

\-

\-

C1

X

/IWBEP/IF\_CP\_DATA\_DESC\_NODE\_L

\-

\-

C1

X

/IWBEP/IF\_CP\_EXPAND\_NODE

\-

\-

C1

X

/IWBEP/IF\_CP\_FILTER\_FACTORY

\-

\-

C1

X

/IWBEP/IF\_CP\_FILTER\_NODE

\-

\-

C1

X

/IWBEP/IF\_CP\_REQUEST\_BATCH

\-

\-

C1

X

/IWBEP/IF\_CP\_REQUEST\_BATCH\_OP

\-

\-

C1

X

/IWBEP/IF\_CP\_REQUEST\_CHANGESET

\-

\-

C1

X

/IWBEP/IF\_CP\_REQUEST\_CREATE

\-

\-

C1

X

/IWBEP/IF\_CP\_REQUEST\_DELETE

\-

\-

C1

X

/IWBEP/IF\_CP\_REQUEST\_FUNCTION

\-

\-

C1

X

/IWBEP/IF\_CP\_REQUEST\_READ

\-

\-

C1

X

/IWBEP/IF\_CP\_REQUEST\_READ\_01

\-

\-

C1

X

/IWBEP/IF\_CP\_REQUEST\_READ\_DLTA

\-

\-

C1

X

/IWBEP/IF\_CP\_REQUEST\_READ\_LIST

\-

\-

C1

X

/IWBEP/IF\_CP\_REQUEST\_UPDATE

\-

\-

C1

X

/IWBEP/IF\_CP\_REQUEST\_UPDATE\_L

\-

\-

C1

X

/IWBEP/IF\_CP\_RESOURCE\_ENTITY

\-

\-

C1

X

/IWBEP/IF\_CP\_RESOURCE\_ENTITY01

\-

\-

C1

X

/IWBEP/IF\_CP\_RESOURCE\_FUNCTION

\-

\-

C1

X

/IWBEP/IF\_CP\_RESOURCE\_LIST

\-

\-

C1

X

/IWBEP/IF\_CP\_RESPONSE\_CREATE

\-

\-

C1

X

/IWBEP/IF\_CP\_RESPONSE\_FUNCTION

\-

\-

C1

X

/IWBEP/IF\_CP\_RESPONSE\_READ

\-

\-

C1

X

/IWBEP/IF\_CP\_RESPONSE\_READ\_01

\-

\-

C1

X

/IWBEP/IF\_CP\_RESPONSE\_READ\_LST

\-

\-

C1

X

/IWBEP/IF\_CP\_RESPONSE\_UPDATE

\-

\-

C1

X

/IWBEP/IF\_CP\_RESPONSE\_UPDATE\_L

\-

\-

C1

X

/IWBEP/IF\_CP\_RUNTIME\_TYPES

\-

\-

C1

X

/IWBEP/IF\_CP\_SEARCH\_NODE

\-

\-

C1

X

IF\_ABAP\_API\_STATE

\-

\-

C1

X

IF\_ABAP\_BEHAVIOR\_TESTDOUBLE

\-

\-

C1

X

IF\_ABAP\_BEHV

\-

\-

C1

X

IF\_ABAP\_BEHV\_MESSAGE

\-

\-

C1

X

IF\_ABAP\_BEHV\_TEST\_ENVIRONMENT

\-

\-

C1

X

IF\_ABAP\_CLOSE\_RESOURCE

\-

\-

C1

X

IF\_ABAP\_CODEPAGE

\-

\-

C1

 

X

IF\_ABAP\_CONV\_IN

\-

\-

C1

X

X

IF\_ABAP\_CONV\_OUT

\-

\-

C1

X

X

IF\_ABAP\_C\_READER

\-

\-

C1

X

IF\_ABAP\_C\_WRITER

\-

\-

C1

X

IF\_ABAP\_DATA\_TYPE\_HANDLE

\-

\-

C1

X

IF\_ABAP\_DB\_BLOB\_HANDLE

\-

\-

C1

X

IF\_ABAP\_DB\_CLOB\_HANDLE

\-

\-

C1

X

IF\_ABAP\_DB\_LOB\_HANDLE

\-

\-

C1

X

IF\_ABAP\_DB\_READER

\-

\-

C1

X

IF\_ABAP\_DB\_WRITER

\-

\-

C1

X

IF\_ABAP\_GZIP\_BINARY\_HANDLER

\-

\-

C1

X

X

IF\_ABAP\_GZIP\_TEXT\_HANDLER

\-

\-

C1

X

X

IF\_ABAP\_LOCK\_OBJECT

\-

\-

C1

X

IF\_ABAP\_MATCHER\_CALLOUT

\-

\-

C1

X

X

IF\_ABAP\_PARALLEL

\-

\-

C1

X

IF\_ABAP\_READER

\-

\-

C1

X

IF\_ABAP\_RUNTIME

\-

\-

C1

 

X

IF\_ABAP\_RUNTIME\_MEASUREMENT

\-

\-

C1

 

X

IF\_ABAP\_RUNTIME\_RESULT

\-

\-

C1

 

X

IF\_ABAP\_RUNTIME\_RESULT\_METRIC

\-

\-

C1

 

X

IF\_ABAP\_RUNTIME\_SAMPLE

\-

\-

C1

 

X

IF\_ABAP\_RUNTIME\_TEST

\-

\-

C1

 

X

IF\_ABAP\_RUNTIME\_TEST\_RESULT

\-

\-

C1

 

X

IF\_ABAP\_RUNTIME\_TEST\_RUNNER

\-

\-

C1

 

X

IF\_ABAP\_TESTDOUBLE\_ANSWER

\-

\-

C1

X

IF\_ABAP\_TESTDOUBLE\_ARGUMENTS

\-

\-

C1

X

IF\_ABAP\_TESTDOUBLE\_CONFIG

\-

\-

C1

X

IF\_ABAP\_TESTDOUBLE\_HANDLE

\-

\-

C1

X

IF\_ABAP\_TESTDOUBLE\_MATCHER

\-

\-

C1

X

IF\_ABAP\_TESTDOUBLE\_RESULT

\-

\-

C1

X

IF\_ABAP\_TESTDOUBLE\_VERIFY

\-

\-

C1

X

IF\_ABAP\_TIMESTAMP\_UTIL

\-

\-

C1

 

X

IF\_ABAP\_UNGZIP\_BINARY\_HANDLER

\-

\-

C1

X

X

IF\_ABAP\_UNGZIP\_TEXT\_HANDLER

\-

\-

C1

X

X

IF\_ABAP\_UNIT\_CONSTANT

\-

\-

C1

X

X

IF\_ABAP\_WRITER

\-

\-

C1

X

IF\_ABAP\_X\_READER

\-

\-

C1

X

IF\_ABAP\_X\_WRITER

\-

\-

C1

X

IF\_ACO\_PROXY

\-

\-

C1

X

IF\_AI\_APPLICATION\_FAULT

\-

\-

C1

X

IF\_AMDP\_MARKER\_HDB

\-

\-

C1

X

IF\_APJ\_DT\_EXEC\_OBJECT

\-

\-

C1

X

IF\_APJ\_JT\_CHECK

\-

\-

C1

X

IF\_APJ\_RT\_EXEC\_OBJECT

\-

\-

C1

X

IF\_APJ\_TYPES

\-

\-

C1

X

IF\_AUNIT\_AUTHORITY\_OBJSET

\-

\-

C1

X

IF\_AUNIT\_AUTH\_CHECK\_CONTROLLER

\-

\-

C1

X

IF\_AUNIT\_AUTH\_CHECK\_RESULT\_LOG

\-

\-

C1

X

IF\_BADI\_CONTEXT

\-

\-

C1

X

IF\_BADI\_INTERFACE

\-

\-

C1

X

X

IF\_BALI\_CONSTANTS

\-

\-

C1

X

IF\_BALI\_EXCEPTION\_GETTER

\-

\-

C1

X

IF\_BALI\_EXCEPTION\_SETTER

\-

\-

C1

X

IF\_BALI\_FREE\_TEXT\_GETTER

\-

\-

C1

X

IF\_BALI\_FREE\_TEXT\_SETTER

\-

\-

C1

X

IF\_BALI\_HEADER\_GETTER

\-

\-

C1

X

IF\_BALI\_HEADER\_SETTER

\-

\-

C1

X

IF\_BALI\_ITEM\_GETTER

\-

\-

C1

X

IF\_BALI\_ITEM\_SETTER

\-

\-

C1

X

IF\_BALI\_LOG

\-

\-

C1

X

IF\_BALI\_LOG\_DB

\-

\-

C1

X

IF\_BALI\_LOG\_FILTER

\-

\-

C1

X

IF\_BALI\_MESSAGE\_GETTER

\-

\-

C1

X

IF\_BALI\_MESSAGE\_SETTER

\-

\-

C1

X

IF\_BALI\_OBJECT\_HANDLER

\-

\-

C1

X

IF\_BCFG\_CD\_CUST\_OBJECT\_SERVICE

\-

\-

C1

X

IF\_BCFG\_CD\_TRANSPORT\_MANAGER

\-

\-

C1

X

IF\_BCFG\_CD\_TRANSPORT\_RECORDER

\-

\-

C1

X

IF\_BCFG\_CD\_TRANSPORT\_SERVICE

\-

\-

C1

X

IF\_BF\_PAYT\_SYST

\-

\-

C1

X

IF\_BLE\_API\_MT\_TENANT

\-

\-

C1

X

IF\_BLE\_BADI\_MARKER\_INTERFACE

\-

\-

C1

 

X

IF\_BLE\_BADI\_RUNTIME

\-

\-

C1

 

X

IF\_BLE\_DT\_ROW\_ITERATOR

\-

\-

C1

 

X

IF\_BLE\_DYNAMIC\_TABLE

\-

\-

C1

 

X

IF\_CBO\_WRITE

\-

\-

C1

 

X

IF\_CBO\_WRITE\_NODE

\-

\-

C1

 

X

IF\_CDS\_ACCESS\_CONTROL\_DATA

\-

\-

C1

X

IF\_CDS\_ACCESS\_CONTROL\_DOUBLE

\-

\-

C1

X

IF\_CDS\_ENTITY\_INSPECTOR

\-

\-

C1

X

IF\_CDS\_NULL\_VALUES\_CONFIG

\-

\-

C1

X

IF\_CDS\_PARAMETER\_VALUES\_CONFIG

\-

\-

C1

X

IF\_CDS\_STUB

\-

\-

C1

X

IF\_CDS\_TEST\_DATA

\-

\-

C1

X

IF\_CDS\_TEST\_ENVIRONMENT

\-

\-

C1

X

IF\_CHDO\_ENHANCEMENTS

\-

\-

C1

X

IF\_CHDO\_OBJECT\_TOOLS\_REL

\-

\-

C1

X

IF\_CMIS\_CLIENT

\-

\-

C1

X

IF\_COM\_MANAGEMENT

\-

\-

C1

X

IF\_CONSTRAINT

\-

\-

C1

X

X

IF\_EX\_BADI\_MATN1

\-

\-

C1

X

IF\_FDT\_CP\_ACTIONS

\-

\-

C1

X

IF\_FDT\_CP\_ADMIN\_DATA

\-

\-

C1

X

IF\_FDT\_CP\_AST\_FACTORY

\-

\-

C1

X

IF\_FDT\_CP\_AST\_FUNCTION\_NODE

\-

\-

C1

X

IF\_FDT\_CP\_AST\_LITERAL\_NODE

\-

\-

C1

X

IF\_FDT\_CP\_AST\_NODE

\-

\-

C1

X

IF\_FDT\_CP\_AST\_REFERENCE\_NODE

\-

\-

C1

X

IF\_FDT\_CP\_DATA\_OBJECT

\-

\-

C1

X

IF\_FDT\_CP\_DATA\_OBJ\_ELEMENT

\-

\-

C1

X

IF\_FDT\_CP\_DATA\_OBJ\_STRUCTURE

\-

\-

C1

X

IF\_FDT\_CP\_DATA\_OBJ\_TABLE

\-

\-

C1

X

IF\_FDT\_CP\_DECISION\_TABLE

\-

\-

C1

X

IF\_FDT\_CP\_EXTERNAL\_TYPES

\-

\-

C1

X

IF\_FDT\_CP\_FACTORY

\-

\-

C1

X

IF\_FDT\_CP\_OPERATION\_CHECK

\-

\-

C1

X

IF\_FDT\_CP\_OPERATION\_DELETE

\-

\-

C1

X

IF\_FDT\_CP\_OPERATION\_DEPLOY

\-

\-

C1

X

IF\_FDT\_CP\_OP\_SAVE\_ACTIVATE

\-

\-

C1

X

IF\_FDT\_CP\_PROJECT

\-

\-

C1

X

IF\_FDT\_CP\_PROJECT\_SETTINGS

\-

\-

C1

X

IF\_FDT\_CP\_RULE

\-

\-

C1

X

IF\_FDT\_CP\_RULESERVICE

\-

\-

C1

X

IF\_FDT\_CP\_RULESERVICE\_VERSION

\-

\-

C1

X

IF\_FDT\_CP\_RULESET

\-

\-

C1

X

IF\_FDT\_CP\_TEXT\_RULE

\-

\-

C1

X

IF\_FDT\_CP\_VALIDATION\_OPERATION

\-

\-

C1

X

IF\_FDT\_CP\_VERSION\_GENERIC

\-

\-

C1

X

IF\_FDT\_RANGE

\-

\-

C1

 

X

IF\_FDT\_RULE

\-

\-

C1

 

X

IF\_FDT\_TYPES

\-

\-

C1

X

X

IF\_FS4BPU\_B\_USER\_NAME\_ENH

\-

\-

C1

 

X

IF\_HTTP\_SERVICE\_EXTENSION

\-

\-

C1

X

IF\_IXML\_ATTRIBUTE

\-

\-

C1

X

IF\_IXML\_ATTRIBUTE\_DECL

\-

\-

C1

X

IF\_IXML\_ATT\_LIST\_DECL

\-

\-

C1

X

IF\_IXML\_CDATA\_SECTION

\-

\-

C1

X

IF\_IXML\_CHARACTER\_DATA

\-

\-

C1

X

IF\_IXML\_COMMENT

\-

\-

C1

X

IF\_IXML\_COND\_DTD\_SECTION

\-

\-

C1

X

IF\_IXML\_CONTENT\_PARTICLE

\-

\-

C1

X

IF\_IXML\_CORE

\-

\-

C1

X

IF\_IXML\_DOCUMENT

\-

\-

C1

X

IF\_IXML\_DOCUMENT\_FRAGMENT

\-

\-

C1

X

IF\_IXML\_DOCUMENT\_TYPE

\-

\-

C1

X

IF\_IXML\_ELEMENT

\-

\-

C1

X

IF\_IXML\_ELEMENT\_DECL

\-

\-

C1

X

IF\_IXML\_ENCODING

\-

\-

C1

X

IF\_IXML\_ENTITY\_DECL

\-

\-

C1

X

IF\_IXML\_ENTITY\_REF

\-

\-

C1

X

IF\_IXML\_EVENT

\-

\-

C1

X

IF\_IXML\_INLINE\_ITERATOR

\-

\-

C1

X

IF\_IXML\_ISTREAM\_CORE

\-

\-

C1

X

IF\_IXML\_NAMED\_NODE\_MAP

\-

\-

C1

X

IF\_IXML\_NAMESPACE\_CONTEXT

\-

\-

C1

X

IF\_IXML\_NAMESPACE\_DECL

\-

\-

C1

X

IF\_IXML\_NODE

\-

\-

C1

X

IF\_IXML\_NODE\_COLLECTION

\-

\-

C1

X

IF\_IXML\_NODE\_FILTER

\-

\-

C1

X

IF\_IXML\_NODE\_ITERATOR

\-

\-

C1

X

IF\_IXML\_NODE\_LIST

\-

\-

C1

X

IF\_IXML\_NOTATION\_DECL

\-

\-

C1

X

IF\_IXML\_OSTREAM\_CORE

\-

\-

C1

X

IF\_IXML\_PARSER\_CORE

\-

\-

C1

X

IF\_IXML\_PARSE\_ERROR\_CORE

\-

\-

C1

X

IF\_IXML\_PI

\-

\-

C1

X

IF\_IXML\_PI\_PARSED

\-

\-

C1

X

IF\_IXML\_PI\_UNPARSED

\-

\-

C1

X

IF\_IXML\_RENDERER\_CORE

\-

\-

C1

X

IF\_IXML\_STREAM\_CORE

\-

\-

C1

X

IF\_IXML\_STREAM\_FACTORY\_CORE

\-

\-

C1

X

IF\_IXML\_TEXT

\-

\-

C1

X

IF\_IXML\_UNKNOWN

\-

\-

C1

X

IF\_IXML\_XPATH

\-

\-

C1

X

IF\_MBC\_CP\_API\_BUSINESS\_CONFIG

\-

\-

C1

X

IF\_MBC\_CP\_APP\_CONFIGURATION

\-

\-

C1

X

IF\_MBC\_CP\_RAP\_TABLE\_CTS

\-

\-

C1

X

IF\_MESSAGE

\-

\-

C1

X

X

IF\_OO\_ADT\_CLASSRUN

\-

\-

C1

X

X

IF\_OO\_ADT\_CLASSRUN\_OUT

\-

\-

C1

X

X

IF\_OSQL\_DOUBLE

\-

\-

C1

X

IF\_OSQL\_NULL\_VALUES\_CONFIG

\-

\-

C1

X

IF\_OSQL\_PARAM\_VALUES\_CONFIG

\-

\-

C1

X

IF\_OSQL\_STUB

\-

\-

C1

X

IF\_OSQL\_TEST\_DATA

\-

\-

C1

X

IF\_OSQL\_TEST\_ENVIRONMENT

\-

\-

C1

X

IF\_PROXY\_CLIENT

\-

\-

C1

X

IF\_PROXY\_DESTINATION

\-

\-

C1

X

IF\_RAP\_QUERY\_AGGREGATION

\-

\-

C1

X

IF\_RAP\_QUERY\_FILTER

\-

\-

C1

X

IF\_RAP\_QUERY\_FILTER\_TREE

\-

\-

C1

X

IF\_RAP\_QUERY\_FILTER\_TREE\_NODE

\-

\-

C1

X

IF\_RAP\_QUERY\_FILTER\_TREE\_TYPES

\-

\-

C1

X

IF\_RAP\_QUERY\_PAGING

\-

\-

C1

X

IF\_RAP\_QUERY\_PROVIDER

\-

\-

C1

X

IF\_RAP\_QUERY\_REQUEST

\-

\-

C1

X

IF\_RAP\_QUERY\_RESPONSE

\-

\-

C1

X

IF\_RFC\_DEST

\-

\-

C1

X

IF\_RSM\_BADI\_RESPONSIBILITY\_RUL

\-

\-

C1

 

X

IF\_SADL\_EXIT\_CALC\_ELEMENT\_READ

\-

\-

C1

X

IF\_SERIALIZABLE\_OBJECT

\-

\-

C1

X

IF\_SLIN\_BADI\_DBTAB\_ACCESS

\-

\-

C1

X

IF\_SLIN\_GOV\_DBTAB\_ACCESS

\-

\-

C1

X

IF\_SWF\_CPWF\_API

\-

\-

C1

X

IF\_SWF\_CPWF\_CALLBACK

\-

\-

C1

X

IF\_SWF\_CPWF\_CAPI

\-

\-

C1

X

IF\_SWF\_CPWF\_CAPI\_WF\_INST\_CTXT

\-

\-

C1

X

IF\_SWF\_CP\_JSON

\-

\-

C1

X

IF\_SWF\_FLEX\_IFS\_CONDITION\_DEF

\-

\-

C1

X

X

IF\_SWF\_FLEX\_IFS\_CONDITION\_EVAL

\-

\-

C1

X

X

IF\_SWF\_FLEX\_IFS\_WI\_FORWARD\_CUS

\-

\-

C1

X

X

IF\_SXML

\-

\-

C1

X

IF\_SXML\_ATTRIBUTE

\-

\-

C1

X

IF\_SXML\_CLOSE\_ELEMENT

\-

\-

C1

X

IF\_SXML\_NAMED

\-

\-

C1

X

IF\_SXML\_NODE

\-

\-

C1

X

IF\_SXML\_NSURI\_HELPER

\-

\-

C1

X

IF\_SXML\_OPEN\_ELEMENT

\-

\-

C1

X

IF\_SXML\_READER

\-

\-

C1

X

IF\_SXML\_VALUE

\-

\-

C1

X

IF\_SXML\_VALUE\_NODE

\-

\-

C1

X

IF\_SXML\_WRITER

\-

\-

C1

X

IF\_SYSTEM\_UUID

\-

\-

C1

X

X

IF\_SYSTEM\_UUID\_RFC4122\_STATIC

\-

\-

C1

X

X

IF\_SYSTEM\_UUID\_STATIC

\-

\-

C1

X

X

IF\_T100\_DYN\_MSG

\-

\-

C1

X

X

IF\_T100\_MESSAGE

\-

\-

C1

X

X

IF\_TEST\_DOUBLE\_CONSTANTS

\-

\-

C1

 

X

IF\_WEB\_HTTP\_HEADER

\-

\-

C1

X

IF\_WEB\_HTTP\_REQUEST

\-

\-

C1

X

IF\_WEB\_HTTP\_RESPONSE

\-

\-

C1

X

IF\_WEB\_HTTP\_STATUS

\-

\-

C1

X

IF\_WSPROTOCOL

\-

\-

C1

X

IF\_WS\_SERVER\_CONTEXT

\-

\-

C1

X

IF\_WS\_TRANSPORT\_BINDING

\-

\-

C1

X

IF\_XCO\_ABAP\_REPOSITORY

\-

\-

C1

X

IF\_XCO\_ABAP\_TOKEN

\-

\-

C1

X

IF\_XCO\_ACCESS\_CONTROL

\-

\-

C1

X

IF\_XCO\_ACCESS\_CONTROLS

\-

\-

C1

X

IF\_XCO\_ADT\_CLASSRUN\_OUT

\-

\-

C1

X

IF\_XCO\_AD\_BUILT\_IN\_TYPE\_RFRNC

\-

\-

C1

X

IF\_XCO\_AD\_DATA\_ELEMENT

\-

\-

C1

X

IF\_XCO\_AD\_DATA\_ELEMENTS

\-

\-

C1

X

IF\_XCO\_AD\_DATA\_TYPE

\-

\-

C1

X

IF\_XCO\_AD\_DATA\_TYPE\_REFERENCE

\-

\-

C1

X

IF\_XCO\_AD\_OBJECT

\-

\-

C1

X

IF\_XCO\_AD\_REFERENCE\_TYPE\_FCTRY

\-

\-

C1

X

IF\_XCO\_AD\_STRUCTURE

\-

\-

C1

X

IF\_XCO\_AD\_STRUCTURES

\-

\-

C1

X

IF\_XCO\_AD\_TABLE

\-

\-

C1

X

IF\_XCO\_AD\_TABLES

\-

\-

C1

X

IF\_XCO\_AD\_TABLE\_TYPE

\-

\-

C1

X

IF\_XCO\_AD\_TABLE\_TYPES

\-

\-

C1

X

IF\_XCO\_AO\_CLASS

\-

\-

C1

X

IF\_XCO\_AO\_CLASSES

\-

\-

C1

X

IF\_XCO\_AO\_C\_ALIAS

\-

\-

C1

X

IF\_XCO\_AO\_C\_ALIASES

\-

\-

C1

X

IF\_XCO\_AO\_C\_ALIAS\_CONTENT

\-

\-

C1

X

IF\_XCO\_AO\_C\_ALIAS\_FACTORY

\-

\-

C1

X

IF\_XCO\_AO\_C\_CLASS\_DATA

\-

\-

C1

X

IF\_XCO\_AO\_C\_CLASS\_DATAS

\-

\-

C1

X

IF\_XCO\_AO\_C\_CLASS\_DATA\_CONTENT

\-

\-

C1

X

IF\_XCO\_AO\_C\_CLASS\_DATA\_FACTORY

\-

\-

C1

X

IF\_XCO\_AO\_C\_CONSTANT

\-

\-

C1

X

IF\_XCO\_AO\_C\_CONSTANTS

\-

\-

C1

X

IF\_XCO\_AO\_C\_CONSTANT\_CONTENT

\-

\-

C1

X

IF\_XCO\_AO\_C\_CONSTANT\_FACTORY

\-

\-

C1

X

IF\_XCO\_AO\_C\_DATA

\-

\-

C1

X

IF\_XCO\_AO\_C\_DATAS

\-

\-

C1

X

IF\_XCO\_AO\_C\_DATA\_CONTENT

\-

\-

C1

X

IF\_XCO\_AO\_C\_DATA\_FACTORY

\-

\-

C1

X

IF\_XCO\_AO\_C\_METHOD

\-

\-

C1

X

IF\_XCO\_AO\_C\_TYPE

\-

\-

C1

X

IF\_XCO\_AO\_C\_TYPES

\-

\-

C1

X

IF\_XCO\_AO\_C\_TYPE\_CONTENT

\-

\-

C1

X

IF\_XCO\_AO\_C\_TYPE\_FACTORY

\-

\-

C1

X

IF\_XCO\_AO\_INTERFACE

\-

\-

C1

X

IF\_XCO\_AO\_INTERFACES

\-

\-

C1

X

IF\_XCO\_AO\_OBJECT

\-

\-

C1

X

IF\_XCO\_AO\_S\_EXCEPTION

\-

\-

C1

X

IF\_XCO\_AO\_S\_EXCEPTIONS

\-

\-

C1

X

IF\_XCO\_AO\_S\_EXCEPTIONS\_FACTORY

\-

\-

C1

X

IF\_XCO\_AO\_S\_EXCEPTION\_CONTENT

\-

\-

C1

X

IF\_XCO\_AO\_S\_P\_CHANGING

\-

\-

C1

X

IF\_XCO\_AO\_S\_P\_CHANGINGS

\-

\-

C1

X

IF\_XCO\_AO\_S\_P\_CHANGINGS\_FCTRY

\-

\-

C1

X

IF\_XCO\_AO\_S\_P\_CHANGING\_CONTENT

\-

\-

C1

X

IF\_XCO\_AO\_S\_P\_EXPORTING

\-

\-

C1

X

IF\_XCO\_AO\_S\_P\_EXPORTINGS

\-

\-

C1

X

IF\_XCO\_AO\_S\_P\_EXPORTINGS\_FCTRY

\-

\-

C1

X

IF\_XCO\_AO\_S\_P\_EXPORTING\_CONTNT

\-

\-

C1

X

IF\_XCO\_AO\_S\_P\_IMPORTING

\-

\-

C1

X

IF\_XCO\_AO\_S\_P\_IMPORTINGS

\-

\-

C1

X

IF\_XCO\_AO\_S\_P\_IMPORTINGS\_FCTRY

\-

\-

C1

X

IF\_XCO\_AO\_S\_P\_IMPORTING\_CONTNT

\-

\-

C1

X

IF\_XCO\_AO\_S\_P\_RETURNING

\-

\-

C1

X

IF\_XCO\_AO\_S\_P\_RETURNINGS

\-

\-

C1

X

IF\_XCO\_AO\_S\_P\_RETURNINGS\_FCTRY

\-

\-

C1

X

IF\_XCO\_AO\_S\_P\_RETURNING\_CONTNT

\-

\-

C1

X

IF\_XCO\_AO\_TYPE

\-

\-

C1

X

IF\_XCO\_AO\_TYPE\_REFERENCE

\-

\-

C1

X

IF\_XCO\_AO\_TYPING\_DEFINITION

\-

\-

C1

X

IF\_XCO\_APLO\_CONTENT

\-

\-

C1

X

IF\_XCO\_APLO\_SUBOBJECT

\-

\-

C1

X

IF\_XCO\_APLO\_SUBOBJECTS

\-

\-

C1

X

IF\_XCO\_APLO\_SUBOBJECTS\_FACTORY

\-

\-

C1

X

IF\_XCO\_APLO\_SUBOBJECT\_CONTENT

\-

\-

C1

X

IF\_XCO\_APPEND\_STRUCTURE

\-

\-

C1

X

IF\_XCO\_APPEND\_STRUCTURES

\-

\-

C1

X

IF\_XCO\_APPLICATION\_COMPONENT

\-

\-

C1

X

IF\_XCO\_APPLICATION\_LOG\_OBJECT

\-

\-

C1

X

IF\_XCO\_APPLICATION\_LOG\_OBJECTS

\-

\-

C1

X

IF\_XCO\_APS\_COMPONENT

\-

\-

C1

X

IF\_XCO\_APS\_COMPONENTS

\-

\-

C1

X

IF\_XCO\_APS\_COMPONENTS\_FACTORY

\-

\-

C1

X

IF\_XCO\_APS\_COMPONENT\_CONTENT

\-

\-

C1

X

IF\_XCO\_APS\_COMPONENT\_TYPE

\-

\-

C1

X

IF\_XCO\_APS\_CONTENT

\-

\-

C1

X

IF\_XCO\_APS\_FOREIGN\_KEY

\-

\-

C1

X

IF\_XCO\_APS\_FOREIGN\_KEY\_CONTENT

\-

\-

C1

X

IF\_XCO\_APS\_SEARCH\_HELP

\-

\-

C1

X

IF\_XCO\_APS\_SEARCH\_HELP\_CONTENT

\-

\-

C1

X

IF\_XCO\_AR\_APLO\_OBJECT\_CLASS

\-

\-

C1

X

IF\_XCO\_AR\_APLO\_OBJECT\_FACTORY

\-

\-

C1

X

IF\_XCO\_AR\_BDEF\_OBJECT\_CLASS

\-

\-

C1

X

IF\_XCO\_AR\_BDEF\_OBJECT\_FACTORY

\-

\-

C1

X

IF\_XCO\_AR\_CLAS\_OBJECT\_CLASS

\-

\-

C1

X

IF\_XCO\_AR\_CLAS\_OBJECT\_FACTORY

\-

\-

C1

X

IF\_XCO\_AR\_DCLS\_OBJECT\_CLASS

\-

\-

C1

X

IF\_XCO\_AR\_DCLS\_OBJECT\_FACTORY

\-

\-

C1

X

IF\_XCO\_AR\_DDLS\_OBJECT\_CLASS

\-

\-

C1

X

IF\_XCO\_AR\_DDLS\_OBJECT\_FACTORY

\-

\-

C1

X

IF\_XCO\_AR\_DDLX\_OBJECT\_CLASS

\-

\-

C1

X

IF\_XCO\_AR\_DDLX\_OBJECT\_FACTORY

\-

\-

C1

X

IF\_XCO\_AR\_DEVC\_OBJECT\_CLASS

\-

\-

C1

X

IF\_XCO\_AR\_DEVC\_OBJECT\_FACTORY

\-

\-

C1

X

IF\_XCO\_AR\_DOMA\_OBJECT\_CLASS

\-

\-

C1

X

IF\_XCO\_AR\_DOMA\_OBJECT\_FACTORY

\-

\-

C1

X

IF\_XCO\_AR\_DTEL\_OBJECT\_CLASS

\-

\-

C1

X

IF\_XCO\_AR\_DTEL\_OBJECT\_FACTORY

\-

\-

C1

X

IF\_XCO\_AR\_FILTER

\-

\-

C1

X

IF\_XCO\_AR\_FUGR\_OBJECT\_CLASS

\-

\-

C1

X

IF\_XCO\_AR\_FUGR\_OBJECT\_FACTORY

\-

\-

C1

X

IF\_XCO\_AR\_INTF\_OBJECT\_CLASS

\-

\-

C1

X

IF\_XCO\_AR\_INTF\_OBJECT\_FACTORY

\-

\-

C1

X

IF\_XCO\_AR\_MSAG\_OBJECT\_CLASS

\-

\-

C1

X

IF\_XCO\_AR\_MSAG\_OBJECT\_FACTORY

\-

\-

C1

X

IF\_XCO\_AR\_OBJECT

\-

\-

C1

X

IF\_XCO\_AR\_OBJECTS

\-

\-

C1

X

IF\_XCO\_AR\_OBJECT\_CLASS

\-

\-

C1

X

IF\_XCO\_AR\_OBJECT\_NAME

\-

\-

C1

X

IF\_XCO\_AR\_OBJECT\_SOURCE

\-

\-

C1

X

IF\_XCO\_AR\_OBJECT\_TYPE

\-

\-

C1

X

IF\_XCO\_AR\_SMBC\_OBJECT\_CLASS

\-

\-

C1

X

IF\_XCO\_AR\_SMBC\_OBJECT\_FACTORY

\-

\-

C1

X

IF\_XCO\_AR\_SRVB\_OBJECT\_CLASS

\-

\-

C1

X

IF\_XCO\_AR\_SRVB\_OBJECT\_FACTORY

\-

\-

C1

X

IF\_XCO\_AR\_SRVD\_OBJECT\_CLASS

\-

\-

C1

X

IF\_XCO\_AR\_SRVD\_OBJECT\_FACTORY

\-

\-

C1

X

IF\_XCO\_AR\_STOB\_OBJECT\_FACTORY

\-

\-

C1

X

IF\_XCO\_AR\_TABL\_API\_OBJECT

\-

\-

C1

X

IF\_XCO\_AR\_TABL\_APS\_OBJ\_CLASS

\-

\-

C1

X

IF\_XCO\_AR\_TABL\_APS\_OBJ\_FACTORY

\-

\-

C1

X

IF\_XCO\_AR\_TABL\_DBT\_OBJ\_CLASS

\-

\-

C1

X

IF\_XCO\_AR\_TABL\_DBT\_OBJ\_FACTORY

\-

\-

C1

X

IF\_XCO\_AR\_TABL\_GTT\_OBJ\_CLASS

\-

\-

C1

X

IF\_XCO\_AR\_TABL\_GTT\_OBJ\_FACTORY

\-

\-

C1

X

IF\_XCO\_AR\_TABL\_OBJECT\_CLASS

\-

\-

C1

X

IF\_XCO\_AR\_TABL\_STR\_OBJ\_CLASS

\-

\-

C1

X

IF\_XCO\_AR\_TABL\_STR\_OBJ\_FACTORY

\-

\-

C1

X

IF\_XCO\_AR\_TTYP\_OBJECT\_CLASS

\-

\-

C1

X

IF\_XCO\_AR\_TTYP\_OBJECT\_FACTORY

\-

\-

C1

X

IF\_XCO\_AR\_XSLT\_OBJECT\_CLASS

\-

\-

C1

X

IF\_XCO\_AR\_XSLT\_OBJECT\_FACTORY

\-

\-

C1

X

IF\_XCO\_BAL\_LOG\_FILTER

\-

\-

C1

X

IF\_XCO\_BEHAVIOR\_DEFINITION

\-

\-

C1

X

IF\_XCO\_BEHAVIOR\_DEFINITIONS

\-

\-

C1

X

IF\_XCO\_BEHAVIOR\_DEFINITION\_CO

\-

\-

C1

X

IF\_XCO\_BIMP\_TD\_TABLE

\-

\-

C1

X

IF\_XCO\_BIMP\_TD\_TABLE\_F

\-

\-

C1

X

IF\_XCO\_BIMP\_TYPE\_DECLARATION\_F

\-

\-

C1

X

IF\_XCO\_BINARY\_TEXT\_ENCODING

\-

\-

C1

X

X

IF\_XCO\_BUSINESS\_CNFGRTN\_OBJCT

\-

\-

C1

X

IF\_XCO\_BUSINESS\_CNFGRTN\_OBJCTS

\-

\-

C1

X

IF\_XCO\_CDS\_ABSTRACT\_ENTITY

\-

\-

C1

X

IF\_XCO\_CDS\_ABSTRACT\_ENTITY\_CON

\-

\-

C1

X

IF\_XCO\_CDS\_ANNOTATION

\-

\-

C1

X

IF\_XCO\_CDS\_ANNOTATIONS

\-

\-

C1

X

IF\_XCO\_CDS\_ANN\_FILTER

\-

\-

C1

X

IF\_XCO\_CDS\_ANN\_TARGET

\-

\-

C1

X

IF\_XCO\_CDS\_ANN\_VALUE

\-

\-

C1

X

IF\_XCO\_CDS\_ANN\_VALUE\_FACTORY

\-

\-

C1

X

IF\_XCO\_CDS\_ANN\_VAL\_PRIMITIVE

\-

\-

C1

X

IF\_XCO\_CDS\_ANN\_VAL\_P\_BOOLEAN

\-

\-

C1

X

IF\_XCO\_CDS\_ANN\_VAL\_P\_ENUM

\-

\-

C1

X

IF\_XCO\_CDS\_ANN\_VAL\_P\_NULL

\-

\-

C1

X

IF\_XCO\_CDS\_ANN\_VAL\_P\_NUMBER

\-

\-

C1

X

IF\_XCO\_CDS\_ANN\_VAL\_P\_STRING

\-

\-

C1

X

IF\_XCO\_CDS\_ANN\_VT\_VISITOR

\-

\-

C1

X

IF\_XCO\_CDS\_ASSOCIATION

\-

\-

C1

X

IF\_XCO\_CDS\_ASSOCIATIONS

\-

\-

C1

X

IF\_XCO\_CDS\_ASSOCIATIONS\_FCTRY

\-

\-

C1

X

IF\_XCO\_CDS\_ASSOCIATION\_CONTENT

\-

\-

C1

X

IF\_XCO\_CDS\_COMPOSITION

\-

\-

C1

X

IF\_XCO\_CDS\_COMPOSITIONS

\-

\-

C1

X

IF\_XCO\_CDS\_COMPOSITIONS\_FCTRY

\-

\-

C1

X

IF\_XCO\_CDS\_COMPOSITION\_CONTENT

\-

\-

C1

X

IF\_XCO\_CDS\_CUSTOM\_ENTITY

\-

\-

C1

X

IF\_XCO\_CDS\_CUSTOM\_ENTITY\_CONT

\-

\-

C1

X

IF\_XCO\_CDS\_ENTITIES

\-

\-

C1

X

IF\_XCO\_CDS\_ENTITY

\-

\-

C1

X

IF\_XCO\_CDS\_FIELD

\-

\-

C1

X

IF\_XCO\_CDS\_FIELDS

\-

\-

C1

X

IF\_XCO\_CDS\_FIELDS\_FACTORY

\-

\-

C1

X

IF\_XCO\_CDS\_FIELD\_CONTENT

\-

\-

C1

X

IF\_XCO\_CDS\_FIELD\_TYPE

\-

\-

C1

X

IF\_XCO\_CDS\_PARAMETER

\-

\-

C1

X

IF\_XCO\_CDS\_PARAMETERS

\-

\-

C1

X

IF\_XCO\_CDS\_PARAMETERS\_FCTRY

\-

\-

C1

X

IF\_XCO\_CDS\_PARAMETER\_CONTENT

\-

\-

C1

X

IF\_XCO\_CDS\_PARAMETER\_DATA\_TYPE

\-

\-

C1

X

IF\_XCO\_CDS\_PROJECTION\_VIEW

\-

\-

C1

X

IF\_XCO\_CDS\_PROJECTION\_VIEW\_CO

\-

\-

C1

X

IF\_XCO\_CDS\_TABLE\_FUNCTION

\-

\-

C1

X

IF\_XCO\_CDS\_TABLE\_FUNCTION\_CONT

\-

\-

C1

X

IF\_XCO\_CDS\_UNION

\-

\-

C1

X

IF\_XCO\_CDS\_UNION\_CONTENT

\-

\-

C1

X

IF\_XCO\_CDS\_VIEW

\-

\-

C1

X

IF\_XCO\_CDS\_VIEW\_CONTENT

\-

\-

C1

X

IF\_XCO\_CDS\_VIEW\_ENTITY

\-

\-

C1

X

IF\_XCO\_CDS\_VIEW\_ENTITY\_CONTENT

\-

\-

C1

X

IF\_XCO\_CLAS\_COMPONENTS\_FACTORY

\-

\-

C1

X

IF\_XCO\_CLAS\_COMPONENT\_FACTORY

\-

\-

C1

X

IF\_XCO\_CLAS\_CONTENT

\-

\-

C1

X

IF\_XCO\_CLAS\_C\_METHOD

\-

\-

C1

X

IF\_XCO\_CLAS\_C\_METHODS

\-

\-

C1

X

IF\_XCO\_CLAS\_C\_METHODS\_FACTORY

\-

\-

C1

X

IF\_XCO\_CLAS\_C\_METHOD\_CONTENT

\-

\-

C1

X

IF\_XCO\_CLAS\_DEFINITION

\-

\-

C1

X

IF\_XCO\_CLAS\_DEFINITION\_CONTENT

\-

\-

C1

X

IF\_XCO\_CLAS\_DEFINITION\_SECTION

\-

\-

C1

X

IF\_XCO\_CLAS\_IMPLEMENTATION

\-

\-

C1

X

IF\_XCO\_CLAS\_I\_METHOD

\-

\-

C1

X

IF\_XCO\_CLAS\_I\_METHOD\_CONTENT

\-

\-

C1

X

IF\_XCO\_CP\_APPLICATION\_CPNT\_FCT

\-

\-

C1

X

IF\_XCO\_CP\_AR\_API\_OBJECT

\-

\-

C1

X

IF\_XCO\_CP\_AR\_API\_OBJECTS

\-

\-

C1

X

IF\_XCO\_CP\_AR\_API\_OBJECT\_NAME

\-

\-

C1

X

IF\_XCO\_CP\_AR\_API\_OBJECT\_TYPE

\-

\-

C1

X

IF\_XCO\_CP\_AR\_APLO\_OC\_FACTORY

\-

\-

C1

X

IF\_XCO\_CP\_AR\_BDEF\_OC\_FACTORY

\-

\-

C1

X

IF\_XCO\_CP\_AR\_CLAS\_OC\_FACTORY

\-

\-

C1

X

IF\_XCO\_CP\_AR\_DCLS\_OC\_FACTORY

\-

\-

C1

X

IF\_XCO\_CP\_AR\_DDLS\_OC\_FACTORY

\-

\-

C1

X

IF\_XCO\_CP\_AR\_DDLX\_OC\_FACTORY

\-

\-

C1

X

IF\_XCO\_CP\_AR\_DEVC\_OC\_FACTORY

\-

\-

C1

X

IF\_XCO\_CP\_AR\_DOMA\_OC\_FACTORY

\-

\-

C1

X

IF\_XCO\_CP\_AR\_DTEL\_OC\_FACTORY

\-

\-

C1

X

IF\_XCO\_CP\_AR\_FILTER\_FACTORY

\-

\-

C1

X

IF\_XCO\_CP\_AR\_FUGR\_OC\_FACTORY

\-

\-

C1

X

IF\_XCO\_CP\_AR\_INTF\_OC\_FACTORY

\-

\-

C1

X

IF\_XCO\_CP\_AR\_MSAG\_OC\_FACTORY

\-

\-

C1

X

IF\_XCO\_CP\_AR\_SMBC\_OC\_FACTORY

\-

\-

C1

X

IF\_XCO\_CP\_AR\_SRVB\_OC\_FACTORY

\-

\-

C1

X

IF\_XCO\_CP\_AR\_SRVD\_OC\_FACTORY

\-

\-

C1

X

IF\_XCO\_CP\_AR\_STOB\_OBJECT\_CLASS

\-

\-

C1

X

IF\_XCO\_CP\_AR\_STOB\_OC\_FACTORY

\-

\-

C1

X

IF\_XCO\_CP\_AR\_TABL\_APS\_OC\_FCTRY

\-

\-

C1

X

IF\_XCO\_CP\_AR\_TABL\_DBT\_OC\_FCTRY

\-

\-

C1

X

IF\_XCO\_CP\_AR\_TABL\_GTT\_OC\_FCTRY

\-

\-

C1

X

IF\_XCO\_CP\_AR\_TABL\_OC\_FACTORY

\-

\-

C1

X

IF\_XCO\_CP\_AR\_TABL\_STR\_OC\_FCTRY

\-

\-

C1

X

IF\_XCO\_CP\_AR\_TTYP\_OC\_FACTORY

\-

\-

C1

X

IF\_XCO\_CP\_AR\_XSLT\_OC\_FACTORY

\-

\-

C1

X

IF\_XCO\_CP\_BAL\_EXC\_ADDITION

\-

\-

C1

X

IF\_XCO\_CP\_BAL\_EXC\_ADDITION\_FCT

\-

\-

C1

X

IF\_XCO\_CP\_BAL\_EXC\_DESCENT

\-

\-

C1

X

IF\_XCO\_CP\_BAL\_EXC\_DESCENT\_FCT

\-

\-

C1

X

IF\_XCO\_CP\_BAL\_LOG

\-

\-

C1

X

IF\_XCO\_CP\_BAL\_LOGS

\-

\-

C1

X

IF\_XCO\_CP\_BAL\_LOGS\_FACTORY

\-

\-

C1

X

IF\_XCO\_CP\_BAL\_LOG\_EXCEPTION

\-

\-

C1

X

IF\_XCO\_CP\_BAL\_LOG\_EXCEPTIONS

\-

\-

C1

X

IF\_XCO\_CP\_BAL\_LOG\_EXCEPTIONS\_F

\-

\-

C1

X

IF\_XCO\_CP\_BAL\_LOG\_FACTORY

\-

\-

C1

X

IF\_XCO\_CP\_BAL\_LOG\_FILTER\_FCTRY

\-

\-

C1

X

IF\_XCO\_CP\_BAL\_LOG\_HEADER

\-

\-

C1

X

IF\_XCO\_CP\_BAL\_LOG\_MESSAGE

\-

\-

C1

X

IF\_XCO\_CP\_BAL\_LOG\_MESSAGES

\-

\-

C1

X

IF\_XCO\_CP\_BAL\_LOG\_MESSAGES\_FCT

\-

\-

C1

X

IF\_XCO\_CP\_BAL\_PERSISTENCE

\-

\-

C1

X

IF\_XCO\_CP\_BAL\_PERSISTENCE\_FCT

\-

\-

C1

X

IF\_XCO\_CP\_BAL\_PROFILE

\-

\-

C1

X

IF\_XCO\_CP\_BAL\_PROFILE\_FACTORY

\-

\-

C1

X

IF\_XCO\_CP\_BAL\_SOURCE

\-

\-

C1

X

IF\_XCO\_CP\_BAL\_SOURCE\_FACTORY

\-

\-

C1

X

IF\_XCO\_CP\_BINARY\_TXT\_ENC\_FCTRY

\-

\-

C1

X

IF\_XCO\_CP\_CDS\_API\_ANNOTATIONS

\-

\-

C1

X

IF\_XCO\_CP\_CTS\_CHANGE\_SCNR\_FCT

\-

\-

C1

X

IF\_XCO\_CP\_DATA\_OBJECT\_FACTORY

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_BDEF\_D\_API

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_BDEF\_D\_O\_DELETE

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_BDEF\_D\_O\_PUT\_OBJ

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_BDEF\_D\_O\_PUT\_SCT

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_BDEF\_S\_FORM

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_CLAS\_D\_API

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_CLAS\_D\_O\_DELETE

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_CLAS\_D\_O\_PATCH

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_CLAS\_D\_O\_PAT\_OBJ

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_CLAS\_D\_O\_PUT\_OBJ

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_CLAS\_D\_O\_PUT\_SCT

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_CLAS\_O\_PAT\_OBJ\_D

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_CLAS\_O\_PAT\_O\_D\_S

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_CLAS\_S\_DE\_D\_SECT

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_CLAS\_S\_FORM

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_CLAS\_S\_IN\_D\_SECT

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_DCLS\_D\_API

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_DCLS\_D\_O\_DELETE

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_DCLS\_D\_O\_PUT

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_DCLS\_D\_O\_PUT\_OBJ

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_DCLS\_D\_O\_PUT\_SCT

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_DCLS\_S\_FORM

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_DDLS\_D\_API

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_DDLS\_D\_O\_DELETE

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_DDLS\_D\_O\_PUT\_OBJ

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_DDLS\_D\_O\_PUT\_SCT

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_DDLS\_S\_FORM

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_DDLX\_D\_API

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_DDLX\_D\_O\_DELETE

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_DDLX\_D\_O\_PUT\_OBJ

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_DDLX\_D\_O\_PUT\_SCT

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_DDLX\_S\_FORM

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_DEVC\_D\_API

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_DEVC\_D\_O\_DELETE

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_DEVC\_D\_O\_PUT

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_DEVC\_D\_O\_PUT\_OBJ

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_DEVC\_S\_FORM

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_DEVC\_S\_FO\_PROPER

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_DOMA\_D\_API

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_DOMA\_D\_O\_DELETE

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_DOMA\_D\_O\_PUT\_OBJ

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_DOMA\_D\_O\_PUT\_SCT

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_DOMA\_S\_FORM

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_DOMA\_TEMPLATE

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_DOMA\_TEMPLATE\_FY

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_DTEL\_D\_API

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_DTEL\_D\_O\_DELETE

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_DTEL\_D\_O\_PUT\_OBJ

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_DTEL\_D\_O\_PUT\_SCT

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_DTEL\_S\_FORM

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_DTEL\_TEMPLATE

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_DTEL\_TEMPLATE\_FY

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_D\_O\_PUT

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_D\_O\_PUT\_OPTION

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_ENV\_DEV\_SYSTEM

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_ENV\_FACTORY

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_FUGR\_D\_API

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_FUGR\_D\_O\_DELETE

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_FUGR\_D\_O\_PATCH

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_FUGR\_D\_O\_PATCH\_O

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_FUGR\_D\_O\_POST

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_FUGR\_D\_O\_POST\_O

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_FUGR\_S\_DELETE

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_FUGR\_S\_FORM

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_FUGR\_S\_INSERT

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_INTF\_D\_API

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_INTF\_D\_O\_DELETE

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_INTF\_D\_O\_PATCH

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_INTF\_D\_O\_PATCH\_O

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_INTF\_D\_O\_PUT\_OBJ

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_INTF\_D\_O\_PUT\_SCT

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_INTF\_S\_DELETE

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_INTF\_S\_FORM

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_INTF\_S\_INSERT

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_MSAG\_D\_API

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_MSAG\_D\_O\_DELETE

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_MSAG\_D\_O\_PATCH

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_MSAG\_D\_O\_PATCH\_O

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_MSAG\_D\_O\_PUT

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_MSAG\_D\_O\_PUT\_OBJ

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_MSAG\_S\_DELETE

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_MSAG\_S\_FORM

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_MSAG\_S\_FO\_MSG

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_MSAG\_S\_INSERT

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_MSAG\_S\_IN\_MSG

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_MSAG\_S\_MODIFY

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_MSAG\_S\_MO\_MSG

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_MSAG\_S\_UPDATE

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_MSAG\_S\_UP\_MSG

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_O\_DELETE

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_O\_POST

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_O\_PUT

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_O\_PUT\_OPTION\_FCT

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_SRVB\_D\_API

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_SRVB\_D\_O\_DELETE

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_SRVB\_D\_O\_PUT

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_SRVB\_D\_O\_PUT\_OBJ

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_SRVB\_D\_O\_PUT\_SCT

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_SRVB\_S\_FORM

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_SRVD\_D\_API

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_SRVD\_D\_O\_DELETE

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_SRVD\_D\_O\_PUT\_OBJ

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_SRVD\_D\_O\_PUT\_SCT

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_SRVD\_S\_FORM

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_TABL\_DBT\_API

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_TABL\_DBT\_DOPU\_SC

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_TABL\_DBT\_D\_API

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_TABL\_DBT\_D\_O\_DEL

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_TABL\_DBT\_D\_O\_P\_O

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_TABL\_DBT\_S\_FORM

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_TABL\_DBT\_TMPLT

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_TABL\_DBT\_TMPLT\_F

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_TABL\_GTT\_DOPU\_SC

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_TABL\_GTT\_D\_API

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_TABL\_GTT\_D\_O\_DEL

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_TABL\_GTT\_D\_O\_P\_O

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_TABL\_GTT\_S\_FORM

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_TABL\_STR\_API

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_TABL\_STR\_DOPU\_SC

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_TABL\_STR\_D\_API

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_TABL\_STR\_D\_O\_DEL

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_TABL\_STR\_D\_O\_P\_O

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_TABL\_STR\_S\_FORM

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_TABL\_STR\_TMPLT

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_TABL\_STR\_TMPLT\_F

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_TTYP\_D\_API

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_TTYP\_D\_O\_DELETE

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_TTYP\_D\_O\_PUT\_OBJ

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_TTYP\_D\_O\_PUT\_SCT

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_TTYP\_S\_FORM

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_TTYP\_TEMPLATE

\-

\-

C1

X

IF\_XCO\_CP\_GEN\_TTYP\_TEMPLATE\_FY

\-

\-

C1

X

IF\_XCO\_CP\_I18N\_ALO\_TARGT\_FCTRY

\-

\-

C1

X

IF\_XCO\_CP\_I18N\_BCO\_TARGT\_FCTRY

\-

\-

C1

X

IF\_XCO\_CP\_I18N\_DD\_TARGET\_FCTRY

\-

\-

C1

X

IF\_XCO\_CP\_I18N\_DE\_TARGET\_FCTRY

\-

\-

C1

X

IF\_XCO\_CP\_I18N\_DM\_TARGET\_FCTRY

\-

\-

C1

X

IF\_XCO\_CP\_I18N\_MC\_TARGET\_FCTRY

\-

\-

C1

X

IF\_XCO\_CP\_I18N\_ME\_TARGET\_FCTRY

\-

\-

C1

X

IF\_XCO\_CP\_I18N\_TARGET\_FACTORY

\-

\-

C1

X

IF\_XCO\_CP\_I18N\_TT\_TARGET\_FCTRY

\-

\-

C1

X

IF\_XCO\_CP\_JSON\_DATA

\-

\-

C1

X

IF\_XCO\_CP\_JSON\_DATA\_BUILDER

\-

\-

C1

X

IF\_XCO\_CP\_JSON\_DATA\_FACTORY

\-

\-

C1

X

IF\_XCO\_CP\_JSON\_TRNSFRMTN\_FCTRY

\-

\-

C1

X

IF\_XCO\_CP\_LANG\_FORMAT\_FACTORY

\-

\-

C1

X

IF\_XCO\_CP\_NAME\_CHOICE\_FACTORY

\-

\-

C1

X

IF\_XCO\_CP\_PACKAGE\_FACTORY

\-

\-

C1

X

IF\_XCO\_CP\_PKG\_FILTER\_FACTORY

\-

\-

C1

X

IF\_XCO\_CP\_REGEX\_ENGINE\_FACTORY

\-

\-

C1

X

IF\_XCO\_CP\_SOFTWARE\_COMPONENT\_F

\-

\-

C1

X

IF\_XCO\_CP\_STD\_CURRENT

\-

\-

C1

X

IF\_XCO\_CP\_STD\_SY

\-

\-

C1

X

IF\_XCO\_CP\_STRING\_CMP\_FACTORY

\-

\-

C1

X

IF\_XCO\_CP\_STRING\_DCMP\_FACTORY

\-

\-

C1

X

IF\_XCO\_CP\_SYS\_API\_LANGUAGES

\-

\-

C1

X

IF\_XCO\_CP\_TENANT

\-

\-

C1

X

IF\_XCO\_CP\_TM\_DATE

\-

\-

C1

X

IF\_XCO\_CP\_TM\_DATE\_FORMAT

\-

\-

C1

X

IF\_XCO\_CP\_TM\_FORMAT\_FACTORY

\-

\-

C1

X

IF\_XCO\_CP\_TM\_MOMENT

\-

\-

C1

X

IF\_XCO\_CP\_TM\_MOMENT\_FORMAT

\-

\-

C1

X

IF\_XCO\_CP\_TM\_MOMENT\_INTERVAL

\-

\-

C1

X

IF\_XCO\_CP\_TM\_TIME

\-

\-

C1

X

IF\_XCO\_CP\_TM\_TIME\_FORMAT

\-

\-

C1

X

IF\_XCO\_CP\_TM\_TIME\_ZONE\_FACTORY

\-

\-

C1

X

IF\_XCO\_CP\_TM\_UNIX\_TIMESTAMP

\-

\-

C1

X

IF\_XCO\_CP\_TRANSPORT

\-

\-

C1

X

IF\_XCO\_CP\_TRANSPORTS

\-

\-

C1

X

IF\_XCO\_CP\_TRANSPORTS\_FACTORY

\-

\-

C1

X

IF\_XCO\_CP\_TRANSPORT\_FACTORY

\-

\-

C1

X

IF\_XCO\_CP\_TR\_FILTER\_FACTORY

\-

\-

C1

X

IF\_XCO\_CP\_TR\_REQUEST

\-

\-

C1

X

IF\_XCO\_CP\_TR\_REQUEST\_PROPRTIES

\-

\-

C1

X

IF\_XCO\_CP\_TR\_SELECTION

\-

\-

C1

X

IF\_XCO\_CP\_TR\_TASK

\-

\-

C1

X

IF\_XCO\_CP\_TR\_TASK\_PROPERTIES

\-

\-

C1

X

IF\_XCO\_CP\_URL

\-

\-

C1

X

IF\_XCO\_CP\_USER

\-

\-

C1

X

IF\_XCO\_CP\_UUID\_FORMAT\_FACTORY

\-

\-

C1

X

IF\_XCO\_CTS\_CHANGEABLE

\-

\-

C1

X

IF\_XCO\_CTS\_CHANGE\_CARRIER

\-

\-

C1

X

IF\_XCO\_CTS\_CHANGE\_SCENARIO

\-

\-

C1

X

IF\_XCO\_CTS\_OBJECT

\-

\-

C1

X

IF\_XCO\_CTS\_OBJECT\_LOCK

\-

\-

C1

X

IF\_XCO\_DATABASE\_TABLE

\-

\-

C1

X

IF\_XCO\_DATABASE\_TABLES

\-

\-

C1

X

IF\_XCO\_DATA\_DEFINITION

\-

\-

C1

X

IF\_XCO\_DATA\_DEFINITIONS

\-

\-

C1

X

IF\_XCO\_DATA\_OBJECT

\-

\-

C1

X

IF\_XCO\_DBT\_CONTENT

\-

\-

C1

X

IF\_XCO\_DBT\_FIELD

\-

\-

C1

X

IF\_XCO\_DBT\_FIELDS

\-

\-

C1

X

IF\_XCO\_DBT\_FIELDS\_CONTENT

\-

\-

C1

X

IF\_XCO\_DBT\_FIELDS\_FACTORY

\-

\-

C1

X

IF\_XCO\_DBT\_FIELD\_CONTENT

\-

\-

C1

X

IF\_XCO\_DBT\_FIELD\_PROPOSAL\_FCT

\-

\-

C1

X

IF\_XCO\_DBT\_FIELD\_PRP\_FKFA

\-

\-

C1

X

IF\_XCO\_DBT\_FIELD\_PRP\_FKFA\_RSLT

\-

\-

C1

X

IF\_XCO\_DBT\_FIELD\_TYPE

\-

\-

C1

X

IF\_XCO\_DBT\_FOREIGN\_KEY

\-

\-

C1

X

IF\_XCO\_DBT\_FOREIGN\_KEY\_CONTENT

\-

\-

C1

X

IF\_XCO\_DBT\_SEARCH\_HELP

\-

\-

C1

X

IF\_XCO\_DBT\_SEARCH\_HELP\_CONTENT

\-

\-

C1

X

IF\_XCO\_DCL\_CB\_ASPECT

\-

\-

C1

X

IF\_XCO\_DCL\_CB\_ASPECT\_OPERATOR

\-

\-

C1

X

IF\_XCO\_DCL\_CB\_INHERIT

\-

\-

C1

X

IF\_XCO\_DCL\_CB\_INHERIT\_ENTITY

\-

\-

C1

X

IF\_XCO\_DCL\_CB\_INHERIT\_ROLE

\-

\-

C1

X

IF\_XCO\_DCL\_CB\_INHERIT\_SUPER

\-

\-

C1

X

IF\_XCO\_DCL\_CB\_INH\_DEFAULT

\-

\-

C1

X

IF\_XCO\_DCL\_CB\_INH\_REPLACING

\-

\-

C1

X

IF\_XCO\_DCL\_CB\_INH\_R\_CONDS

\-

\-

C1

X

IF\_XCO\_DCL\_CB\_INH\_R\_ELEMENT

\-

\-

C1

X

IF\_XCO\_DCL\_CB\_INH\_R\_PARAMETRS

\-

\-

C1

X

IF\_XCO\_DCL\_CB\_INH\_R\_PFCG\_FLR

\-

\-

C1

X

IF\_XCO\_DCL\_CB\_INH\_R\_ROOT

\-

\-

C1

X

IF\_XCO\_DCL\_CB\_INH\_R\_V\_CONDS

\-

\-

C1

X

IF\_XCO\_DCL\_CB\_PFCG

\-

\-

C1

X

IF\_XCO\_DCL\_CB\_PFCG\_LEFT\_SIDE

\-

\-

C1

X

IF\_XCO\_DCL\_CB\_PFCG\_LS\_FIELD

\-

\-

C1

X

IF\_XCO\_DCL\_CB\_PFCG\_OPERATOR

\-

\-

C1

X

IF\_XCO\_DCL\_CB\_PFCG\_RIGHT\_SIDE

\-

\-

C1

X

IF\_XCO\_DCL\_CB\_USER

\-

\-

C1

X

IF\_XCO\_DCL\_CB\_USER\_OPERATOR

\-

\-

C1

X

IF\_XCO\_DCL\_CONDITION\_BUILDER

\-

\-

C1

X

IF\_XCO\_DCL\_COND\_ASPECT\_F

\-

\-

C1

X

IF\_XCO\_DCL\_COND\_FACTORY

\-

\-

C1

X

IF\_XCO\_DCL\_COND\_INHERT\_ENTTY\_F

\-

\-

C1

X

IF\_XCO\_DCL\_COND\_INHERT\_ROLE\_F

\-

\-

C1

X

IF\_XCO\_DCL\_COND\_INHERT\_SUPER\_F

\-

\-

C1

X

IF\_XCO\_DCL\_COND\_PFCG\_F

\-

\-

C1

X

IF\_XCO\_DCL\_COND\_USER\_F

\-

\-

C1

X

IF\_XCO\_DCL\_EXPRESSION

\-

\-

C1

X

IF\_XCO\_DCL\_EXPRESSION\_FACTORY

\-

\-

C1

X

IF\_XCO\_DCL\_EXPR\_CONDITION

\-

\-

C1

X

IF\_XCO\_DCL\_EXPR\_FIELD

\-

\-

C1

X

IF\_XCO\_DCL\_LITERAL

\-

\-

C1

X

IF\_XCO\_DCL\_LITERAL\_FACTORY

\-

\-

C1

X

IF\_XCO\_DDL\_EB\_CASE

\-

\-

C1

X

IF\_XCO\_DDL\_EB\_CAST

\-

\-

C1

X

IF\_XCO\_DDL\_EXPRESSION

\-

\-

C1

X

IF\_XCO\_DDL\_EXPR\_CASE\_F

\-

\-

C1

X

IF\_XCO\_DDL\_EXPR\_CAST\_DTYPE

\-

\-

C1

X

IF\_XCO\_DDL\_EXPR\_CAST\_F

\-

\-

C1

X

IF\_XCO\_DDL\_EXPR\_CONDITION

\-

\-

C1

X

IF\_XCO\_DDL\_EXPR\_DATA\_SOURCE

\-

\-

C1

X

IF\_XCO\_DDL\_EXPR\_DATA\_SOURCE\_F

\-

\-

C1

X

IF\_XCO\_DDL\_EXPR\_FACTORY

\-

\-

C1

X

IF\_XCO\_DDL\_EXPR\_FIELD

\-

\-

C1

X

IF\_XCO\_DDL\_LITERAL\_FACTORY

\-

\-

C1

X

IF\_XCO\_DOMAIN

\-

\-

C1

X

IF\_XCO\_DOMAINS

\-

\-

C1

X

IF\_XCO\_DOMAIN\_CONTENT

\-

\-

C1

X

IF\_XCO\_DOMAIN\_FIXED\_VALUE

\-

\-

C1

X

IF\_XCO\_DOMAIN\_FIXED\_VALUES

\-

\-

C1

X

IF\_XCO\_DOMAIN\_FIXED\_VALUES\_FCT

\-

\-

C1

X

IF\_XCO\_DOMAIN\_FIXED\_VALUE\_CNT

\-

\-

C1

X

IF\_XCO\_DOMAIN\_FORMAT

\-

\-

C1

X

IF\_XCO\_DP\_ACTION

\-

\-

C1

X

IF\_XCO\_DP\_ACTION\_DECORATOR

\-

\-

C1

X

IF\_XCO\_DP\_ADDITION

\-

\-

C1

X

IF\_XCO\_DP\_CHECK

\-

\-

C1

X

IF\_XCO\_DP\_CHECK\_RESULT

\-

\-

C1

X

IF\_XCO\_DP\_LOCK

\-

\-

C1

X

IF\_XCO\_DP\_ONGOING\_ACTION

\-

\-

C1

X

IF\_XCO\_DTEL\_CONTENT

\-

\-

C1

X

IF\_XCO\_DTEL\_DATA\_TYPE

\-

\-

C1

X

IF\_XCO\_FG\_CONTENT

\-

\-

C1

X

IF\_XCO\_FG\_FUNCTION\_MODULES

\-

\-

C1

X

IF\_XCO\_FG\_FUNCTION\_MODULES\_FCT

\-

\-

C1

X

IF\_XCO\_FM\_CONTENT

\-

\-

C1

X

IF\_XCO\_FM\_EXCEPTION

\-

\-

C1

X

IF\_XCO\_FM\_EXCEPTIONS

\-

\-

C1

X

IF\_XCO\_FM\_EXCEPTIONS\_FACTORY

\-

\-

C1

X

IF\_XCO\_FM\_EXCEPTION\_CONTENT

\-

\-

C1

X

IF\_XCO\_FM\_PARAMETER

\-

\-

C1

X

IF\_XCO\_FM\_PARAMETERS

\-

\-

C1

X

IF\_XCO\_FM\_PRMS\_CHANGING

\-

\-

C1

X

IF\_XCO\_FM\_PRMS\_CHANGING\_FCTRY

\-

\-

C1

X

IF\_XCO\_FM\_PRMS\_EXPORTING

\-

\-

C1

X

IF\_XCO\_FM\_PRMS\_EXPORTING\_FCTRY

\-

\-

C1

X

IF\_XCO\_FM\_PRMS\_IMPORTING

\-

\-

C1

X

IF\_XCO\_FM\_PRMS\_IMPORTING\_FCTRY

\-

\-

C1

X

IF\_XCO\_FM\_PRM\_CHANGING

\-

\-

C1

X

IF\_XCO\_FM\_PRM\_CHA\_CONTENT

\-

\-

C1

X

IF\_XCO\_FM\_PRM\_CHA\_TYPE

\-

\-

C1

X

IF\_XCO\_FM\_PRM\_EXPORTING

\-

\-

C1

X

IF\_XCO\_FM\_PRM\_EXP\_CONTENT

\-

\-

C1

X

IF\_XCO\_FM\_PRM\_EXP\_TYPE

\-

\-

C1

X

IF\_XCO\_FM\_PRM\_IMPORTING

\-

\-

C1

X

IF\_XCO\_FM\_PRM\_IMP\_CONTENT

\-

\-

C1

X

IF\_XCO\_FM\_PRM\_IMP\_TYPE

\-

\-

C1

X

IF\_XCO\_FM\_SOURCE\_CODE

\-

\-

C1

X

IF\_XCO\_FUNCTION\_GROUP

\-

\-

C1

X

IF\_XCO\_FUNCTION\_GROUPS

\-

\-

C1

X

IF\_XCO\_FUNCTION\_MODULE

\-

\-

C1

X

IF\_XCO\_GEN\_AO\_S\_FO\_COMPONENT

\-

\-

C1

X

IF\_XCO\_GEN\_AO\_S\_FO\_C\_ALIAS

\-

\-

C1

X

IF\_XCO\_GEN\_AO\_S\_FO\_C\_CONSTANT

\-

\-

C1

X

IF\_XCO\_GEN\_AO\_S\_FO\_C\_DATA

\-

\-

C1

X

IF\_XCO\_GEN\_AO\_S\_FO\_C\_METHOD

\-

\-

C1

X

IF\_XCO\_GEN\_AO\_S\_FO\_C\_TYPE

\-

\-

C1

X

IF\_XCO\_GEN\_AO\_S\_FO\_PRODUCT

\-

\-

C1

X

IF\_XCO\_GEN\_AO\_S\_FO\_S\_EXCEPTION

\-

\-

C1

X

IF\_XCO\_GEN\_AO\_S\_FO\_S\_P\_CHNGNG

\-

\-

C1

X

IF\_XCO\_GEN\_AO\_S\_FO\_S\_P\_EXPRTNG

\-

\-

C1

X

IF\_XCO\_GEN\_AO\_S\_FO\_S\_P\_IMPRTNG

\-

\-

C1

X

IF\_XCO\_GEN\_AO\_S\_FO\_S\_P\_RETRNG

\-

\-

C1

X

IF\_XCO\_GEN\_AO\_S\_UP\_COMPONENT

\-

\-

C1

X

IF\_XCO\_GEN\_AO\_S\_UP\_C\_ALIAS

\-

\-

C1

X

IF\_XCO\_GEN\_AO\_S\_UP\_C\_CONSTANT

\-

\-

C1

X

IF\_XCO\_GEN\_AO\_S\_UP\_C\_DATA

\-

\-

C1

X

IF\_XCO\_GEN\_AO\_S\_UP\_C\_METHOD

\-

\-

C1

X

IF\_XCO\_GEN\_AO\_S\_UP\_METHD\_DELET

\-

\-

C1

X

IF\_XCO\_GEN\_AO\_S\_UP\_METHD\_INSRT

\-

\-

C1

X

IF\_XCO\_GEN\_AO\_S\_UP\_METHD\_UPDAT

\-

\-

C1

X

IF\_XCO\_GEN\_AO\_S\_UP\_SUBCOMPNT

\-

\-

C1

X

IF\_XCO\_GEN\_AO\_S\_UP\_S\_EXCEPTION

\-

\-

C1

X

IF\_XCO\_GEN\_AO\_S\_UP\_S\_P\_CHNGNG

\-

\-

C1

X

IF\_XCO\_GEN\_AO\_S\_UP\_S\_P\_EXPRTNG

\-

\-

C1

X

IF\_XCO\_GEN\_AO\_S\_UP\_S\_P\_IMPRTNG

\-

\-

C1

X

IF\_XCO\_GEN\_AO\_S\_UP\_S\_P\_RETRNG

\-

\-

C1

X

IF\_XCO\_GEN\_AO\_TYPE\_ATTRIBUTE

\-

\-

C1

X

IF\_XCO\_GEN\_AO\_TYPE\_DECLARATION

\-

\-

C1

X

IF\_XCO\_GEN\_AO\_TYPE\_D\_STR\_CPNT

\-

\-

C1

X

IF\_XCO\_GEN\_AO\_TYPE\_D\_TAB\_ROW

\-

\-

C1

X

IF\_XCO\_GEN\_AO\_TYPE\_PARAMETER

\-

\-

C1

X

IF\_XCO\_GEN\_AO\_TYPE\_P\_CHANGING

\-

\-

C1

X

IF\_XCO\_GEN\_AO\_TYPE\_P\_EXPORTING

\-

\-

C1

X

IF\_XCO\_GEN\_AO\_TYPE\_P\_IMPORTING

\-

\-

C1

X

IF\_XCO\_GEN\_AO\_TYPE\_P\_RETURNING

\-

\-

C1

X

IF\_XCO\_GEN\_BDEF\_RSLT\_CARDNALTY

\-

\-

C1

X

IF\_XCO\_GEN\_BDEF\_S\_FO\_BEHAVIOR

\-

\-

C1

X

IF\_XCO\_GEN\_BDEF\_S\_FO\_B\_ACTION

\-

\-

C1

X

IF\_XCO\_GEN\_BDEF\_S\_FO\_B\_ASSOCTN

\-

\-

C1

X

IF\_XCO\_GEN\_BDEF\_S\_FO\_B\_AUTH

\-

\-

C1

X

IF\_XCO\_GEN\_BDEF\_S\_FO\_B\_A\_PARAM

\-

\-

C1

X

IF\_XCO\_GEN\_BDEF\_S\_FO\_B\_A\_RSULT

\-

\-

C1

X

IF\_XCO\_GEN\_BDEF\_S\_FO\_B\_CHARA

\-

\-

C1

X

IF\_XCO\_GEN\_BDEF\_S\_FO\_B\_DETRMTN

\-

\-

C1

X

IF\_XCO\_GEN\_BDEF\_S\_FO\_B\_ETAG

\-

\-

C1

X

IF\_XCO\_GEN\_BDEF\_S\_FO\_B\_FIELD

\-

\-

C1

X

IF\_XCO\_GEN\_BDEF\_S\_FO\_B\_LOCK

\-

\-

C1

X

IF\_XCO\_GEN\_BDEF\_S\_FO\_B\_MAPPING

\-

\-

C1

X

IF\_XCO\_GEN\_BDEF\_S\_FO\_B\_STD\_OP

\-

\-

C1

X

IF\_XCO\_GEN\_BDEF\_S\_FO\_B\_VALIDTN

\-

\-

C1

X

IF\_XCO\_GEN\_CDS\_CARDINALITY

\-

\-

C1

X

IF\_XCO\_GEN\_CDS\_S\_FO\_ANNOTATION

\-

\-

C1

X

IF\_XCO\_GEN\_CDS\_S\_FO\_ANN\_TARGET

\-

\-

C1

X

IF\_XCO\_GEN\_CDS\_S\_FO\_ANN\_VALUE

\-

\-

C1

X

IF\_XCO\_GEN\_CDS\_S\_FO\_ANN\_V\_BLDR

\-

\-

C1

X

IF\_XCO\_GEN\_CLAS\_S\_FO\_DEFNTN

\-

\-

C1

X

IF\_XCO\_GEN\_CLAS\_S\_FO\_D\_C\_MTHD

\-

\-

C1

X

IF\_XCO\_GEN\_CLAS\_S\_FO\_D\_C\_M\_AMD

\-

\-

C1

X

IF\_XCO\_GEN\_CLAS\_S\_FO\_D\_C\_M\_BI

\-

\-

C1

X

IF\_XCO\_GEN\_CLAS\_S\_FO\_D\_INTRFCE

\-

\-

C1

X

IF\_XCO\_GEN\_CLAS\_S\_FO\_D\_SECTION

\-

\-

C1

X

IF\_XCO\_GEN\_CLAS\_S\_FO\_IMPLMTN

\-

\-

C1

X

IF\_XCO\_GEN\_CLAS\_S\_FO\_I\_METHOD

\-

\-

C1

X

IF\_XCO\_GEN\_CLAS\_S\_FO\_I\_M\_AMDP

\-

\-

C1

X

IF\_XCO\_GEN\_CLAS\_S\_FO\_LCL\_CLASS

\-

\-

C1

X

IF\_XCO\_GEN\_CLAS\_S\_FO\_S\_P\_IMP

\-

\-

C1

X

IF\_XCO\_GEN\_CLAS\_S\_FO\_S\_P\_I\_BI

\-

\-

C1

X

IF\_XCO\_GEN\_DCLS\_S\_FO\_ROLE

\-

\-

C1

X

IF\_XCO\_GEN\_DCLS\_S\_FO\_R\_A\_RULE

\-

\-

C1

X

IF\_XCO\_GEN\_DDLS\_DDL\_EXPRESSION

\-

\-

C1

X

IF\_XCO\_GEN\_DDLS\_FIELD\_TYPE

\-

\-

C1

X

IF\_XCO\_GEN\_DDLS\_PARAM\_DTYPE

\-

\-

C1

X

IF\_XCO\_GEN\_DDLS\_S\_FO\_ASSOC

\-

\-

C1

X

IF\_XCO\_GEN\_DDLS\_S\_FO\_A\_E

\-

\-

C1

X

IF\_XCO\_GEN\_DDLS\_S\_FO\_COMPOS

\-

\-

C1

X

IF\_XCO\_GEN\_DDLS\_S\_FO\_C\_E

\-

\-

C1

X

IF\_XCO\_GEN\_DDLS\_S\_FO\_FIELD

\-

\-

C1

X

IF\_XCO\_GEN\_DDLS\_S\_FO\_PARAM

\-

\-

C1

X

IF\_XCO\_GEN\_DDLS\_S\_FO\_P\_VIEW

\-

\-

C1

X

IF\_XCO\_GEN\_DDLS\_S\_FO\_P\_VIEW\_DS

\-

\-

C1

X

IF\_XCO\_GEN\_DDLS\_S\_FO\_TABLE\_F

\-

\-

C1

X

IF\_XCO\_GEN\_DDLS\_S\_FO\_UNION

\-

\-

C1

X

IF\_XCO\_GEN\_DDLS\_S\_FO\_VIEW

\-

\-

C1

X

IF\_XCO\_GEN\_DDLS\_S\_FO\_VIEW\_DS

\-

\-

C1

X

IF\_XCO\_GEN\_DDLS\_S\_FO\_VIEW\_E

\-

\-

C1

X

IF\_XCO\_GEN\_DDLS\_S\_FO\_VIEW\_E\_DS

\-

\-

C1

X

IF\_XCO\_GEN\_DDLX\_S\_FO\_FIELD

\-

\-

C1

X

IF\_XCO\_GEN\_DDLX\_S\_FO\_PARAMETER

\-

\-

C1

X

IF\_XCO\_GEN\_DOMA\_FORMAT

\-

\-

C1

X

IF\_XCO\_GEN\_DOMA\_S\_FO\_FXD\_VALS

\-

\-

C1

X

IF\_XCO\_GEN\_DOMA\_S\_FO\_FXD\_VALUE

\-

\-

C1

X

IF\_XCO\_GEN\_DOMA\_S\_FO\_OUTPT\_CHR

\-

\-

C1

X

IF\_XCO\_GEN\_DTEL\_DATA\_TYPE

\-

\-

C1

X

IF\_XCO\_GEN\_DTEL\_S\_FO\_FLD\_LBL

\-

\-

C1

X

IF\_XCO\_GEN\_FUGR\_FM\_PT\_CHANGNG

\-

\-

C1

X

IF\_XCO\_GEN\_FUGR\_FM\_PT\_EXPRTNG

\-

\-

C1

X

IF\_XCO\_GEN\_FUGR\_FM\_PT\_IMPRTNG

\-

\-

C1

X

IF\_XCO\_GEN\_FUGR\_S\_FO\_FM\_EXCPTN

\-

\-

C1

X

IF\_XCO\_GEN\_FUGR\_S\_FO\_FM\_P\_CHA

\-

\-

C1

X

IF\_XCO\_GEN\_FUGR\_S\_FO\_FM\_P\_EXP

\-

\-

C1

X

IF\_XCO\_GEN\_FUGR\_S\_FO\_FM\_P\_IMP

\-

\-

C1

X

IF\_XCO\_GEN\_FUGR\_S\_FO\_FNCTN\_MDL

\-

\-

C1

X

IF\_XCO\_GEN\_INTF\_S\_FO\_C\_METHOD

\-

\-

C1

X

IF\_XCO\_GEN\_O\_DELETE\_RESULT

\-

\-

C1

X

IF\_XCO\_GEN\_O\_FINDING

\-

\-

C1

X

IF\_XCO\_GEN\_O\_FINDINGS

\-

\-

C1

X

IF\_XCO\_GEN\_O\_F\_OBJECT

\-

\-

C1

X

IF\_XCO\_GEN\_O\_F\_SECTION

\-

\-

C1

X

IF\_XCO\_GEN\_O\_F\_SECTION\_FACTORY

\-

\-

C1

X

IF\_XCO\_GEN\_O\_POST\_RESULT

\-

\-

C1

X

IF\_XCO\_GEN\_O\_PUT\_RESULT

\-

\-

C1

X

IF\_XCO\_GEN\_SRVB\_S\_FO\_SERVICE

\-

\-

C1

X

IF\_XCO\_GEN\_SRVB\_S\_FO\_SRV\_VERSN

\-

\-

C1

X

IF\_XCO\_GEN\_SRVD\_S\_FO\_EXPOSURE

\-

\-

C1

X

IF\_XCO\_GEN\_TABL\_APS\_ENH\_CAT

\-

\-

C1

X

IF\_XCO\_GEN\_TABL\_DBT\_S\_FO\_FIELD

\-

\-

C1

X

IF\_XCO\_GEN\_TABL\_DBT\_S\_FO\_INCL

\-

\-

C1

X

IF\_XCO\_GEN\_TABL\_DBT\_S\_FO\_TS\_GP

\-

\-

C1

X

IF\_XCO\_GEN\_TABL\_FIELD\_TYPE\_DBT

\-

\-

C1

X

IF\_XCO\_GEN\_TABL\_FIELD\_TYPE\_GTT

\-

\-

C1

X

IF\_XCO\_GEN\_TABL\_FIELD\_TYPE\_STR

\-

\-

C1

X

IF\_XCO\_GEN\_TABL\_FKEY\_CARDNALTY

\-

\-

C1

X

IF\_XCO\_GEN\_TABL\_FKEY\_CARD\_LEFT

\-

\-

C1

X

IF\_XCO\_GEN\_TABL\_FKEY\_CARD\_RGHT

\-

\-

C1

X

IF\_XCO\_GEN\_TABL\_GTT\_S\_FO\_FIELD

\-

\-

C1

X

IF\_XCO\_GEN\_TABL\_STR\_S\_FO\_CMPNT

\-

\-

C1

X

IF\_XCO\_GEN\_TABL\_STR\_S\_FO\_INCL

\-

\-

C1

X

IF\_XCO\_GEN\_TABL\_S\_FO\_CURR\_QUAN

\-

\-

C1

X

IF\_XCO\_GEN\_TABL\_S\_FO\_FIELD

\-

\-

C1

X

IF\_XCO\_GEN\_TABL\_S\_FO\_FKEY

\-

\-

C1

X

IF\_XCO\_GEN\_TABL\_S\_FO\_SHELP

\-

\-

C1

X

IF\_XCO\_GEN\_TTYP\_ROW\_TYPE

\-

\-

C1

X

IF\_XCO\_GLOBAL\_TEMPORARY\_TABLE

\-

\-

C1

X

IF\_XCO\_GLOBAL\_TEMPORARY\_TABLES

\-

\-

C1

X

IF\_XCO\_GTT\_CONTENT

\-

\-

C1

X

IF\_XCO\_GTT\_FIELD

\-

\-

C1

X

IF\_XCO\_GTT\_FIELDS

\-

\-

C1

X

IF\_XCO\_GTT\_FIELDS\_FACTORY

\-

\-

C1

X

IF\_XCO\_GTT\_FIELD\_CONTENT

\-

\-

C1

X

IF\_XCO\_GTT\_FIELD\_TYPE

\-

\-

C1

X

IF\_XCO\_GTT\_FOREIGN\_KEY

\-

\-

C1

X

IF\_XCO\_GTT\_FOREIGN\_KEY\_CONTENT

\-

\-

C1

X

IF\_XCO\_GTT\_SEARCH\_HELP

\-

\-

C1

X

IF\_XCO\_GTT\_SEARCH\_HELP\_CONTENT

\-

\-

C1

X

IF\_XCO\_I18N\_ALO\_TARGET\_OBJECT

\-

\-

C1

X

IF\_XCO\_I18N\_ALO\_TARGET\_SUBOBJ

\-

\-

C1

X

IF\_XCO\_I18N\_BCO\_TARGET\_OBJECT

\-

\-

C1

X

IF\_XCO\_I18N\_DD\_ENT\_TARGET

\-

\-

C1

X

IF\_XCO\_I18N\_DD\_FLD\_TARGET

\-

\-

C1

X

IF\_XCO\_I18N\_DD\_PRM\_TARGET

\-

\-

C1

X

IF\_XCO\_I18N\_DE\_TARGET\_OBJECT

\-

\-

C1

X

IF\_XCO\_I18N\_DM\_TARGET\_FIXED\_VA

\-

\-

C1

X

IF\_XCO\_I18N\_MC\_TARGET\_MESSAGE

\-

\-

C1

X

IF\_XCO\_I18N\_ME\_ENT\_TARGET

\-

\-

C1

X

IF\_XCO\_I18N\_ME\_FLD\_TARGET

\-

\-

C1

X

IF\_XCO\_I18N\_ME\_PRM\_TARGET

\-

\-

C1

X

IF\_XCO\_I18N\_TEXT

\-

\-

C1

X

IF\_XCO\_I18N\_TEXT\_ATTRIBUTE

\-

\-

C1

X

IF\_XCO\_I18N\_TRANSLATION

\-

\-

C1

X

IF\_XCO\_I18N\_TT\_TARGET\_RECORD

\-

\-

C1

X

IF\_XCO\_INTF\_COMPONENTS\_FACTORY

\-

\-

C1

X

IF\_XCO\_INTF\_COMPONENT\_FACTORY

\-

\-

C1

X

IF\_XCO\_INTF\_CONTENT

\-

\-

C1

X

IF\_XCO\_INTF\_C\_METHOD

\-

\-

C1

X

IF\_XCO\_INTF\_C\_METHODS

\-

\-

C1

X

IF\_XCO\_INTF\_C\_METHODS\_FACTORY

\-

\-

C1

X

IF\_XCO\_INTF\_C\_METHOD\_CONTENT

\-

\-

C1

X

IF\_XCO\_ITERATOR

\-

\-

C1

X

IF\_XCO\_JSON\_TRANSFORMATION

\-

\-

C1

X

X

IF\_XCO\_JSON\_TREE\_BUILDER

\-

\-

C1

X

X

IF\_XCO\_JSON\_TREE\_VISITOR

\-

\-

C1

X

X

IF\_XCO\_KU\_BINARY\_TXT\_ENC\_FCTRY

\-

\-

C1

 

X

IF\_XCO\_KU\_JSON\_DATA

\-

\-

C1

 

X

IF\_XCO\_KU\_JSON\_DATA\_BUILDER

\-

\-

C1

 

X

IF\_XCO\_KU\_JSON\_DATA\_FACTORY

\-

\-

C1

 

X

IF\_XCO\_KU\_JSON\_TRNSFRMTN\_FCTRY

\-

\-

C1

 

X

IF\_XCO\_KU\_REGEX\_ENGINE\_FACTORY

\-

\-

C1

 

X

IF\_XCO\_KU\_STD\_CURRENT

\-

\-

C1

 

X

IF\_XCO\_KU\_STD\_SY

\-

\-

C1

 

X

IF\_XCO\_KU\_STRING\_COMPOSITION\_F

\-

\-

C1

 

X

IF\_XCO\_KU\_STRING\_DECOMPOSTN\_F

\-

\-

C1

 

X

IF\_XCO\_KU\_TENANT

\-

\-

C1

 

X

IF\_XCO\_KU\_TM\_DATE

\-

\-

C1

 

X

IF\_XCO\_KU\_TM\_DATE\_FORMAT

\-

\-

C1

 

X

IF\_XCO\_KU\_TM\_FORMAT\_FACTORY

\-

\-

C1

 

X

IF\_XCO\_KU\_TM\_MOMENT

\-

\-

C1

 

X

IF\_XCO\_KU\_TM\_MOMENT\_FORMAT

\-

\-

C1

 

X

IF\_XCO\_KU\_TM\_TIME

\-

\-

C1

 

X

IF\_XCO\_KU\_TM\_TIME\_FORMAT

\-

\-

C1

 

X

IF\_XCO\_KU\_TM\_TIME\_ZONE\_FACTORY

\-

\-

C1

 

X

IF\_XCO\_KU\_TM\_UNIX\_TIMESTAMP

\-

\-

C1

 

X

IF\_XCO\_KU\_URL

\-

\-

C1

 

X

IF\_XCO\_KU\_UUID\_FORMAT\_FACTORY

\-

\-

C1

 

X

IF\_XCO\_LANGUAGE

\-

\-

C1

X

IF\_XCO\_LANGUAGES

\-

\-

C1

X

IF\_XCO\_LANG\_FORMAT

\-

\-

C1

X

IF\_XCO\_MC\_CONTENT

\-

\-

C1

X

IF\_XCO\_MC\_MESSAGE

\-

\-

C1

X

IF\_XCO\_MC\_MESSAGES

\-

\-

C1

X

IF\_XCO\_MC\_MESSAGES\_FACTORY

\-

\-

C1

X

IF\_XCO\_MC\_MESSAGE\_CONTENT

\-

\-

C1

X

IF\_XCO\_MESSAGE

\-

\-

C1

X

X

IF\_XCO\_MESSAGES

\-

\-

C1

X

IF\_XCO\_MESSAGE\_CLASS

\-

\-

C1

X

IF\_XCO\_MESSAGE\_CLASSES

\-

\-

C1

X

IF\_XCO\_MESSAGE\_SHORT\_TEXT

\-

\-

C1

X

X

IF\_XCO\_METADATA\_EXTENSION

\-

\-

C1

X

IF\_XCO\_METADATA\_EXTENSIONS

\-

\-

C1

X

IF\_XCO\_NAME\_CHOICE

\-

\-

C1

X

IF\_XCO\_NEWS

\-

\-

C1

X

X

IF\_XCO\_PACKAGE

\-

\-

C1

X

IF\_XCO\_PACKAGES

\-

\-

C1

X

IF\_XCO\_PAYLOAD

\-

\-

C1

X

IF\_XCO\_PKG\_FILTER

\-

\-

C1

X

IF\_XCO\_PRINTABLE

\-

\-

C1

X

IF\_XCO\_REGEX\_APPLICATION

\-

\-

C1

X

X

IF\_XCO\_REGEX\_ENGINE

\-

\-

C1

X

X

IF\_XCO\_REGULAR\_EXPRESSION

\-

\-

C1

X

X

IF\_XCO\_SERVICE\_BINDING

\-

\-

C1

X

IF\_XCO\_SERVICE\_BINDINGS

\-

\-

C1

X

IF\_XCO\_SERVICE\_BINDING\_CONTENT

\-

\-

C1

X

IF\_XCO\_SERVICE\_DEFINITION

\-

\-

C1

X

IF\_XCO\_SERVICE\_DEFINITIONS

\-

\-

C1

X

IF\_XCO\_SOFTWARE\_COMPONENT

\-

\-

C1

X

IF\_XCO\_SRVB\_SERVICE

\-

\-

C1

X

IF\_XCO\_SRVB\_SERVICES

\-

\-

C1

X

IF\_XCO\_SRVB\_SERVICES\_FACTORY

\-

\-

C1

X

IF\_XCO\_SRVB\_SERVICE\_VERSION

\-

\-

C1

X

IF\_XCO\_SRVB\_SERVICE\_VERSIONS

\-

\-

C1

X

IF\_XCO\_SRVB\_SERVICE\_VERSIONS\_F

\-

\-

C1

X

IF\_XCO\_SRVB\_SERVICE\_VERSION\_CO

\-

\-

C1

X

IF\_XCO\_SRVD\_CONTENT

\-

\-

C1

X

IF\_XCO\_SRVD\_EXPOSURE

\-

\-

C1

X

IF\_XCO\_SRVD\_EXPOSURES

\-

\-

C1

X

IF\_XCO\_SRVD\_EXPOSURES\_FACTORY

\-

\-

C1

X

IF\_XCO\_SRVD\_EXPOSURE\_CONTENT

\-

\-

C1

X

IF\_XCO\_STRING

\-

\-

C1

X

X

IF\_XCO\_STRINGS

\-

\-

C1

X

X

IF\_XCO\_STRING\_BUILDER

\-

\-

C1

X

X

IF\_XCO\_STRING\_COMPOSITION

\-

\-

C1

X

X

IF\_XCO\_STRING\_DECOMPOSITION

\-

\-

C1

X

X

IF\_XCO\_STRING\_ITERABLE

\-

\-

C1

X

IF\_XCO\_STRING\_ITERATOR

\-

\-

C1

X

IF\_XCO\_STRING\_XSTRING\_CNVRSN

\-

\-

C1

X

X

IF\_XCO\_STR\_COMPONENT

\-

\-

C1

X

IF\_XCO\_STR\_COMPONENTS

\-

\-

C1

X

IF\_XCO\_STR\_COMPONENTS\_FACTORY

\-

\-

C1

X

IF\_XCO\_STR\_COMPONENT\_CONTENT

\-

\-

C1

X

IF\_XCO\_STR\_COMPONENT\_PR\_FCTRY

\-

\-

C1

X

IF\_XCO\_STR\_COMPONENT\_PR\_FKFA

\-

\-

C1

X

IF\_XCO\_STR\_COMPONENT\_PR\_FKFA\_R

\-

\-

C1

X

IF\_XCO\_STR\_COMPONENT\_TYPE

\-

\-

C1

X

IF\_XCO\_STR\_CONTENT

\-

\-

C1

X

IF\_XCO\_STR\_FOREIGN\_KEY

\-

\-

C1

X

IF\_XCO\_STR\_FOREIGN\_KEY\_CONTENT

\-

\-

C1

X

IF\_XCO\_STR\_SEARCH\_HELP

\-

\-

C1

X

IF\_XCO\_STR\_SEARCH\_HELP\_CONTENT

\-

\-

C1

X

IF\_XCO\_TAB\_FIELD

\-

\-

C1

X

IF\_XCO\_TAB\_FIELD\_CONTENT

\-

\-

C1

X

IF\_XCO\_TAB\_FOREIGN\_KEY

\-

\-

C1

X

IF\_XCO\_TAB\_FOREIGN\_KEY\_CONTENT

\-

\-

C1

X

IF\_XCO\_TAB\_SEARCH\_HELP

\-

\-

C1

X

IF\_XCO\_TAB\_SEARCH\_HELP\_CONTENT

\-

\-

C1

X

IF\_XCO\_TEXT

\-

\-

C1

X

IF\_XCO\_TM\_TIME\_ZONE

\-

\-

C1

X

X

IF\_XCO\_TRANSFORMATION

\-

\-

C1

X

IF\_XCO\_TRANSFORMATIONS

\-

\-

C1

X

IF\_XCO\_TRANSPORT\_LAYER

\-

\-

C1

X

IF\_XCO\_TRANSPORT\_TARGET

\-

\-

C1

X

IF\_XCO\_TR\_FILTER

\-

\-

C1

X

IF\_XCO\_TTYP\_CONTENT

\-

\-

C1

X

IF\_XCO\_TTYP\_ROW\_TYPE

\-

\-

C1

X

IF\_XCO\_TT\_PRIMARY\_KEY

\-

\-

C1

X

IF\_XCO\_TT\_PRIMARY\_KEY\_FACTORY

\-

\-

C1

X

IF\_XCO\_TT\_SECONDARY\_KEY

\-

\-

C1

X

IF\_XCO\_TT\_SECONDARY\_KEY\_FACTRY

\-

\-

C1

X

IF\_XCO\_UUID

\-

\-

C1

X

X

IF\_XCO\_UUID\_FORMAT

\-

\-

C1

X

X

IF\_XCO\_XSTRING

\-

\-

C1

X

X

IF\_XCO\_XSTRING\_STRING\_CNVRSN

\-

\-

C1

X

X

MSAG - Message Class

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

ABAP\_TIMEFM

\-

\-

C1

 

X

SUSO - Authorization object

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

B\_BUP\_PCPT

\-

\-

C1

X

S\_APPL\_LOG

\-

\-

C1

X

S\_NUMBER

\-

\-

C1

X

S\_SQL\_VIEW

\-

\-

C1

X

S\_TABU\_NAM

\-

\-

C1

X

TABL - Table

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

/AIF/CHANGEABLE\_FIELD\_ST

\-

\-

C1

 

X

ABAPOFFLEN

\-

\-

C1

 

X

ABAP\_SORTORDER

\-

\-

C1

X

X

ABP\_BEHV\_AUTHORIZATION

\-

\-

C1

X

ABP\_BEHV\_CHANGES

\-

\-

C1

X

ABP\_BEHV\_FEATURES

\-

\-

C1

X

ABP\_BEHV\_GLOBAL\_PERMISSIONS

\-

\-

C1

X

ABP\_BEHV\_LOCKS

\-

\-

C1

X

ABP\_BEHV\_PAR\_EDIT

\-

\-

C1

X

ABP\_BEHV\_PERMISSIONS

\-

\-

C1

X

ABP\_BEHV\_RESPONSE

\-

\-

C1

X

ABP\_BEHV\_RETRIEVALS

\-

\-

C1

X

ADDRESS\_PRINTFORM\_LINE

\-

\-

C1

X

X

ARCH\_STAT

\-

\-

C1

X

ARFCTID

\-

\-

C1

X

AUTHFIELD\_VALS

\-

\-

C1

X

AUTHORIZATION\_FOR\_OBJECT

\-

\-

C1

X

AUTHVALINTERVAL

\-

\-

C1

X

BADI\_FILTER\_BINDING

\-

\-

C1

X

BAL\_S\_LGNM

\-

\-

C1

X

BAPIALA

\-

\-

C1

X

X

BAPIALB

\-

\-

C1

X

X

BAPIALC

\-

\-

C1

X

X

BAPIALD

\-

\-

C1

X

X

BAPIALF

\-

\-

C1

X

X

BAPIALG

\-

\-

C1

X

X

BAPIALT

\-

\-

C1

X

X

BAPICONVRS

\-

\-

C1

X

X

BAPICURR

\-

\-

C1

X

X

BAPICURX

\-

\-

C1

X

X

BAPICURX31

\-

\-

C1

X

X

BAPIEXT

\-

\-

C1

X

X

BAPIEXTA

\-

\-

C1

X

X

BAPIEXTC

\-

\-

C1

X

X

BAPIF4A

\-

\-

C1

X

X

BAPIF4B

\-

\-

C1

X

X

BAPIF4C

\-

\-

C1

X

X

BAPIF4D

\-

\-

C1

X

X

BAPIF4E

\-

\-

C1

X

X

BAPIF4F

\-

\-

C1

X

X

BAPIF4M

\-

\-

C1

X

X

BAPIFLAG

\-

\-

C1

X

X

BAPIHTML

\-

\-

C1

X

X

BAPIINFO

\-

\-

C1

X

X

BAPIMONCOM

\-

\-

C1

X

X

BAPIMONIT

\-

\-

C1

X

X

BAPIMONSTR

\-

\-

C1

X

X

BAPIOBJID

\-

\-

C1

X

X

BAPIPAREX

\-

\-

C1

X

X

BAPIPAREX\_HELP

\-

\-

C1

X

X

BAPIRANGES

\-

\-

C1

X

X

BAPIRET2

\-

\-

C1

X

X

BAPIRETC

\-

\-

C1

X

X

BAPIRETI

\-

\-

C1

X

X

BAPIRETS

\-

\-

C1

X

X

BAPISHLP

\-

\-

C1

X

X

BAPISRCSYS

\-

\-

C1

X

X

BAPITA

\-

\-

C1

X

X

BAPITGA

\-

\-

C1

X

X

BAPITGB

\-

\-

C1

X

X

BAPI\_STAND

\-

\-

C1

X

X

BDWFAP\_PAR

\-

\-

C1

X

X

CMIS\_S\_ACE

\-

\-

C1

X

CMIS\_S\_ACL

\-

\-

C1

X

CMIS\_S\_ACL\_CAPABILITIES

\-

\-

C1

X

CMIS\_S\_ALLOWABLE\_ACTIONS

\-

\-

C1

X

CMIS\_S\_CAPABILITIES

\-

\-

C1

X

CMIS\_S\_CHANGE\_EVENT

\-

\-

C1

X

CMIS\_S\_CHOICE

\-

\-

C1

X

CMIS\_S\_CLIENT\_PROPERTY

\-

\-

C1

X

CMIS\_S\_CNT\_DLVRY\_NFO

\-

\-

C1

X

CMIS\_S\_CONTENT\_RAW

\-

\-

C1

X

CMIS\_S\_CONTENT\_STREAM

\-

\-

C1

X

CMIS\_S\_DATE\_TIME

\-

\-

C1

X

CMIS\_S\_EXTENDED\_FEATURES

\-

\-

C1

X

CMIS\_S\_EXTENSION

\-

\-

C1

X

CMIS\_S\_ID\_AND\_CHANGE\_TOKEN

\-

\-

C1

X

CMIS\_S\_IMPL\_CAP

\-

\-

C1

X

CMIS\_S\_KEY\_VALUE

\-

\-

C1

X

CMIS\_S\_KEY\_VALUES

\-

\-

C1

X

CMIS\_S\_OBJECT

\-

\-

C1

X

CMIS\_S\_OBJECT\_CONTAINER

\-

\-

C1

X

CMIS\_S\_OBJECT\_IN\_FOLDER

\-

\-

C1

X

CMIS\_S\_OBJECT\_IN\_FOLDER\_LIST

\-

\-

C1

X

CMIS\_S\_OBJECT\_LIST

\-

\-

C1

X

CMIS\_S\_OBJECT\_PARENT

\-

\-

C1

X

CMIS\_S\_PERMISSION\_DEFINITION

\-

\-

C1

X

CMIS\_S\_PERMISSION\_MAPPING

\-

\-

C1

X

CMIS\_S\_PRINCIPAL

\-

\-

C1

X

CMIS\_S\_PROPERTIES

\-

\-

C1

X

CMIS\_S\_PROPERTY

\-

\-

C1

X

CMIS\_S\_PROPERTY\_DEFINITION

\-

\-

C1

X

CMIS\_S\_PROPERTY\_VALUE

\-

\-

C1

X

CMIS\_S\_QUERY\_RESULT

\-

\-

C1

X

CMIS\_S\_QUERY\_RESULT\_LIST

\-

\-

C1

X

CMIS\_S\_RELATIONSHIP

\-

\-

C1

X

CMIS\_S\_RENDITION

\-

\-

C1

X

CMIS\_S\_REPOSITORY\_INFO

\-

\-

C1

X

CMIS\_S\_TYPE\_CONTAINER

\-

\-

C1

X

CMIS\_S\_TYPE\_DEFINITION

\-

\-

C1

X

CMIS\_S\_TYPE\_LIST

\-

\-

C1

X

CMIS\_S\_TYPE\_MUTABILITY

\-

\-

C1

X

CMIS\_S\_TYPE\_SET\_ATTR

\-

\-

C1

X

FDT\_BRS\_S\_TRACE\_HEADER

\-

\-

C1

X

X

FDT\_BRS\_S\_TRACE\_RECORD

\-

\-

C1

X

X

IHTTPNVP

\-

\-

C1

 

X

INCL\_EEW\_COBL

\-

\-

C1

 

X

MATCH\_RESULT

\-

\-

C1

X

X

PRXCTRL

\-

\-

C1

X

X

QNAME

\-

\-

C1

X

RCONT

\-

\-

C1

 

X

REPL\_RESULT

\-

\-

C1

X

X

RHEAD

\-

\-

C1

 

X

RSM\_S\_MESSAGE\_CONTAINER

\-

\-

C1

 

X

SCRL\_S\_AMOUNT

\-

\-

C1

 

X

SCRL\_S\_QUANTITY

\-

\-

C1

 

X

SUBMATCH\_RESULT

\-

\-

C1

X

X

SWF\_PBL\_AGENT

\-

\-

C1

X

X

SWF\_PBL\_SAP\_OBJECT

\-

\-

C1

 

X

SWW\_SONT\_KEY

\-

\-

C1

X

X

SXCO\_S\_AR\_OBJECT\_KEY

\-

\-

C1

X

SXCO\_S\_CDS\_ANN\_VAL\_MEMBER

\-

\-

C1

X

SXCO\_S\_CDS\_DS\_PARAMETER

\-

\-

C1

X

SXCO\_S\_JSON\_NAME\_MAPPING

\-

\-

C1

X

X

SXCO\_S\_TAB\_INCLUDE

\-

\-

C1

X

SXSDDURATION

\-

\-

C1

X

X

SXSLTEPAR

\-

\-

C1

X

SYCH\_BDL\_DRAFT\_ADMIN\_INC

\-

\-

C1

X

SYMSG

\-

\-

C1

X

X

SYST

\-

\-

C1

 

X

T005N

\-

\-

C3

 

T006

\-

\-

C3

 

T006A

\-

\-

C3

 

T006B

\-

\-

C3

 

T006C

\-

\-

C3

 

T006D

\-

\-

C3

 

T006I

\-

\-

C3

 

T006J

\-

\-

C3

 

T006T

\-

\-

C3

 

T006\_OIB

\-

\-

C3

 

TB009

\-

\-

C3

 

TB019

\-

\-

C3

 

TB025

\-

\-

C3

 

TB027

\-

\-

C3

 

TB028

\-

\-

C3

 

TB032

\-

\-

C3

 

TB910

\-

\-

C3

 

TB912

\-

\-

C3

 

TB914

\-

\-

C3

 

TB916

\-

\-

C3

 

TSAD12

\-

\-

C3

 

TSAD9

\-

\-

C3

 

UT8STRLIN

\-

\-

C1

 

X

UTF8STR\_RC

\-

\-

C1

 

X

TTYP - Table Type

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

/AIF/CHANGEABLE\_FIELD\_TT

\-

\-

C1

 

X

ABAPOFFLENTAB

\-

\-

C1

 

X

ABAP\_SORTORDER\_TAB

\-

\-

C1

X

X

ABP\_BEHV\_AUTHORIZATION\_TAB

\-

\-

C1

X

ABP\_BEHV\_CHANGES\_TAB

\-

\-

C1

X

ABP\_BEHV\_FEATURES\_TAB

\-

\-

C1

X

ABP\_BEHV\_GLOBAL\_PERMISSION\_TAB

\-

\-

C1

X

ABP\_BEHV\_LOCKS\_TAB

\-

\-

C1

X

ABP\_BEHV\_PERMISSIONS\_TAB

\-

\-

C1

X

ABP\_BEHV\_RELATING\_TAB

\-

\-

C1

X

ABP\_BEHV\_RESPONSE\_TAB

\-

\-

C1

X

ABP\_BEHV\_RETRIEVALS\_TAB

\-

\-

C1

X

ABP\_FIELD\_NAME\_TAB

\-

\-

C1

X

AUTHORIZATION

\-

\-

C1

X

AUTHORIZATION\_TAB

\-

\-

C1

X

AUTHVALINTERVAL\_TAB

\-

\-

C1

X

BADI\_FILTER\_BINDINGS

\-

\-

C1

X

BAL\_T\_LGNM

\-

\-

C1

X

BAPIMONLST

\-

\-

C1

X

X

BAPIPAREXTAB

\-

\-

C1

X

X

BAPIRETCT

\-

\-

C1

X

X

BAPIRETM

\-

\-

C1

X

X

BAPIRETTAB

\-

\-

C1

X

X

CMIS\_T\_ACE

\-

\-

C1

X

CMIS\_T\_BOOLEAN

\-

\-

C1

X

CMIS\_T\_CHOICE

\-

\-

C1

X

CMIS\_T\_CLIENT\_PROPERTY

\-

\-

C1

X

CMIS\_T\_DATE\_TIME

\-

\-

C1

X

CMIS\_T\_DECIMAL

\-

\-

C1

X

CMIS\_T\_ENUM

\-

\-

C1

X

CMIS\_T\_EXTENDED\_FEATURES

\-

\-

C1

X

CMIS\_T\_EXTENSION

\-

\-

C1

X

CMIS\_T\_ID

\-

\-

C1

X

CMIS\_T\_ID\_AND\_CHANGE\_TOKEN

\-

\-

C1

X

CMIS\_T\_KEY\_VALUES

\-

\-

C1

X

CMIS\_T\_LONG

\-

\-

C1

X

CMIS\_T\_MAP

\-

\-

C1

X

CMIS\_T\_OBJECT

\-

\-

C1

X

CMIS\_T\_OBJECT\_CONTAINER

\-

\-

C1

X

CMIS\_T\_OBJECT\_IN\_FOLDER

\-

\-

C1

X

CMIS\_T\_OBJECT\_PARENT

\-

\-

C1

X

CMIS\_T\_PERMISSION\_DEFINITION

\-

\-

C1

X

CMIS\_T\_PERMISSION\_MAPPING

\-

\-

C1

X

CMIS\_T\_PROPERTY

\-

\-

C1

X

CMIS\_T\_PROPERTY\_DEFINITION

\-

\-

C1

X

CMIS\_T\_PROPERTY\_VALUE

\-

\-

C1

X

CMIS\_T\_QUERY\_RESULT

\-

\-

C1

X

CMIS\_T\_RELATIONSHIP

\-

\-

C1

X

CMIS\_T\_RENDITION

\-

\-

C1

X

CMIS\_T\_REPOSITORY\_INFO

\-

\-

C1

X

CMIS\_T\_STRING

\-

\-

C1

X

CMIS\_T\_TYPE\_CONTAINER

\-

\-

C1

X

CMIS\_T\_TYPE\_DEFINITION

\-

\-

C1

X

FDT\_BRS\_T\_TRACE\_HEADER

\-

\-

C1

X

X

FDT\_BRS\_T\_TRACE\_RECORD

\-

\-

C1

X

X

MATCH\_RESULT\_TAB

\-

\-

C1

X

X

PRXCTRLTAB

\-

\-

C1

X

X

REPL\_RESULT\_TAB

\-

\-

C1

X

X

ROLE\_AUTHORIZATIONS

\-

\-

C1

X

RSM\_T\_MESSAGE\_CONTAINER

\-

\-

C1

 

X

STRING\_HASHED\_TABLE

\-

\-

C1

X

X

STRING\_TABLE

\-

\-

C1

X

X

SUBMATCH\_RESULT\_TAB

\-

\-

C1

X

X

SXCO\_T\_ACCESS\_CONTROLS

\-

\-

C1

X

SXCO\_T\_AD\_DATA\_ELEMENTS

\-

\-

C1

X

SXCO\_T\_AD\_FIELD\_NAMES

\-

\-

C1

X

SXCO\_T\_AD\_STRUCTURES

\-

\-

C1

X

SXCO\_T\_AD\_TABLES

\-

\-

C1

X

SXCO\_T\_AD\_TABLE\_TYPES

\-

\-

C1

X

SXCO\_T\_AMDP\_DB\_ENTITIES

\-

\-

C1

X

SXCO\_T\_AMDP\_DB\_OPTIONS

\-

\-

C1

X

SXCO\_T\_AO\_CLASSES

\-

\-

C1

X

SXCO\_T\_AO\_C\_ALIASES

\-

\-

C1

X

SXCO\_T\_AO\_C\_CLASS\_DATAS

\-

\-

C1

X

SXCO\_T\_AO\_C\_CONSTANTS

\-

\-

C1

X

SXCO\_T\_AO\_C\_DATAS

\-

\-

C1

X

SXCO\_T\_AO\_C\_TYPES

\-

\-

C1

X

SXCO\_T\_AO\_INTERFACES

\-

\-

C1

X

SXCO\_T\_AO\_OBJECT\_NAMES

\-

\-

C1

X

SXCO\_T\_AO\_S\_EXCEPTIONS

\-

\-

C1

X

SXCO\_T\_AO\_S\_P\_CHANGINGS

\-

\-

C1

X

SXCO\_T\_AO\_S\_P\_EXPORTINGS

\-

\-

C1

X

SXCO\_T\_AO\_S\_P\_IMPORTINGS

\-

\-

C1

X

SXCO\_T\_AO\_S\_P\_RETURNINGS

\-

\-

C1

X

SXCO\_T\_APLO\_OBJ\_TEXTS

\-

\-

C1

X

SXCO\_T\_APLO\_OBJ\_TEXT\_ATTRIBTS

\-

\-

C1

X

SXCO\_T\_APLO\_SUBOBJECTS

\-

\-

C1

X

SXCO\_T\_APLO\_SUBOBJ\_TEXTS

\-

\-

C1

X

SXCO\_T\_APLO\_SUBOBJ\_TXT\_ATTRBTS

\-

\-

C1

X

SXCO\_T\_APPEND\_STRUCTURES

\-

\-

C1

X

SXCO\_T\_APPLICATION\_LOG\_OBJECTS

\-

\-

C1

X

SXCO\_T\_APS\_COMPONENTS

\-

\-

C1

X

SXCO\_T\_ARS\_VISIBILITIES

\-

\-

C1

X

SXCO\_T\_AR\_FILTERS

\-

\-

C1

X

SXCO\_T\_AR\_OBJECTS

\-

\-

C1

X

SXCO\_T\_AR\_OBJECT\_KEY

\-

\-

C1

X

SXCO\_T\_ASQL\_CONSTRAINTS

\-

\-

C1

X

SXCO\_T\_BAL\_LOG\_FILTERS

\-

\-

C1

X

SXCO\_T\_BAL\_LOG\_HANDLES

\-

\-

C1

X

SXCO\_T\_BCO\_TEXTS

\-

\-

C1

X

SXCO\_T\_BCO\_TEXT\_ATTRIBUTES

\-

\-

C1

X

SXCO\_T\_BDEF\_TRIGGER\_OPERATIONS

\-

\-

C1

X

SXCO\_T\_BEHAVIOR\_DEFINITIONS

\-

\-

C1

X

SXCO\_T\_BUSINESS\_CNFGRTN\_OBJCTS

\-

\-

C1

X

SXCO\_T\_CDS\_ANNOTATIONS

\-

\-

C1

X

SXCO\_T\_CDS\_ANN\_FILTERS

\-

\-

C1

X

SXCO\_T\_CDS\_ANN\_VALUES

\-

\-

C1

X

SXCO\_T\_CDS\_ANN\_VAL\_MEMBER

\-

\-

C1

X

SXCO\_T\_CDS\_ASSOCIATIONS

\-

\-

C1

X

SXCO\_T\_CDS\_COMPOSITIONS

\-

\-

C1

X

SXCO\_T\_CDS\_DS\_PARAMETER

\-

\-

C1

X

SXCO\_T\_CDS\_ENTITIES

\-

\-

C1

X

SXCO\_T\_CDS\_FIELDS

\-

\-

C1

X

SXCO\_T\_CDS\_FIELD\_NAMES

\-

\-

C1

X

SXCO\_T\_CDS\_PARAMETERS

\-

\-

C1

X

SXCO\_T\_CDS\_PARAMETER\_NAMES

\-

\-

C1

X

SXCO\_T\_CDS\_UNIONS

\-

\-

C1

X

SXCO\_T\_CLAS\_C\_METHODS

\-

\-

C1

X

SXCO\_T\_CP\_BAL\_EXC\_ADDITIONS

\-

\-

C1

X

SXCO\_T\_CP\_BAL\_LOGS

\-

\-

C1

X

SXCO\_T\_CP\_BAL\_LOG\_EXCEPTIONS

\-

\-

C1

X

SXCO\_T\_CP\_BAL\_LOG\_MESSAGES

\-

\-

C1

X

SXCO\_T\_CP\_GEN\_D\_O\_PUT\_OPTIONS

\-

\-

C1

X

SXCO\_T\_CP\_TRANSPORTS

\-

\-

C1

X

SXCO\_T\_CP\_TR\_TASKS

\-

\-

C1

X

SXCO\_T\_DATABASE\_TABLES

\-

\-

C1

X

SXCO\_T\_DATA\_DEFINITIONS

\-

\-

C1

X

SXCO\_T\_DBT\_FIELDS

\-

\-

C1

X

SXCO\_T\_DCL\_EXPRESSIONS

\-

\-

C1

X

SXCO\_T\_DDEF\_ENT\_TEXTS

\-

\-

C1

X

SXCO\_T\_DDEF\_ENT\_TEXT\_ATTRIBUTS

\-

\-

C1

X

SXCO\_T\_DDEF\_FLD\_TEXTS

\-

\-

C1

X

SXCO\_T\_DDEF\_FLD\_TEXT\_ATTRIBUTS

\-

\-

C1

X

SXCO\_T\_DDEF\_PRM\_TEXTS

\-

\-

C1

X

SXCO\_T\_DDEF\_PRM\_TEXT\_ATTRIBUTS

\-

\-

C1

X

SXCO\_T\_DOMAINS

\-

\-

C1

X

SXCO\_T\_DOMAIN\_FIXED\_VALUES

\-

\-

C1

X

SXCO\_T\_DOMAIN\_TEXTS

\-

\-

C1

X

SXCO\_T\_DOMAIN\_TEXT\_ATTRIBUTES

\-

\-

C1

X

SXCO\_T\_DTEL\_TEXTS

\-

\-

C1

X

SXCO\_T\_DTEL\_TEXT\_ATTRIBUTES

\-

\-

C1

X

SXCO\_T\_FM\_EXCEPTIONS

\-

\-

C1

X

SXCO\_T\_FM\_EXCEPTION\_NAMES

\-

\-

C1

X

SXCO\_T\_FM\_NAMES

\-

\-

C1

X

SXCO\_T\_FM\_PARAMETER\_NAMES

\-

\-

C1

X

SXCO\_T\_FM\_PRMS\_CHANGING

\-

\-

C1

X

SXCO\_T\_FM\_PRMS\_EXPORTING

\-

\-

C1

X

SXCO\_T\_FM\_PRMS\_IMPORTING

\-

\-

C1

X

SXCO\_T\_FUNCTION\_GROUPS

\-

\-

C1

X

SXCO\_T\_FUNCTION\_MODULES

\-

\-

C1

X

SXCO\_T\_GEN\_DDLS\_DDL\_EXPRS

\-

\-

C1

X

SXCO\_T\_GEN\_O\_FINDINGS

\-

\-

C1

X

SXCO\_T\_GLOBAL\_TEMPORARY\_TABLES

\-

\-

C1

X

SXCO\_T\_GTT\_FIELDS

\-

\-

C1

X

SXCO\_T\_I18N\_TEXTS

\-

\-

C1

X

SXCO\_T\_I18N\_TRANSLATIONS

\-

\-

C1

X

SXCO\_T\_INTF\_C\_METHODS

\-

\-

C1

X

SXCO\_T\_JSON\_NAME\_MAPPING

\-

\-

C1

X

X

SXCO\_T\_JSON\_TRANSFORMATIONS

\-

\-

C1

X

X

SXCO\_T\_LANGUAGES

\-

\-

C1

X

SXCO\_T\_MC\_MESSAGES

\-

\-

C1

X

SXCO\_T\_MC\_TEXTS

\-

\-

C1

X

SXCO\_T\_MC\_TEXT\_ATTRIBUTES

\-

\-

C1

X

SXCO\_T\_MESSAGES

\-

\-

C1

X

X

SXCO\_T\_MESSAGE\_CLASSES

\-

\-

C1

X

SXCO\_T\_METADATA\_EXTENSIONS

\-

\-

C1

X

SXCO\_T\_ME\_ENT\_TEXTS

\-

\-

C1

X

SXCO\_T\_ME\_ENT\_TEXT\_ATTRIBUTES

\-

\-

C1

X

SXCO\_T\_ME\_FLD\_TEXTS

\-

\-

C1

X

SXCO\_T\_ME\_FLD\_TEXT\_ATTRIBUTES

\-

\-

C1

X

SXCO\_T\_ME\_PRM\_TEXTS

\-

\-

C1

X

SXCO\_T\_ME\_PRM\_TEXT\_ATTRIBUTES

\-

\-

C1

X

SXCO\_T\_PACKAGES

\-

\-

C1

X

SXCO\_T\_SERVICE\_BINDINGS

\-

\-

C1

X

SXCO\_T\_SERVICE\_DEFINITIONS

\-

\-

C1

X

SXCO\_T\_SRVB\_SERVICES

\-

\-

C1

X

SXCO\_T\_SRVB\_SERVICE\_VERSIONS

\-

\-

C1

X

SXCO\_T\_SRVD\_EXPOSURES

\-

\-

C1

X

SXCO\_T\_STR\_COMPONENTS

\-

\-

C1

X

SXCO\_T\_TAB\_FIELDS

\-

\-

C1

X

SXCO\_T\_TAB\_INCLUDE

\-

\-

C1

X

SXCO\_T\_TRANSFORMATIONS

\-

\-

C1

X

SXCO\_T\_TR\_FILTERS

\-

\-

C1

X

SXCO\_T\_TT\_KEY\_COMPONENTS

\-

\-

C1

X

SXCO\_T\_TT\_SECONDARY\_KEYS

\-

\-

C1

X

SXSLTEPARS

\-

\-

C1

X

SYMSG\_TAB

\-

\-

C1

X

X

TIHTTPNVP

\-

\-

C1

X

X

TIHTTPURLS2

\-

\-

C1

X

X

UTF8STRTAB

\-

\-

C1

 

X

XSTRING\_TABLE

\-

\-

C1

X

X

TYPE - Type Group

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

ABAP

\-

\-

C1

X

X

VIEW - View

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

V\_005\_B

\-

\-

C3

 

V\_T005O

\-

\-

C3

 

V\_T005S

\-

\-

C3

 

V\_T005\_BAS

\-

\-

C3

 

V\_TB001

\-

\-

C3

 

V\_TB003

\-

\-

C3

 

V\_TB004

\-

\-

C3

 

V\_TB005

\-

\-

C3

 

V\_TB008S

\-

\-

C3

 

V\_TB008U

\-

\-

C3

 

V\_TB033\_SEC

\-

\-

C3

 

V\_TB037

\-

\-

C3

 

V\_TB038

\-

\-

C3

 

V\_TB038A

\-

\-

C3

 

V\_TB039A

\-

\-

C3

 

V\_TCURF

\-

\-

C3

 

V\_TCURN

\-

\-

C3

 

V\_TCURR

\-

\-

C3

 

V\_TCURV

\-

\-

C3

 

V\_TFKTAXNUMTYPEC

\-

\-

C3

 

V\_TSAD2

\-

\-

C3

 

V\_TSAD3

\-

\-

C3

 

V\_TSAD4

\-

\-

C3

 

V\_TSAD5

\-

\-

C3

 

V\_TSADVC\_CLIDEP

\-

\-

C3

 

V\_TZONEBAS

\-

\-

C3

 

WDCA - Web Dynpro Application Configuration

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

S\_EPM\_FPM\_PO\_ATO 02

\-

\-

C0

 

X

S\_EPM\_FPM\_PO\_ATO\_MOBILE 02

\-

\-

C0

 

X

XSLT - Transformation

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

ID

\-

\-

C1

X

X

ID\_INDENT

\-

\-

C1

X

X