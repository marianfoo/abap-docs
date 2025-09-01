  

* * *

AS ABAP Release 816, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Rules for ABAP Cloud](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_strict_rules.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Released%20APIs%2C%20ABENRELEASED_APIS%2C%20816%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Released APIs

The following tables show all transportable [repository objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrepository_object_glosry.htm "Glossary Entry") of the component SAP Basis that are [released APIs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreleased_api_glosry.htm "Glossary Entry") and can be used in [restricted ABAP language versions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrestricted_version_glosry.htm "Glossary Entry").

-   The first three columns show the repository objects or parts of repository objects.
-   Column Release Contract shows the [release contract](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrelease_contract_glosry.htm "Glossary Entry") that is used for releasing the API.
-   The two subsequent columns show, whether the API is released for restricted ABAP language version [ABAP for Cloud Development](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_cloud_dev_glosry.htm "Glossary Entry"), [ABAP for Key Users](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_key_users_glosry.htm "Glossary Entry") or for both.
-   Column State shows the release state that can be Released or Deprcated.
-   In case of deprecation, the successor object is shown in column Successor if available.

Any repository object that can be used in a restricted ABAP language versions must be classified with an appropriate release contract ( [C1 contract](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_contract_glosry.htm "Glossary Entry") in general). But not all repository objects with a release contract can be used in a restricted language version.

Hint

You can execute program ABAP\_DOCU\_RELEASED\_APIS, where you can restrict the result to certain release contracts or language versions and also select non-transportable objects.

-   [AUTH - Authorization Check Fields](#@@ITOC@@ABENRELEASED_APIS_1)
-   [BDEF - Behavior Definition](#@@ITOC@@ABENRELEASED_APIS_2)
-   [CHAR - Object characteristic](#@@ITOC@@ABENRELEASED_APIS_3)
-   [CHKC - Check category](#@@ITOC@@ABENRELEASED_APIS_4)
-   [CHKO - Check](#@@ITOC@@ABENRELEASED_APIS_5)
-   [CHKV - Check Variant](#@@ITOC@@ABENRELEASED_APIS_6)
-   [CLAS - Class (ABAP Objects)](#@@ITOC@@ABENRELEASED_APIS_7)
-   [DDLS - Data Definition Language Source](#@@ITOC@@ABENRELEASED_APIS_8)
-   [DOMA - Domain](#@@ITOC@@ABENRELEASED_APIS_9)
-   [DRTY - CDS Type Definitions](#@@ITOC@@ABENRELEASED_APIS_10)
-   [DSFD - CDS Scalar Function Definition](#@@ITOC@@ABENRELEASED_APIS_11)
-   [DSFI - CDS Scalar Function Implementation Reference](#@@ITOC@@ABENRELEASED_APIS_12)
-   [DTEL - Data Element](#@@ITOC@@ABENRELEASED_APIS_13)
-   [ENHS - Enhancement Spot](#@@ITOC@@ABENRELEASED_APIS_14)
-   [FDT0 - FDT/BRFplus: System Application](#@@ITOC@@ABENRELEASED_APIS_15)
-   [FUGR - Function Group](#@@ITOC@@ABENRELEASED_APIS_16)
-   [G4BA - SAP Gateway OData V4 Backend Service Group & Assignments](#@@ITOC@@ABENRELEASED_APIS_17)
-   [INTF - Interface (ABAP Objects)](#@@ITOC@@ABENRELEASED_APIS_18)
-   [IWSV - SAP Gateway Business Suite Enablement - Service](#@@ITOC@@ABENRELEASED_APIS_19)
-   [MSAG - Message Class](#@@ITOC@@ABENRELEASED_APIS_20)
-   [SQL1 - SQL Service Binding (SQL1)](#@@ITOC@@ABENRELEASED_APIS_21)
-   [SUSO - Authorization object](#@@ITOC@@ABENRELEASED_APIS_22)
-   [TABL - Table](#@@ITOC@@ABENRELEASED_APIS_23)
-   [TTYP - Table Type](#@@ITOC@@ABENRELEASED_APIS_24)
-   [TYPE - Type Group](#@@ITOC@@ABENRELEASED_APIS_25)
-   [VIEW - View](#@@ITOC@@ABENRELEASED_APIS_26)
-   [WDCA - Web Dynpro Application Configuration](#@@ITOC@@ABENRELEASED_APIS_27)
-   [XSLT - Transformation](#@@ITOC@@ABENRELEASED_APIS_28)

AUTH - Authorization Check Fields   

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

State

Successor

ACTVT

\-

\-

C1

X

 

Released

TABLE

\-

\-

C1

X

 

Released

BDEF - Behavior Definition   

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

State

Successor

I\_CPWF\_INST

\-

\-

C1

X

 

Released

CHAR - Object characteristic   

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

State

Successor

TRANSLATION\_DEPTH

\-

\-

C1

X

 

Released

CHKC - Check category   

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

State

Successor

API\_RELEASE

\-

\-

C1

X

 

Released

ATC\_CHK\_CAT\_CDS\_PERFORMANCE

\-

\-

C1

X

 

Released

CI\_BUSINESS\_SERVICES

\-

\-

C1

X

 

Released

CI\_CDS

\-

\-

C1

X

 

Released

CI\_CDS\_GENERAL

\-

\-

C1

X

 

Released

CI\_CDS\_SECOBJ

\-

\-

C1

X

 

Released

CI\_CDS\_SYNTAX

\-

\-

C1

X

 

Released

CI\_CONVENTION

\-

\-

C1

X

 

Released

CI\_DICTIONARY

\-

\-

C1

X

 

Released

CI\_DYNAMIC

\-

\-

C1

X

 

Released

CI\_ILM

\-

\-

C1

X

 

Released

CI\_PERFORMANCE

\-

\-

C1

X

 

Released

CI\_RAP

\-

\-

C1

X

 

Released

CI\_ROBUSTNESS

\-

\-

C1

X

 

Released

CI\_SEARCH

\-

\-

C1

X

 

Released

CI\_SECURITY

\-

\-

C1

X

 

Released

CI\_SYNTAX

\-

\-

C1

X

 

Released

CI\_USER\_INTERFACE

\-

\-

C1

X

 

Released

SADL\_RUNTIME

\-

\-

C1

X

 

Released

SYCM\_CLOUD\_READINESS

\-

\-

C1

X

 

Released

SYCM\_S4H\_READINESS

\-

\-

C1

X

 

Released

CHKO - Check   

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

State

Successor

ABAP\_CLOUD\_PRECHECK\_CHANGES

\-

\-

C1

X

 

Released

ABAP\_UNIT

\-

\-

C1

X

 

Released

API\_CATALOG\_USAGE

\-

\-

C1

X

 

Released

API\_COMPATIBILITY

\-

\-

C1

X

 

Released

API\_CONSISTENCY

\-

\-

C1

X

 

Released

API\_USAGE

\-

\-

C1

X

 

Released

ATC\_CHECK\_BC\_CDS\_PF1

\-

\-

C1

X

 

Released

BDEF\_IMPL\_CHECK

\-

\-

C1

X

 

Released

BSP\_SEC

\-

\-

C1

X

 

Released

CDS\_ACCESS\_CONDITIONS

\-

\-

C1

X

 

Released

CDS\_DDLX\_SYNTAX\_CHECK

\-

\-

C1

X

 

Released

CDS\_REFERENCED\_OBJECTS

\-

\-

C1

X

 

Released

CI\_AMDP\_HDB\_MIGRATION

\-

\-

C1

X

 

Released

CI\_ANALYZE\_SELECT\_HANA

\-

\-

C1

X

 

Released

CI\_ANALYZE\_WHERE

\-

\-

C1

X

 

Released

CI\_ANALYZE\_WHERE\_IMUD

\-

\-

C1

X

 

Released

CI\_CRITICAL\_STATEMENTS

\-

\-

C1

X

 

Released

CI\_DB\_OPS\_IN\_LOOPS

\-

\-

C1

X

 

Released

CI\_DCLS\_IRB

\-

\-

C1

X

 

Released

CI\_DDIC\_TABLES

\-

\-

C1

X

 

Released

CI\_FIND\_DYN\_SQL

\-

\-

C1

X

 

Released

CI\_FOR\_ALL\_ENTRIES

\-

\-

C1

X

 

Released

CI\_FOR\_ALL\_ENTRIES\_HANA

\-

\-

C1

X

 

Released

CI\_ILM\_OBJECT

\-

\-

C1

X

 

Released

CI\_IMUD\_TAW\_SEC01

\-

\-

C1

X

 

Released

CI\_ITAB\_PERFORMANCE

\-

\-

C1

X

 

Released

CI\_METRIC\_PROC

\-

\-

C1

X

 

Released

CI\_NAMING\_NEW

\-

\-

C1

X

 

Released

CI\_NO\_ORDER\_BY

\-

\-

C1

X

 

Released

CI\_OO\_SIZE

\-

\-

C1

X

 

Released

CI\_SEARCH\_ABAP\_PATTERN

\-

\-

C1

X

 

Released

CI\_SEARCH\_DB\_OPS

\-

\-

C1

X

 

Released

CI\_SEARCH\_DB\_OPS\_IN\_PC

\-

\-

C1

X

 

Released

CI\_SELECT\_EXIT

\-

\-

C1

X

 

Released

CI\_SELECT\_TAW\_BYBUF

\-

\-

C1

X

 

Released

CI\_SELECT\_TAW\_SEC01

\-

\-

C1

X

 

Released

CI\_SELECT\_THEN\_CHECK

\-

\-

C1

X

 

Released

CI\_SELECT\_WITH\_DELETE

\-

\-

C1

X

 

Released

CI\_SEQ\_ACC\_ITAB\_NESTED

\-

\-

C1

X

 

Released

CI\_SORT\_IN\_LOOP

\-

\-

C1

X

 

Released

CI\_SQL1\_CONSISTENCY

\-

\-

C1

X

 

Released

CI\_UI5\_COMP

\-

\-

C1

X

 

Released

CI\_VALUE\_PARAMETER

\-

\-

C1

X

 

Released

DD\_CI\_DDIC\_CONSISTENCY\_AC

\-

\-

C1

X

 

Released

DD\_CI\_DDIC\_CONSISTENCY\_PA

\-

\-

C1

X

 

Released

ODATA\_CONSISTENCY

\-

\-

C1

X

 

Released

ODATA\_CONSIST\_EVTB

\-

\-

C1

X

 

Released

SADL\_RUNTIME

\-

\-

C1

X

 

Released

SADL\_TEXT\_SEARCH

\-

\-

C1

X

 

Released

SLIN\_MAIN

\-

\-

C1

X

 

Released

SLIN\_SEC

\-

\-

C1

X

 

Released

SLIN\_VERS

\-

\-

C1

X

 

Released

SYCM\_CHECK\_ABAP\_LANGU\_VERSION

\-

\-

C1

X

 

Released

SYCM\_CLOUD\_ALLOWED\_OBJCT\_TYPES

\-

\-

C1

X

 

Released

SYCM\_CLOUD\_RELEASED\_OBJECTS

\-

\-

C1

X

 

Released

SYCM\_RELEASED\_CLOUDIFIC\_REPOS

\-

\-

C1

X

 

Released

SYCM\_S4H\_CDS\_PRIV\_ACC

\-

\-

C1

X

 

Released

SYCM\_S4H\_DD\_ENHANCEMENTS

\-

\-

C1

X

 

Released

SYCM\_S4H\_DD\_VIEW\_BASE

\-

\-

C1

X

 

Released

SYCM\_S4H\_FIELD\_EXT

\-

\-

C1

X

 

Released

SYCM\_S4H\_SAP\_QUERY

\-

\-

C1

X

 

Released

SYCM\_S4H\_SEARCH\_DB\_OPS

\-

\-

C1

X

 

Released

SYCM\_S4H\_TRAN\_LITERALS

\-

\-

C1

X

 

Released

SYCM\_S4H\_WHERE\_USED

\-

\-

C1

X

 

Released

CHKV - Check Variant   

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

State

Successor

ABAP\_CLOUD\_DEVELOPMENT\_DEFAULT

\-

\-

C1

X

 

Released

ABAP\_CLOUD\_READINESS

\-

\-

C1

X

 

Released

FUNCTIONAL\_DB

\-

\-

C1

X

 

Released

SAP\_CLOUD\_PLATFORM\_ATC\_DEFAULT

\-

\-

C1

X

 

Deprecated

CHKV ABAP\_CLOUD\_DEVELOPMENT\_DEFAULT

SAP\_CP\_READINESS

\-

\-

C1

X

 

Deprecated

CHKV ABAP\_CLOUD\_READINESS

SLIN\_SEC

\-

\-

C1

X

 

Released

CLAS - Class (ABAP Objects)   

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

State

Successor

/IWBEP/CL\_CP\_FACTORY\_REMOTE

\-

\-

C1

X

 

Released

/IWBEP/CL\_CP\_FACTORY\_UNIT\_TST

\-

\-

C1

X

 

Released

/IWBEP/CL\_V4\_ABS\_PM\_MODEL\_PROV

\-

\-

C1

X

 

Released

/IWBEP/CX\_CP\_REMOTE

\-

\-

C1

X

 

Released

/IWBEP/CX\_GATEWAY

\-

\-

C1

X

 

Released

/IWXBE/CL\_GENERIC\_CONS\_DESCRIP

\-

\-

C1

X

 

Released

/IWXBE/CX\_EXCEPTION

\-

\-

C1

X

 

Released

CL\_ABAP\_API\_STATE

\-

\-

C1

X

 

Released

CL\_ABAP\_BEHAVIOR\_EVENT\_HANDLER

\-

\-

C1

X

 

Released

CL\_ABAP\_BEHAVIOR\_HANDLER

\-

\-

C1

X

X

Released

CL\_ABAP\_BEHAVIOR\_SAVER

\-

\-

C1

X

 

Released

CL\_ABAP\_BEHAVIOR\_SAVER\_FAILED

\-

\-

C1

X

 

Released

CL\_ABAP\_BEHV

\-

\-

C1

X

 

Released

CL\_ABAP\_BEHV\_AUX

\-

\-

C1

X

 

Released

CL\_ABAP\_BEHV\_IMPLEMENTATN\_MSG

\-

\-

C1

 

X

Released

CL\_ABAP\_BEHV\_TEST\_ENVIRONMENT

\-

\-

C1

X

 

Released

CL\_ABAP\_BIGINT

\-

\-

C1

X

X

Released

CL\_ABAP\_CHAR\_UTILITIES

\-

\-

C1

X

X

Released

CL\_ABAP\_CLASSDESCR

\-

\-

C1

X

 

Released

CL\_ABAP\_CODEPAGE

\-

\-

C1

 

X

Deprecated

CLAS CL\_ABAP\_CONV\_CODEPAGE

CL\_ABAP\_COMPLEXDESCR

\-

\-

C1

X

 

Released

CL\_ABAP\_CONTAINER\_UTILITIES

\-

\-

C1

 

X

Deprecated

CL\_ABAP\_CONTEXT\_INFO

\-

\-

C1

X

X

Released

CL\_ABAP\_CONV\_CODEPAGE

\-

\-

C1

X

X

Released

CL\_ABAP\_CONV\_IN\_CE

\-

\-

C1

 

X

Deprecated

CLAS CL\_ABAP\_CONV\_CODEPAGE

CL\_ABAP\_CONV\_OUT\_CE

\-

\-

C1

 

X

Deprecated

CLAS CL\_ABAP\_CONV\_CODEPAGE

CL\_ABAP\_CONV\_X2X\_CE

\-

\-

C1

 

X

Deprecated

CLAS CL\_ABAP\_CONV\_CODEPAGE

CL\_ABAP\_CORRESPONDING

\-

\-

C1

X

X

Released

CL\_ABAP\_C\_READER

\-

\-

C1

X

 

Released

CL\_ABAP\_C\_WRITER

\-

\-

C1

X

 

Released

CL\_ABAP\_DATADESCR

\-

\-

C1

X

 

Released

CL\_ABAP\_DATFM

\-

\-

C1

X

X

Released

CL\_ABAP\_DB\_C\_LOCATOR

\-

\-

C1

X

 

Released

CL\_ABAP\_DB\_C\_READER

\-

\-

C1

X

 

Released

CL\_ABAP\_DB\_C\_WRITER

\-

\-

C1

X

 

Released

CL\_ABAP\_DB\_X\_LOCATOR

\-

\-

C1

X

 

Released

CL\_ABAP\_DB\_X\_READER

\-

\-

C1

X

 

Released

CL\_ABAP\_DB\_X\_WRITER

\-

\-

C1

X

 

Released

CL\_ABAP\_DECFLOAT

\-

\-

C1

X

X

Released

CL\_ABAP\_DIFF

\-

\-

C1

X

 

Released

CL\_ABAP\_DYN\_PRG

\-

\-

C1

X

 

Released

CL\_ABAP\_ELEMDESCR

\-

\-

C1

X

 

Released

CL\_ABAP\_ENUMDESCR

\-

\-

C1

X

 

Released

CL\_ABAP\_EXCEPTIONAL\_VALUES

\-

\-

C1

X

X

Released

CL\_ABAP\_FORMAT

\-

\-

C1

X

X

Released

CL\_ABAP\_GZIP

\-

\-

C1

X

X

Released

CL\_ABAP\_GZIP\_BINARY\_STREAM

\-

\-

C1

X

X

Released

CL\_ABAP\_GZIP\_TEXT\_STREAM

\-

\-

C1

X

X

Released

CL\_ABAP\_HMAC

\-

\-

C1

X

 

Released

CL\_ABAP\_INTFDESCR

\-

\-

C1

X

 

Released

CL\_ABAP\_ITAB\_C\_READER

\-

\-

C1

X

 

Released

CL\_ABAP\_ITAB\_C\_WRITER

\-

\-

C1

X

 

Released

CL\_ABAP\_ITAB\_X\_READER

\-

\-

C1

X

 

Released

CL\_ABAP\_ITAB\_X\_WRITER

\-

\-

C1

X

 

Released

CL\_ABAP\_LOCK\_OBJECT\_FACTORY

\-

\-

C1

X

 

Released

CL\_ABAP\_MATCHER

\-

\-

C1

X

X

Released

CL\_ABAP\_MATH

\-

\-

C1

X

X

Released

CL\_ABAP\_MEMORY\_C\_READER

\-

\-

C1

X

 

Released

CL\_ABAP\_MEMORY\_C\_WRITER

\-

\-

C1

X

 

Released

CL\_ABAP\_MEMORY\_X\_READER

\-

\-

C1

X

 

Released

CL\_ABAP\_MEMORY\_X\_WRITER

\-

\-

C1

X

 

Released

CL\_ABAP\_MESSAGE\_DIGEST

\-

\-

C1

X

X

Released

CL\_ABAP\_OBJECTDESCR

\-

\-

C1

X

 

Released

CL\_ABAP\_PARALLEL

\-

\-

C1

X

 

Released

CL\_ABAP\_RANDOM

\-

\-

C1

X

X

Released

CL\_ABAP\_RANDOM\_DECFLOAT16

\-

\-

C1

X

X

Released

CL\_ABAP\_RANDOM\_DECFLOAT34

\-

\-

C1

X

X

Released

CL\_ABAP\_RANDOM\_FLOAT

\-

\-

C1

X

X

Released

CL\_ABAP\_RANDOM\_INT

\-

\-

C1

X

X

Released

CL\_ABAP\_RANDOM\_INT8

\-

\-

C1

X

X

Released

CL\_ABAP\_RANDOM\_PACKED

\-

\-

C1

X

X

Released

CL\_ABAP\_RANDOM\_PACKED\_DEC1

\-

\-

C1

X

X

Released

CL\_ABAP\_RANDOM\_PACKED\_DEC10

\-

\-

C1

X

X

Released

CL\_ABAP\_RANDOM\_PACKED\_DEC11

\-

\-

C1

X

X

Released

CL\_ABAP\_RANDOM\_PACKED\_DEC12

\-

\-

C1

X

X

Released

CL\_ABAP\_RANDOM\_PACKED\_DEC13

\-

\-

C1

X

X

Released

CL\_ABAP\_RANDOM\_PACKED\_DEC14

\-

\-

C1

X

X

Released

CL\_ABAP\_RANDOM\_PACKED\_DEC2

\-

\-

C1

X

X

Released

CL\_ABAP\_RANDOM\_PACKED\_DEC3

\-

\-

C1

X

X

Released

CL\_ABAP\_RANDOM\_PACKED\_DEC4

\-

\-

C1

X

X

Released

CL\_ABAP\_RANDOM\_PACKED\_DEC5

\-

\-

C1

X

X

Released

CL\_ABAP\_RANDOM\_PACKED\_DEC6

\-

\-

C1

X

X

Released

CL\_ABAP\_RANDOM\_PACKED\_DEC7

\-

\-

C1

X

X

Released

CL\_ABAP\_RANDOM\_PACKED\_DEC8

\-

\-

C1

X

X

Released

CL\_ABAP\_RANDOM\_PACKED\_DEC9

\-

\-

C1

X

X

Released

CL\_ABAP\_RANGE

\-

\-

C1

X

 

Released

CL\_ABAP\_RATIONAL

\-

\-

C1

X

X

Released

CL\_ABAP\_REFDESCR

\-

\-

C1

X

 

Released

CL\_ABAP\_REGEX

\-

\-

C1

X

X

Released

CL\_ABAP\_RUNTIME

\-

\-

C1

 

X

Released

CL\_ABAP\_SQL\_CHANGING\_STMNT

\-

\-

C1

X

 

Released

CL\_ABAP\_SQL\_SELECT\_STATEMENT

\-

\-

C1

X

 

Released

CL\_ABAP\_SQL\_STATEMENT\_HANDLE

\-

\-

C1

X

 

Released

CL\_ABAP\_STRING\_C\_READER

\-

\-

C1

X

 

Released

CL\_ABAP\_STRING\_C\_WRITER

\-

\-

C1

X

 

Released

CL\_ABAP\_STRING\_UTILITIES

\-

\-

C1

X

X

Released

CL\_ABAP\_STRING\_X\_READER

\-

\-

C1

X

 

Released

CL\_ABAP\_STRING\_X\_WRITER

\-

\-

C1

X

 

Released

CL\_ABAP\_STRUCTDESCR

\-

\-

C1

X

 

Released

CL\_ABAP\_STRUCT\_UTILITIES

\-

\-

C1

X

 

Released

CL\_ABAP\_TABLEDESCR

\-

\-

C1

X

 

Released

CL\_ABAP\_TESTDOUBLE

\-

\-

C1

X

 

Released

CL\_ABAP\_TIMEFM

\-

\-

C1

X

X

Released

CL\_ABAP\_TIMESTAMP\_UTIL

\-

\-

C1

 

X

Released

CL\_ABAP\_TSTMP

\-

\-

C1

X

X

Released

CL\_ABAP\_TX

\-

\-

C1

X

 

Released

CL\_ABAP\_TYPEDESCR

\-

\-

C1

X

 

Released

CL\_ABAP\_UNGZIP\_BINARY\_STREAM

\-

\-

C1

X

X

Released

CL\_ABAP\_UNGZIP\_TEXT\_STREAM

\-

\-

C1

X

X

Released

CL\_ABAP\_UNIT\_ASSERT

\-

\-

C1

X

X

Released

CL\_ABAP\_UTCLONG

\-

\-

C1

X

X

Released

CL\_ABAP\_VIEW\_OFFLEN

\-

\-

C1

 

X

Deprecated

CLAS CL\_ABAP\_CONV\_CODEPAGE

CL\_ABAP\_X\_WRITER

\-

\-

C1

X

 

Released

CL\_ABAP\_ZIP

\-

\-

C1

X

X

Released

CL\_ADDRESS\_FORMAT

\-

\-

C1

X

X

Released

CL\_APJ\_DT\_CREATE\_CONTENT

\-

\-

C1

X

 

Released

CL\_APJ\_JT\_CHECK\_BASE

\-

\-

C1

X

 

Released

CL\_APJ\_RT\_API

\-

\-

C1

X

 

Released

CL\_APJ\_SCP\_TOOLS

\-

\-

C1

X

 

Released

CL\_ARCH\_DELETE\_API

\-

\-

C1

X

 

Released

CL\_ARCH\_READ\_API

\-

\-

C1

X

 

Released

CL\_ARCH\_RELOAD\_API

\-

\-

C1

X

 

Released

CL\_ARCH\_WRITE\_API

\-

\-

C1

X

 

Released

CL\_AUNIT\_ASSERT

\-

\-

C1

X

 

Deprecated

CLAS CL\_ABAP\_UNIT\_ASSERT

CL\_AUNIT\_AUTHORITY\_CHECK

\-

\-

C1

X

 

Released

CL\_AUNIT\_AUTH\_CHECK\_TYPES\_DEF

\-

\-

C1

X

 

Released

CL\_AUNIT\_CONSTRAINTS

\-

\-

C1

X

 

Released

CL\_AUTH\_CHECK\_FOR\_BU

\-

\-

C1

X

 

Released

CL\_AUTH\_FACTORY

\-

\-

C1

X

 

Released

CL\_BADI\_BASE

\-

\-

C1

X

 

Released

CL\_BALI\_EXCEPTION\_SETTER

\-

\-

C1

X

 

Released

CL\_BALI\_FREE\_TEXT\_SETTER

\-

\-

C1

X

 

Released

CL\_BALI\_HEADER\_SETTER

\-

\-

C1

X

 

Released

CL\_BALI\_ITEM\_FILTER

\-

\-

C1

X

 

Released

CL\_BALI\_LOG

\-

\-

C1

X

 

Released

CL\_BALI\_LOG\_DB

\-

\-

C1

X

 

Released

CL\_BALI\_LOG\_FILTER

\-

\-

C1

X

 

Released

CL\_BALI\_MESSAGE\_SETTER

\-

\-

C1

X

 

Released

CL\_BALI\_OBJECT\_HANDLER

\-

\-

C1

X

 

Released

CL\_BAL\_LOGGING

\-

\-

C1

X

 

Deprecated

CL\_BCFG\_CD\_REUSE\_API\_FACTORY

\-

\-

C1

X

 

Released

CL\_BCFG\_CD\_REUSE\_API\_INJECTOR

\-

\-

C1

X

 

Released

CL\_BCS\_MAIL\_BINARYPART

\-

\-

C1

X

 

Released

CL\_BCS\_MAIL\_BODYPART

\-

\-

C1

X

 

Released

CL\_BCS\_MAIL\_MESSAGE

\-

\-

C1

X

 

Released

CL\_BCS\_MAIL\_SYSTEM\_CONFIG

\-

\-

C1

X

 

Released

CL\_BCS\_MAIL\_TEXTPART

\-

\-

C1

X

 

Released

CL\_BGMC\_PROCESS\_FACTORY

\-

\-

C1

X

 

Released

CL\_BGMC\_TEST\_ENVIRONMENT

\-

\-

C1

X

 

Released

CL\_BLE\_API\_MT\_TENANT

\-

\-

C1

X

 

Released

CL\_BLE\_BADI\_RUNTIME

\-

\-

C1

 

X

Released

CL\_BLE\_TRACE\_WRITER

\-

\-

C1

 

X

Released

CL\_BOTD\_MOCKEMLAPI\_BLDRFACTORY

\-

\-

C1

X

 

Released

CL\_BOTD\_MOCKEMLAPI\_BO\_TEST\_ENV

\-

\-

C1

X

 

Released

CL\_BOTD\_TXBUFDBL\_BO\_TEST\_ENV

\-

\-

C1

X

 

Released

CL\_CBE\_BDEF\_RUNTIME

\-

\-

C1

X

X

Released

CL\_CBO\_DEVELOPER\_ACCESS

\-

\-

C1

X

 

Released

CL\_CDS\_ENTITY\_INSPECTOR

\-

\-

C1

X

 

Released

CL\_CDS\_TEST\_DATA

\-

\-

C1

X

 

Released

CL\_CDS\_TEST\_DATA\_FOR\_CURR\_CONV

\-

\-

C1

X

 

Released

CL\_CDS\_TEST\_DATA\_FOR\_UNIT\_CONV

\-

\-

C1

X

 

Released

CL\_CDS\_TEST\_ENVIRONMENT

\-

\-

C1

X

 

Released

CL\_CHANGEDOCU\_ARCHIVE

\-

\-

C1

X

 

Released

CL\_CHDO\_DELETE\_TOOLS

\-

\-

C1

X

 

Released

CL\_CHDO\_OBJECT\_TOOLS\_REL

\-

\-

C1

X

 

Released

CL\_CHDO\_READ\_TOOLS

\-

\-

C1

X

 

Released

CL\_CHDO\_WRITE\_TOOLS

\-

\-

C1

X

 

Released

CL\_CI\_ATC\_ASSISTANT\_FACTORY

\-

\-

C1

X

 

Released

CL\_CI\_ATC\_DATA\_PROVIDER

\-

\-

C1

X

 

Released

CL\_CI\_ATC\_FINDING\_DETAILS

\-

\-

C1

X

 

Released

CL\_CI\_ATC\_QUICKFIXES

\-

\-

C1

X

 

Released

CL\_CI\_ATC\_QUICKFIX\_CONTEXT

\-

\-

C1

X

 

Released

CL\_CI\_ATC\_UNIT\_DRIVER

\-

\-

C1

X

 

Released

CL\_CMIS\_CLIENT\_FACTORY

\-

\-

C1

X

 

Deprecated

CLAS CL\_CMIS\_CLIENT\_FACTORY2

CL\_CMIS\_CLIENT\_FACTORY2

\-

\-

C1

X

 

Released

CL\_CMIS\_CONSTANTS

\-

\-

C1

X

 

Released

CL\_CMIS\_OBJECT\_FACTORY

\-

\-

C1

X

 

Released

CL\_CMIS\_PROPERTY\_IDS

\-

\-

C1

X

 

Released

CL\_DEMO\_CLASSRUN

\-

\-

C1

X

 

Released

CL\_FDT\_BRS\_PROCESSOR

\-

\-

C1

X

X

Released

CL\_FDT\_CP\_AST\_FACTORY

\-

\-

C1

X

 

Released

CL\_FDT\_CP\_AST\_HELPER

\-

\-

C1

X

 

Released

CL\_FDT\_CP\_AST\_SIMPLE\_NODE

\-

\-

C1

X

 

Released

CL\_FDT\_CP\_FACTORY

\-

\-

C1

X

 

Released

CL\_FDT\_CP\_UTILITY\_API

\-

\-

C1

X

 

Released

CL\_FDT\_OBJ\_SYSTEM\_VARIABLES

\-

\-

C1

X

X

Released

CL\_FHC\_CALENDAR\_ID\_MAPPER

\-

\-

C1

X

 

Released

CL\_FHC\_CALENDAR\_RUNTIME

\-

\-

C1

X

 

Released

CL\_FP\_ADS\_UTIL

\-

\-

C1

X

 

Released

CL\_FP\_FDP\_SERVICES

\-

\-

C1

X

 

Released

CL\_FTD\_ARGUMENT\_MATCHER

\-

\-

C1

X

 

Released

CL\_FUNCTION\_TEST\_ENVIRONMENT

\-

\-

C1

X

 

Released

CL\_GSM\_API\_TEST

\-

\-

C1

X

 

Released

CL\_HTMLTIDY

\-

\-

C1

X

X

Released

CL\_HTTP\_SERVICE\_UTILITY

\-

\-

C1

X

 

Released

CL\_ICU\_TRANSFORMATION

\-

\-

C1

X

 

Released

CL\_IRM\_RT\_DESTRUCTION\_OBJECT

\-

\-

C1

X

 

Released

CL\_IRM\_RT\_EXEC

\-

\-

C1

X

 

Released

CL\_IXML\_CORE

\-

\-

C1

X

 

Released

CL\_IXML\_XPATH

\-

\-

C1

X

 

Released

CL\_MAIL\_ADDRESS

\-

\-

C1

X

 

Released

CL\_MESSAGE\_HELPER

\-

\-

C1

X

 

Released

CL\_NUMBERRANGE\_BUFFER

\-

\-

C1

X

 

Released

CL\_NUMBERRANGE\_INTERVALS

\-

\-

C1

X

 

Released

CL\_NUMBERRANGE\_OBJECTS

\-

\-

C1

X

 

Released

CL\_NUMBERRANGE\_RUNTIME

\-

\-

C1

X

 

Released

CL\_NUMBER\_RANGE\_INTERVALS

\-

\-

C1

X

 

Deprecated

CLAS CL\_NUMBERRANGE\_INTERVALS

CL\_NUMBER\_RANGE\_OBJECTS

\-

\-

C1

X

 

Deprecated

CLAS CL\_NUMBERRANGE\_OBJECTS

CL\_NUMBER\_RANGE\_RUNTIME

\-

\-

C1

X

 

Deprecated

CLAS CL\_NUMBERRANGE\_RUNTIME

CL\_OSQL\_TEST\_DATA

\-

\-

C1

X

 

Released

CL\_OSQL\_TEST\_ENVIRONMENT

\-

\-

C1

X

 

Released

CL\_PCF\_FIELD\_VALIDATION

\-

\-

C1

X

X

Released

CL\_PCF\_GENERIC\_TEXT\_PROVIDER

\-

\-

C1

X

X

Released

CL\_PRINT\_QUEUE\_UTILS

\-

\-

C1

X

 

Released

CL\_PROXY\_CLIENT

\-

\-

C1

X

 

Released

CL\_RAP\_EVENT\_TEST\_ENVIRONMENT

\-

\-

C1

X

 

Released

CL\_RSPO\_PDF\_MERGER

\-

\-

C1

X

 

Released

CL\_SATC\_API

\-

\-

C1

X

 

Released

CL\_SATC\_API\_CHECK\_VARIANT

\-

\-

C1

X

 

Released

CL\_SCAL\_API

\-

\-

C1

X

 

Deprecated

CL\_SCAL\_UTILS

\-

\-

C1

X

 

Released

CL\_SMTG\_EMAIL\_TEMPL\_RENDERER

\-

\-

C1

X

 

Released

CL\_SSI\_RP\_SESSION\_MEMORY

\-

\-

C1

X

 

Released

CL\_SWF\_CPWF\_API\_FACTORY\_A4C

\-

\-

C1

X

 

Released

CL\_SXML\_STRING\_READER

\-

\-

C1

X

 

Released

CL\_SXML\_STRING\_WRITER

\-

\-

C1

X

 

Released

CL\_SXML\_TABLE\_READER

\-

\-

C1

X

 

Released

CL\_SXML\_TABLE\_WRITER

\-

\-

C1

X

 

Released

CL\_SYSTEM\_UUID

\-

\-

C1

X

X

Released

CL\_TPDA\_SP\_VISIBILITY\_TEST1

\-

\-

C1

X

 

Released

CL\_TPDA\_SP\_VISIBILITY\_TEST2

\-

\-

C1

X

 

Released

CL\_UOM\_CONVERSION

\-

\-

C1

X

X

Released

CL\_UOM\_DIM\_MAINTENANCE

\-

\-

C1

X

 

Released

CL\_UOM\_MAINTENANCE

\-

\-

C1

X

 

Released

CL\_UUID\_FACTORY

\-

\-

C1

X

X

Released

CL\_WEB\_HTTP\_CLIENT\_MANAGER

\-

\-

C1

X

 

Released

CL\_WEB\_HTTP\_SERVER\_UTILITY

\-

\-

C1

X

 

Released

CL\_WEB\_HTTP\_UTILITY

\-

\-

C1

X

 

Released

CL\_WS\_PROTOCOL\_FACTORY

\-

\-

C1

X

 

Released

CL\_XCO\_ABAP\_T\_BI\_FIXED\_LENGTH

\-

\-

C1

X

 

Released

CL\_XCO\_ABAP\_T\_BI\_P

\-

\-

C1

X

 

Released

CL\_XCO\_ABAP\_T\_BI\_VRBLE\_LENGTH

\-

\-

C1

X

 

Released

CL\_XCO\_ABAP\_T\_BUILT\_IN

\-

\-

C1

X

 

Released

CL\_XCO\_ABAP\_T\_BUILT\_IN\_FACTORY

\-

\-

C1

X

 

Released

CL\_XCO\_ABAP\_T\_GENERIC\_DATA

\-

\-

C1

X

 

Released

CL\_XCO\_ABAP\_T\_GENERIC\_FACTORY

\-

\-

C1

X

 

Released

CL\_XCO\_ABAP\_T\_G\_DATA

\-

\-

C1

X

 

Released

CL\_XCO\_ABAP\_T\_G\_OBJECT

\-

\-

C1

X

 

Released

CL\_XCO\_ABAP\_T\_R\_BUILT\_IN

\-

\-

C1

X

 

Released

CL\_XCO\_ABAP\_T\_R\_GENERIC

\-

\-

C1

X

 

Released

CL\_XCO\_AD\_BUILT\_IN\_TYPE

\-

\-

C1

X

 

Released

CL\_XCO\_AD\_BUILT\_IN\_TYPE\_F

\-

\-

C1

X

 

Released

CL\_XCO\_AD\_OBJECT\_READ\_STATE

\-

\-

C1

X

 

Released

CL\_XCO\_AD\_OBJECT\_STATE

\-

\-

C1

X

 

Released

CL\_XCO\_AD\_OBJECT\_STATE\_F

\-

\-

C1

X

 

Released

CL\_XCO\_AMDP\_DB\_LANGUAGE

\-

\-

C1

X

 

Released

CL\_XCO\_AMDP\_DB\_OPTION

\-

\-

C1

X

 

Released

CL\_XCO\_AMDP\_DB\_TYPE

\-

\-

C1

X

 

Released

CL\_XCO\_AO\_ORIGIN

\-

\-

C1

X

 

Released

CL\_XCO\_AO\_O\_LOCAL

\-

\-

C1

X

 

Released

CL\_XCO\_AO\_O\_REMOTE

\-

\-

C1

X

 

Released

CL\_XCO\_AO\_PARAMETER\_KIND

\-

\-

C1

X

 

Released

CL\_XCO\_AO\_PARAMETER\_KIND\_F

\-

\-

C1

X

 

Released

CL\_XCO\_AO\_TYPING\_METHOD

\-

\-

C1

X

 

Released

CL\_XCO\_AO\_VERSION

\-

\-

C1

X

 

Released

CL\_XCO\_AO\_VISIBILITY

\-

\-

C1

X

 

Released

CL\_XCO\_AO\_VISIBILITY\_F

\-

\-

C1

X

 

Released

CL\_XCO\_APLO\_OBJ\_TEXT

\-

\-

C1

X

 

Released

CL\_XCO\_APLO\_OBJ\_TEXT\_ATTRIBUTE

\-

\-

C1

X

 

Released

CL\_XCO\_APLO\_SUBOBJ\_TEXT

\-

\-

C1

X

 

Released

CL\_XCO\_APLO\_SUBOBJ\_TEXT\_ATTRBT

\-

\-

C1

X

 

Released

CL\_XCO\_ARS\_API\_STATE

\-

\-

C1

X

 

Released

CL\_XCO\_ARS\_RELEASE\_CONTRACT

\-

\-

C1

X

 

Released

CL\_XCO\_ARS\_RELEASE\_STATE

\-

\-

C1

X

 

Released

CL\_XCO\_ARS\_VISIBILITY

\-

\-

C1

X

 

Released

CL\_XCO\_AR\_SELECTION\_BUILDER

\-

\-

C1

X

 

Released

CL\_XCO\_ASQL\_CONSTRAINT

\-

\-

C1

X

 

Released

CL\_XCO\_ASQL\_CONSTRAINT\_FACTORY

\-

\-

C1

X

 

Released

CL\_XCO\_AU\_DURATION

\-

\-

C1

X

 

Released

CL\_XCO\_AU\_RISK\_LEVEL

\-

\-

C1

X

 

Released

CL\_XCO\_BAL\_LEVEL\_OF\_DETAIL

\-

\-

C1

X

 

Released

CL\_XCO\_BAL\_LOG\_SELECTION\_BLDR

\-

\-

C1

X

 

Released

CL\_XCO\_BCO\_TEXT

\-

\-

C1

X

 

Released

CL\_XCO\_BCO\_TEXT\_ATTRIBUTE

\-

\-

C1

X

 

Released

CL\_XCO\_BDEF\_EVALUATION\_F

\-

\-

C1

X

 

Released

CL\_XCO\_BDEF\_EVALUATION\_TIME

\-

\-

C1

X

 

Released

CL\_XCO\_BDEF\_EVALUATION\_TIME\_F

\-

\-

C1

X

 

Released

CL\_XCO\_BDEF\_EVAL\_TRIGGER\_OPRTN

\-

\-

C1

X

 

Released

CL\_XCO\_BDEF\_EVAL\_TRIGGER\_OP\_F

\-

\-

C1

X

 

Released

CL\_XCO\_BDEF\_EXTENSIBLE\_OPTION

\-

\-

C1

X

 

Released

CL\_XCO\_BDEF\_IMPLEMENTATION\_TYP

\-

\-

C1

X

 

Released

CL\_XCO\_BDEF\_IMPLEMENTATN\_TYP\_F

\-

\-

C1

X

 

Released

CL\_XCO\_BDEF\_STANDARD\_OPERATION

\-

\-

C1

X

 

Released

CL\_XCO\_BDEF\_STANDARD\_OPERATN\_F

\-

\-

C1

X

 

Released

CL\_XCO\_BOOLEAN

\-

\-

C1

X

X

Released

CL\_XCO\_CDS\_ANN\_CLASS

\-

\-

C1

X

 

Released

CL\_XCO\_CDS\_ANN\_SELECTION\_BLDR

\-

\-

C1

X

 

Released

CL\_XCO\_CDS\_CARDINALITY

\-

\-

C1

X

 

Released

CL\_XCO\_CDS\_CARDINALITY\_1

\-

\-

C1

X

 

Released

CL\_XCO\_CDS\_CARDINALITY\_C

\-

\-

C1

X

 

Released

CL\_XCO\_CDS\_CARDINALITY\_CN

\-

\-

C1

X

 

Released

CL\_XCO\_CDS\_CARDINALITY\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CDS\_CARDINALITY\_N

\-

\-

C1

X

 

Released

CL\_XCO\_CDS\_LEFT\_OUTER\_JOIN\_CAR

\-

\-

C1

X

 

Released

CL\_XCO\_CDS\_LEFT\_OUTER\_JOIN\_C\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CDS\_PROVIDER\_CONTRACT

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_ADT\_SIMPLE\_CLASSRUN

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_AD\_OBJ\_READ\_STATE\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_AMDP\_DB\_LANGUAGE\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_AMDP\_DB\_OPTION\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_AMDP\_DB\_TYPE\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_AMDP\_OPTION\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_AO\_ORIGIN\_FACTORY

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_AO\_VERSION\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_APLO\_OBJ\_TEXT\_ATTR\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_APLO\_SUBOBJ\_T\_ATTR\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_APLO\_TEXT\_ATTR\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_ARS\_API\_STATE\_FCTRY

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_ARS\_RELEASE\_CNTRCT\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_ARS\_RELEASE\_STATE\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_ARS\_VISIBILITY\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_AU\_DURATION\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_AU\_RISK\_LEVEL\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_BAL\_LVL\_OF\_DTL\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_BCO\_TEXT\_ATTRIBUTE\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_BDEF\_EXTNSLB\_OPTN\_FC

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_BOOLEAN\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_CDS\_PRVDR\_CNTRCT\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_CS\_FMT\_ADT

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_CS\_LP\_METHOD

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_DBT\_LOAD\_UNIT\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_DBT\_ORIGIN\_FACTORY

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_DBT\_STORAGE\_TYPE\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_DDEF\_ENT\_TEXT\_ATTR\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_DDEF\_FLD\_TEXT\_ATTR\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_DDEF\_OBJ\_RD\_STATE\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_DDEF\_PRM\_TEXT\_ATTR\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_DDEF\_TEXT\_ATTR\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_DOMA\_ORIGIN\_FACTORY

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_DOMA\_TEXT\_ATTR\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_DRTY\_ORIGIN\_FACTORY

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_DRTY\_VERSION\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_DTEL\_ORIGIN\_FACTORY

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_DTEL\_TEXT\_ATTR\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_EB\_ORIGIN\_FACTORY

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_EB\_VERSION\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_FG\_ORIGIN\_FACTORY

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_FM\_ORIGIN\_FACTORY

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_FM\_PARAMETER\_KIND\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_FM\_PROCESSING\_TYPE\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_FM\_RFC\_INTF\_CNTRCT\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_FM\_RFC\_SCOPE\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_FM\_STATE\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_FM\_UPDATE\_TASK\_KND\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_GEN\_AO\_TYPE\_INCL\_FCY

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_GEN\_DDLS\_TEMPLATE\_FC

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_GEN\_DOMA\_TEMPLATE

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_GEN\_DTEL\_TEMPLATE

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_GEN\_D\_O\_PUT\_OPTION

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_GEN\_O\_PUT\_O\_SKP\_ACTN

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_GEN\_TABL\_DBT\_TMPLT

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_GEN\_TABL\_STR\_TMPLT

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_GEN\_TTYP\_TEMPLATE

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_MC\_TEXT\_ATTR\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_MESSAGE\_TYPE\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_ME\_ENT\_TEXT\_ATTR\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_ME\_FLD\_TEXT\_ATTR\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_ME\_LAYER\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_ME\_PRM\_TEXT\_ATTR\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_ME\_TEXT\_ATTR\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_NONT\_ORIGIN\_FACTORY

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_NONT\_VERSION\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_RONT\_ORIGIN\_FACTORY

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_RONT\_TYPE\_CATEGORY\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_RONT\_VERSION\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_SRVB\_BINDING\_TYPE\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_SRVB\_ORIGIN\_FACTORY

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_SRVB\_VERSION\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_SRVC\_CONSUMPN\_TYPE\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_SRVC\_ORIGIN\_FACTORY

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_SRVC\_VERSION\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_SRVD\_ORIGIN\_FACTORY

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_SRVD\_PRVDR\_CNTRCT\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_SRVD\_VERSION\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_TAB\_FIELD\_PROPERTY\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_TAB\_ORIGIN\_FACTORY

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_TEN\_URL\_TYPE\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_TF\_CONTENT\_ORIGIN\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_TF\_STATE\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_TM\_FMT\_ABAP

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_TM\_FMT\_ISO\_8601\_BSC

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_TM\_FMT\_ISO\_8601\_EXT

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_TP\_TEXT\_ATTR\_F

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_TR\_RELEASE\_OPTION\_FC

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_TR\_RESOLUTION\_FCTRY

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_XLSX\_COORDINATE\_FCT

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_XLSX\_RA\_VT\_FACTORY

\-

\-

C1

X

 

Released

CL\_XCO\_CP\_XLSX\_WA\_VT\_FACTORY

\-

\-

C1

X

 

Released

CL\_XCO\_CS\_FORMAT

\-

\-

C1

X

 

Released

CL\_XCO\_CS\_LINE\_NUMBER\_FLAVOR

\-

\-

C1

X

 

Released

CL\_XCO\_CS\_LINE\_PATTERN

\-

\-

C1

X

 

Released

CL\_XCO\_CTS\_CHANGE

\-

\-

C1

X

 

Released

CL\_XCO\_CTS\_CHANGE\_CONTEXT

\-

\-

C1

X

 

Released

CL\_XCO\_CTS\_PROGRAM\_ID

\-

\-

C1

X

 

Released

CL\_XCO\_CTS\_PROGRAM\_ID\_F

\-

\-

C1

X

 

Released

CL\_XCO\_DATE\_CALCULATION\_FCTRY

\-

\-

C1

X

 

Released

CL\_XCO\_DBT\_BUFFERING

\-

\-

C1

X

 

Released

CL\_XCO\_DBT\_BUFFERING\_F

\-

\-

C1

X

 

Released

CL\_XCO\_DBT\_BUFFERING\_TYPE

\-

\-

C1

X

 

Released

CL\_XCO\_DBT\_BUFFERING\_TYPE\_F

\-

\-

C1

X

 

Released

CL\_XCO\_DBT\_DATA\_CLASS

\-

\-

C1

X

 

Released

CL\_XCO\_DBT\_DATA\_CLASS\_F

\-

\-

C1

X

 

Released

CL\_XCO\_DBT\_DATA\_MAINTENANCE

\-

\-

C1

X

 

Released

CL\_XCO\_DBT\_DATA\_MAINTENANCE\_F

\-

\-

C1

X

 

Released

CL\_XCO\_DBT\_DELIVERY\_CLASS

\-

\-

C1

X

 

Released

CL\_XCO\_DBT\_DELIVERY\_CLASS\_F

\-

\-

C1

X

 

Released

CL\_XCO\_DBT\_LOAD\_UNIT

\-

\-

C1

X

 

Released

CL\_XCO\_DBT\_ORIGIN

\-

\-

C1

X

 

Released

CL\_XCO\_DBT\_O\_LOCAL

\-

\-

C1

X

 

Released

CL\_XCO\_DBT\_SIZE\_CATEGORY

\-

\-

C1

X

 

Released

CL\_XCO\_DBT\_SIZE\_CATEGORY\_F

\-

\-

C1

X

 

Released

CL\_XCO\_DBT\_STORAGE\_TYPE

\-

\-

C1

X

 

Released

CL\_XCO\_DDEF\_ENT\_TEXT

\-

\-

C1

X

 

Released

CL\_XCO\_DDEF\_ENT\_TEXT\_ATTRIBUTE

\-

\-

C1

X

 

Released

CL\_XCO\_DDEF\_FLD\_TEXT

\-

\-

C1

X

 

Released

CL\_XCO\_DDEF\_FLD\_TEXT\_ATTRIBUTE

\-

\-

C1

X

 

Released

CL\_XCO\_DDEF\_OBJECT\_READ\_STATE

\-

\-

C1

X

 

Released

CL\_XCO\_DDEF\_OBJECT\_STATE

\-

\-

C1

X

 

Released

CL\_XCO\_DDEF\_OBJECT\_STATE\_F

\-

\-

C1

X

 

Released

CL\_XCO\_DDEF\_PRM\_TEXT

\-

\-

C1

X

 

Released

CL\_XCO\_DDEF\_PRM\_TEXT\_ATTRIBUTE

\-

\-

C1

X

 

Released

CL\_XCO\_DDEF\_TYPE

\-

\-

C1

X

 

Released

CL\_XCO\_DDEF\_TYPE\_F

\-

\-

C1

X

 

Released

CL\_XCO\_DDL\_EXPR\_CAST\_BP\_DTYPE

\-

\-

C1

X

 

Released

CL\_XCO\_DOMAIN\_ORIGIN

\-

\-

C1

X

 

Released

CL\_XCO\_DOMAIN\_OUTPUT\_STYLE

\-

\-

C1

X

 

Released

CL\_XCO\_DOMAIN\_OUTPUT\_STYLE\_F

\-

\-

C1

X

 

Released

CL\_XCO\_DOMAIN\_O\_LOCAL

\-

\-

C1

X

 

Released

CL\_XCO\_DOMAIN\_TEXT

\-

\-

C1

X

 

Released

CL\_XCO\_DOMAIN\_TEXT\_ATTRIBUTE

\-

\-

C1

X

 

Released

CL\_XCO\_DRTY\_ORIGIN

\-

\-

C1

X

 

Released

CL\_XCO\_DRTY\_O\_LOCAL

\-

\-

C1

X

 

Released

CL\_XCO\_DRTY\_VERSION

\-

\-

C1

X

 

Released

CL\_XCO\_DTEL\_ORIGIN

\-

\-

C1

X

 

Released

CL\_XCO\_DTEL\_O\_LOCAL

\-

\-

C1

X

 

Released

CL\_XCO\_DTEL\_TEXT

\-

\-

C1

X

 

Released

CL\_XCO\_DTEL\_TEXT\_ATTRIBUTE

\-

\-

C1

X

 

Released

CL\_XCO\_EB\_ORIGIN

\-

\-

C1

X

 

Released

CL\_XCO\_EB\_O\_LOCAL

\-

\-

C1

X

 

Released

CL\_XCO\_EB\_VERSION

\-

\-

C1

X

 

Released

CL\_XCO\_FG\_ORIGIN

\-

\-

C1

X

 

Released

CL\_XCO\_FG\_O\_LOCAL

\-

\-

C1

X

 

Released

CL\_XCO\_FM\_ORIGIN

\-

\-

C1

X

 

Released

CL\_XCO\_FM\_O\_LOCAL

\-

\-

C1

X

 

Released

CL\_XCO\_FM\_PARAMETER\_KIND

\-

\-

C1

X

 

Released

CL\_XCO\_FM\_PROCESSING\_TYPE

\-

\-

C1

X

 

Released

CL\_XCO\_FM\_RFC\_INTF\_CONTRACT

\-

\-

C1

X

 

Released

CL\_XCO\_FM\_RFC\_SCOPE

\-

\-

C1

X

 

Released

CL\_XCO\_FM\_STATE

\-

\-

C1

X

 

Released

CL\_XCO\_FM\_UPDATE\_TASK\_KIND

\-

\-

C1

X

 

Released

CL\_XCO\_GEN\_AO\_BP\_PRMTR\_TYPE

\-

\-

C1

X

 

Released

CL\_XCO\_GEN\_AO\_BP\_TYPE\_SOURCE

\-

\-

C1

X

 

Released

CL\_XCO\_GEN\_AO\_TYPE\_INCLUDE

\-

\-

C1

X

 

Released

CL\_XCO\_GEN\_CDS\_BP\_CARDINALITY

\-

\-

C1

X

 

Released

CL\_XCO\_GEN\_CLAS\_BP\_AMDP\_DB\_ENT

\-

\-

C1

X

 

Released

CL\_XCO\_GEN\_DDLS\_BP\_DDL\_EXPRESS

\-

\-

C1

X

 

Released

CL\_XCO\_GEN\_DDLS\_BP\_FIELD\_TYPE

\-

\-

C1

X

 

Released

CL\_XCO\_GEN\_DDLS\_BP\_PARAM\_DTYPE

\-

\-

C1

X

 

Released

CL\_XCO\_GEN\_DDLS\_BP\_PRVD\_CNTRCT

\-

\-

C1

X

 

Released

CL\_XCO\_GEN\_DOMA\_BP\_FORMAT

\-

\-

C1

X

 

Released

CL\_XCO\_GEN\_DTEL\_BP\_DATA\_TYPE

\-

\-

C1

X

 

Released

CL\_XCO\_GEN\_TABL\_APS\_ENH\_CAT

\-

\-

C1

X

 

Released

CL\_XCO\_GEN\_TABL\_BP\_FKEY\_CARD

\-

\-

C1

X

 

Released

CL\_XCO\_GEN\_TABL\_BP\_FLD\_TYP\_APS

\-

\-

C1

X

 

Released

CL\_XCO\_GEN\_TABL\_BP\_FLD\_TYP\_DBT

\-

\-

C1

X

 

Released

CL\_XCO\_GEN\_TABL\_BP\_FLD\_TYP\_GTT

\-

\-

C1

X

 

Released

CL\_XCO\_GEN\_TABL\_BP\_FLD\_TYP\_STR

\-

\-

C1

X

 

Released

CL\_XCO\_GEN\_TABL\_DBT\_BP\_INDX\_NU

\-

\-

C1

X

 

Released

CL\_XCO\_GEN\_TABL\_DBT\_ENH\_CAT

\-

\-

C1

X

 

Released

CL\_XCO\_GEN\_TABL\_STR\_ENH\_CAT

\-

\-

C1

X

 

Released

CL\_XCO\_GEN\_TTYP\_BP\_ROW\_TYPE

\-

\-

C1

X

 

Released

CL\_XCO\_KU\_BOOLEAN\_F

\-

\-

C1

 

X

Released

CL\_XCO\_KU\_TEN\_URL\_TYPE\_F

\-

\-

C1

 

X

Released

CL\_XCO\_KU\_TM\_FMT\_ABAP

\-

\-

C1

 

X

Released

CL\_XCO\_KU\_TM\_FMT\_ISO\_8601\_BSC

\-

\-

C1

 

X

Released

CL\_XCO\_KU\_TM\_FMT\_ISO\_8601\_EXT

\-

\-

C1

 

X

Released

CL\_XCO\_MC\_TEXT

\-

\-

C1

X

 

Released

CL\_XCO\_MC\_TEXT\_ATTRIBUTE

\-

\-

C1

X

 

Released

CL\_XCO\_MESSAGE\_TYPE

\-

\-

C1

X

X

Released

CL\_XCO\_ME\_ENT\_TEXT

\-

\-

C1

X

 

Released

CL\_XCO\_ME\_ENT\_TEXT\_ATTRIBUTE

\-

\-

C1

X

 

Released

CL\_XCO\_ME\_FLD\_TEXT

\-

\-

C1

X

 

Released

CL\_XCO\_ME\_FLD\_TEXT\_ATTRIBUTE

\-

\-

C1

X

 

Released

CL\_XCO\_ME\_LAYER

\-

\-

C1

X

 

Released

CL\_XCO\_ME\_PRM\_TEXT

\-

\-

C1

X

 

Released

CL\_XCO\_ME\_PRM\_TEXT\_ATTRIBUTE

\-

\-

C1

X

 

Released

CL\_XCO\_NONT\_ORIGIN

\-

\-

C1

X

 

Released

CL\_XCO\_NONT\_O\_LOCAL

\-

\-

C1

X

 

Released

CL\_XCO\_NONT\_VERSION

\-

\-

C1

X

 

Released

CL\_XCO\_PKG\_TYPE

\-

\-

C1

X

 

Released

CL\_XCO\_PKG\_TYPE\_F

\-

\-

C1

X

 

Released

CL\_XCO\_PKG\_T\_RELEVANCE

\-

\-

C1

X

 

Released

CL\_XCO\_RONT\_ORIGIN

\-

\-

C1

X

 

Released

CL\_XCO\_RONT\_O\_LOCAL

\-

\-

C1

X

 

Released

CL\_XCO\_RONT\_TYPE\_CATEGORY

\-

\-

C1

X

 

Released

CL\_XCO\_RONT\_VERSION

\-

\-

C1

X

 

Released

CL\_XCO\_SC\_CHANGEABILITY

\-

\-

C1

X

 

Released

CL\_XCO\_SC\_CHANGEABILITY\_F

\-

\-

C1

X

 

Released

CL\_XCO\_SC\_EXTENDABILITY

\-

\-

C1

X

 

Released

CL\_XCO\_SC\_EXTENDABILITY\_F

\-

\-

C1

X

 

Released

CL\_XCO\_SRVB\_BINDING\_TYPE

\-

\-

C1

X

 

Released

CL\_XCO\_SRVB\_ORIGIN

\-

\-

C1

X

 

Released

CL\_XCO\_SRVB\_O\_LOCAL

\-

\-

C1

X

 

Released

CL\_XCO\_SRVB\_VERSION

\-

\-

C1

X

 

Released

CL\_XCO\_SRVC\_CONSUMPTION\_TYPE

\-

\-

C1

X

 

Released

CL\_XCO\_SRVC\_ORIGIN

\-

\-

C1

X

 

Released

CL\_XCO\_SRVC\_O\_LOCAL

\-

\-

C1

X

 

Released

CL\_XCO\_SRVC\_VERSION

\-

\-

C1

X

 

Released

CL\_XCO\_SRVD\_ORIGIN

\-

\-

C1

X

 

Released

CL\_XCO\_SRVD\_O\_LOCAL

\-

\-

C1

X

 

Released

CL\_XCO\_SRVD\_PROVIDER\_CONTRACT

\-

\-

C1

X

 

Released

CL\_XCO\_SRVD\_VERSION

\-

\-

C1

X

 

Released

CL\_XCO\_TAB\_EC\_0

\-

\-

C1

X

 

Released

CL\_XCO\_TAB\_EC\_1

\-

\-

C1

X

 

Released

CL\_XCO\_TAB\_EC\_2

\-

\-

C1

X

 

Released

CL\_XCO\_TAB\_EC\_3

\-

\-

C1

X

 

Released

CL\_XCO\_TAB\_EC\_4

\-

\-

C1

X

 

Released

CL\_XCO\_TAB\_ENHANCEMENT\_CTGRY

\-

\-

C1

X

 

Released

CL\_XCO\_TAB\_ENHANCEMENT\_CTGRY\_F

\-

\-

C1

X

 

Released

CL\_XCO\_TAB\_FKEY\_CARDINALITY

\-

\-

C1

X

 

Released

CL\_XCO\_TAB\_FKEY\_CARDINALITY\_1

\-

\-

C1

X

 

Released

CL\_XCO\_TAB\_FKEY\_CARDINALITY\_C

\-

\-

C1

X

 

Released

CL\_XCO\_TAB\_FKEY\_CARDINALITY\_CN

\-

\-

C1

X

 

Released

CL\_XCO\_TAB\_FKEY\_CARDINALITY\_F

\-

\-

C1

X

 

Released

CL\_XCO\_TAB\_FKEY\_CARDINALITY\_N

\-

\-

C1

X

 

Released

CL\_XCO\_TAB\_FKEY\_FIELD\_TYPE

\-

\-

C1

X

 

Released

CL\_XCO\_TAB\_FKEY\_FIELD\_TYPE\_F

\-

\-

C1

X

 

Released

CL\_XCO\_TAB\_FP\_FK\_CHECK\_TABLE

\-

\-

C1

X

 

Released

CL\_XCO\_TAB\_FP\_FK\_FIELD\_TYPE

\-

\-

C1

X

 

Released

CL\_XCO\_TAB\_ORIGIN

\-

\-

C1

X

 

Released

CL\_XCO\_TAB\_O\_LOCAL

\-

\-

C1

X

 

Released

CL\_XCO\_TAB\_PSL\_FKFA\_SCENARIO

\-

\-

C1

X

 

Released

CL\_XCO\_TEN\_URL\_TYPE

\-

\-

C1

X

X

Released

CL\_XCO\_TF\_CONTENT\_ORIGIN

\-

\-

C1

X

 

Released

CL\_XCO\_TF\_STATE

\-

\-

C1

X

 

Released

CL\_XCO\_TP\_TEXT

\-

\-

C1

X

 

Released

CL\_XCO\_TP\_TEXT\_ATTRIBUTE

\-

\-

C1

X

 

Released

CL\_XCO\_TR\_ES\_BUILDER

\-

\-

C1

X

 

Released

CL\_XCO\_TR\_KIND

\-

\-

C1

X

 

Released

CL\_XCO\_TR\_KIND\_F

\-

\-

C1

X

 

Released

CL\_XCO\_TR\_RESOLUTION

\-

\-

C1

X

 

Released

CL\_XCO\_TR\_SELECTION\_BUILDER

\-

\-

C1

X

 

Released

CL\_XCO\_TR\_STATUS

\-

\-

C1

X

 

Released

CL\_XCO\_TR\_STATUS\_F

\-

\-

C1

X

 

Released

CL\_XCO\_TR\_TYPE

\-

\-

C1

X

 

Released

CL\_XCO\_TR\_TYPE\_F

\-

\-

C1

X

 

Released

CL\_XCO\_TT\_ACCESS

\-

\-

C1

X

 

Released

CL\_XCO\_TT\_ACCESS\_F

\-

\-

C1

X

 

Released

CL\_XCO\_TT\_KEY\_ACCESS

\-

\-

C1

X

 

Released

CL\_XCO\_TT\_KEY\_ACCESS\_F

\-

\-

C1

X

 

Released

CL\_XCO\_TT\_KEY\_CATEGORY

\-

\-

C1

X

 

Released

CL\_XCO\_TT\_KEY\_CATEGORY\_F

\-

\-

C1

X

 

Released

CL\_XCO\_TT\_KEY\_DEFINITION

\-

\-

C1

X

 

Released

CL\_XCO\_XLSX\_COORDINATE

\-

\-

C1

X

 

Released

CM\_APJ\_BASE

\-

\-

C1

X

 

Released

CX\_A4C\_CP\_SVC\_PROP\_NOT\_FOUND

\-

\-

C1

X

 

Released

CX\_A4C\_DESTINATION\_NOT\_FOUND

\-

\-

C1

X

 

Released

CX\_A4C\_DEST\_SVC\_LOOKUP\_FAILURE

\-

\-

C1

X

 

Released

CX\_ABAP\_API\_STATE

\-

\-

C1

X

 

Released

CX\_ABAP\_AUTH\_CHECK\_EXCEPTION

\-

\-

C1

X

 

Released

CX\_ABAP\_BEHV\_EVENT\_HDLR\_ERROR

\-

\-

C1

X

 

Released

CX\_ABAP\_BEHV\_SAVE\_FAILED

\-

\-

C1

X

 

Released

CX\_ABAP\_CONTEXT\_INFO\_ERROR

\-

\-

C1

X

X

Released

CX\_ABAP\_DATFM

\-

\-

C1

X

X

Released

CX\_ABAP\_DATFM\_AMBIGUOUS

\-

\-

C1

X

X

Released

CX\_ABAP\_DATFM\_FORMAT\_UNKNOWN

\-

\-

C1

X

X

Released

CX\_ABAP\_DATFM\_INVALID\_DATE

\-

\-

C1

X

X

Released

CX\_ABAP\_DATFM\_NO\_DATE

\-

\-

C1

X

X

Released

CX\_ABAP\_DECFLOAT\_INVALID\_CHAR

\-

\-

C1

X

X

Released

CX\_ABAP\_DECFLOAT\_PARSE\_ERR

\-

\-

C1

X

X

Released

CX\_ABAP\_DECFLOAT\_PARSE\_FATAL

\-

\-

C1

X

X

Released

CX\_ABAP\_DIFF

\-

\-

C1

X

 

Released

CX\_ABAP\_FOREIGN\_LOCK

\-

\-

C1

X

 

Released

CX\_ABAP\_INT\_INVALID\_CHAR

\-

\-

C1

 

X

Released

CX\_ABAP\_INVALID\_NAME

\-

\-

C1

X

X

Released

CX\_ABAP\_INVALID\_PARAM\_VALUE

\-

\-

C1

 

X

Released

CX\_ABAP\_INVALID\_VALUE

\-

\-

C1

X

X

Released

CX\_ABAP\_LOCK\_FAILURE

\-

\-

C1

X

 

Released

CX\_ABAP\_MESSAGE\_DIGEST

\-

\-

C1

X

X

Released

CX\_ABAP\_NOT\_AN\_INTEGER

\-

\-

C1

X

X

Released

CX\_ABAP\_NOT\_A\_PROGRAM

\-

\-

C1

X

X

Released

CX\_ABAP\_NOT\_A\_TABLE

\-

\-

C1

X

X

Released

CX\_ABAP\_NOT\_IN\_ALLOWLIST

\-

\-

C1

X

X

Released

CX\_ABAP\_NOT\_IN\_PACKAGE

\-

\-

C1

X

X

Released

CX\_ABAP\_NOT\_IN\_WHITELIST

\-

\-

C1

X

X

Released

CX\_ABAP\_RANDOM

\-

\-

C1

X

X

Released

CX\_ABAP\_RANGE\_CONV

\-

\-

C1

X

 

Released

CX\_ABAP\_TIMEFM\_INVALID

\-

\-

C1

X

X

Released

CX\_ABAP\_UTCLONG\_INVALID

\-

\-

C1

X

X

Released

CX\_ACO\_APPLICATION\_EXCEPTION

\-

\-

C1

X

 

Released

CX\_ACO\_COMMUNICATION\_FAILURE

\-

\-

C1

X

 

Released

CX\_ACO\_SYSTEM\_FAILURE

\-

\-

C1

X

 

Released

CX\_AI\_APPLICATION\_FAULT

\-

\-

C1

X

 

Released

CX\_AI\_SYSTEM\_FAULT

\-

\-

C1

X

 

Released

CX\_AMDP\_CREATION\_ERROR

\-

\-

C1

X

 

Released

CX\_AMDP\_DBPROC\_CREATE\_FAILED

\-

\-

C1

X

 

Released

CX\_AMDP\_EXECUTION\_ERROR

\-

\-

C1

X

 

Released

CX\_AMDP\_EXECUTION\_FAILED

\-

\-

C1

X

 

Released

CX\_AMDP\_VERSION\_ERROR

\-

\-

C1

X

 

Released

CX\_AMDP\_VERSION\_MISMATCH

\-

\-

C1

X

 

Released

CX\_APJ\_DT\_CONTENT

\-

\-

C1

X

 

Released

CX\_APJ\_RT

\-

\-

C1

X

 

Released

CX\_APJ\_RT\_CONTENT

\-

\-

C1

X

 

Released

CX\_ARCH\_API

\-

\-

C1

X

 

Released

CX\_ARCH\_STORAGE\_MANAGER

\-

\-

C1

X

 

Released

CX\_ATD\_EXCEPTION\_CORE

\-

\-

C1

X

 

Released

CX\_ATD\_PARAM\_NOT\_FOUND

\-

\-

C1

X

 

Released

CX\_BADI

\-

\-

C1

X

 

Released

CX\_BADI\_CONTEXT\_ERROR

\-

\-

C1

X

 

Released

CX\_BADI\_DEPREC\_HANDLE\_CLASS

\-

\-

C1

X

 

Released

CX\_BADI\_FILTER\_ERROR

\-

\-

C1

X

 

Released

CX\_BADI\_INITIAL\_CONTEXT

\-

\-

C1

X

 

Released

CX\_BADI\_INITIAL\_REFERENCE

\-

\-

C1

X

 

Released

CX\_BADI\_MULTIPLY\_IMPLEMENTED

\-

\-

C1

X

 

Released

CX\_BADI\_NOT\_IMPLEMENTED

\-

\-

C1

X

 

Released

CX\_BADI\_NOT\_SINGLE\_USE

\-

\-

C1

X

 

Released

CX\_BADI\_UNKNOWN\_ERROR

\-

\-

C1

X

 

Released

CX\_BALI\_INTERNAL\_ERROR

\-

\-

C1

X

 

Released

CX\_BALI\_INVALID\_PARAMETER

\-

\-

C1

X

 

Released

CX\_BALI\_NOT\_FOUND

\-

\-

C1

X

 

Released

CX\_BALI\_NOT\_POSSIBLE

\-

\-

C1

X

 

Released

CX\_BALI\_OBJECTS

\-

\-

C1

X

 

Released

CX\_BALI\_RUNTIME

\-

\-

C1

X

 

Released

CX\_BAL\_EXCEPTION

\-

\-

C1

X

 

Deprecated

CLAS CX\_BALI\_RUNTIME

CX\_BCFG\_TRANSPORT\_RECORDER

\-

\-

C1

X

 

Released

CX\_BCFG\_TRANSPORT\_REQUEST

\-

\-

C1

X

 

Released

CX\_BCS\_MAIL

\-

\-

C1

X

 

Released

CX\_BCS\_MAIL\_CONFIG

\-

\-

C1

X

 

Released

CX\_BGMC

\-

\-

C1

X

 

Released

CX\_BGMC\_OPERATION

\-

\-

C1

X

 

Released

CX\_BLE\_DYNAMIC\_TABLE\_ERROR

\-

\-

C1

X

X

Released

CX\_BLE\_RUNTIME\_ERROR

\-

\-

C1

X

X

Released

CX\_BU\_AUTHORIZATION

\-

\-

C1

X

 

Released

CX\_CALL\_ST\_ERROR

\-

\-

C1

X

X

Released

CX\_CBO\_RUNTIME\_EXCEPTION

\-

\-

C1

 

X

Released

CX\_CBO\_WRITE\_LOCKED

\-

\-

C1

 

X

Released

CX\_CBO\_WRITE\_NOT\_AUTHORIZED

\-

\-

C1

 

X

Released

CX\_CBO\_WRITE\_NOT\_EXISTING

\-

\-

C1

 

X

Released

CX\_CHDO\_ARCHIVE\_ERROR

\-

\-

C1

X

 

Released

CX\_CHDO\_DELETE\_ERROR

\-

\-

C1

X

 

Released

CX\_CHDO\_GENERATION\_ERROR

\-

\-

C1

X

 

Released

CX\_CHDO\_READ\_ERROR

\-

\-

C1

X

 

Released

CX\_CHDO\_WRITE\_ERROR

\-

\-

C1

X

 

Released

CX\_CI\_ATC\_CHECK\_INVALID\_ATTR

\-

\-

C1

X

 

Released

CX\_CI\_ATC\_INVALID\_COMP\_UNIT

\-

\-

C1

X

 

Released

CX\_CI\_ATC\_TOKEN\_NO\_CALL

\-

\-

C1

X

 

Released

CX\_CLOSE\_RESOURCE\_ERROR

\-

\-

C1

X

 

Released

CX\_CMIS\_CONSTRAINT

\-

\-

C1

X

 

Released

CX\_CMIS\_CONTENT\_ALREADY\_EXISTS

\-

\-

C1

X

 

Released

CX\_CMIS\_FILTER\_NOT\_VALID

\-

\-

C1

X

 

Released

CX\_CMIS\_INVALID\_ARGUMENT

\-

\-

C1

X

 

Released

CX\_CMIS\_NAME\_CONSTRAINT

\-

\-

C1

X

 

Released

CX\_CMIS\_NOT\_SUPPORTED

\-

\-

C1

X

 

Released

CX\_CMIS\_OAUTH

\-

\-

C1

X

 

Released

CX\_CMIS\_OBJECT\_NOT\_FOUND

\-

\-

C1

X

 

Released

CX\_CMIS\_PERMISSION\_DENIED

\-

\-

C1

X

 

Released

CX\_CMIS\_ROOT

\-

\-

C1

X

 

Released

CX\_CMIS\_RUNTIME

\-

\-

C1

X

 

Released

CX\_CMIS\_STORAGE

\-

\-

C1

X

 

Released

CX\_CMIS\_STREAM\_NOT\_SUPPORTED

\-

\-

C1

X

 

Released

CX\_CMIS\_UNAUTHORIZED

\-

\-

C1

X

 

Released

CX\_CMIS\_UPDATE\_CONFLICT

\-

\-

C1

X

 

Released

CX\_CMIS\_VERSIONING

\-

\-

C1

X

 

Released

CX\_COMMCONNECTION

\-

\-

C1

X

 

Released

CX\_CONVERSION\_NO\_DURATION

\-

\-

C1

X

X

Released

CX\_CORR\_DYN\_ERROR

\-

\-

C1

X

X

Released

CX\_CREATE\_MEM\_DUMP\_ERROR

\-

\-

C1

 

X

Released

CX\_CRL\_RUNTIME\_EXCEPTION

\-

\-

C1

 

X

Released

CX\_DYNAMIC\_CHECK

\-

\-

C1

X

X

Released

CX\_FDT\_CP\_UTILITY\_EXCEPTIONS

\-

\-

C1

X

 

Released

CX\_FDT\_INPUT

\-

\-

C1

X

X

Released

CX\_FDT\_PROCESSING

\-

\-

C1

X

X

Released

CX\_FDT\_SYSTEM

\-

\-

C1

 

X

Released

CX\_FHC\_RUNTIME

\-

\-

C1

X

 

Released

CX\_FP\_ADS\_UTIL

\-

\-

C1

X

 

Released

CX\_FP\_FDP\_ERROR

\-

\-

C1

X

 

Released

CX\_FTD\_EXCEPTION

\-

\-

C1

X

 

Released

CX\_FTD\_INVALID\_STATE

\-

\-

C1

X

 

Released

CX\_FTD\_PARAMETER\_NOT\_FOUND

\-

\-

C1

X

 

Released

CX\_GSM\_API

\-

\-

C1

X

 

Released

CX\_ICU\_OTHER\_ERROR

\-

\-

C1

X

 

Released

CX\_ICU\_PARSE\_ERROR

\-

\-

C1

X

 

Released

CX\_INVALID\_TRANSFORMATION

\-

\-

C1

X

X

Released

CX\_IRM\_RT\_DESTRUCTION\_OBJECT

\-

\-

C1

X

 

Released

CX\_IRM\_RT\_EXEC

\-

\-

C1

X

 

Released

CX\_KMETH\_ERR

\-

\-

C1

 

X

Released

CX\_LIST\_ALREADY\_ACTIVE

\-

\-

C1

 

X

Released

CX\_LIST\_ERROR

\-

\-

C1

 

X

Released

CX\_LIST\_ERROR\_DOWNLOAD

\-

\-

C1

 

X

Released

CX\_LIST\_ERROR\_EMPTY\_LIST

\-

\-

C1

 

X

Released

CX\_LOB\_SQL\_ERROR

\-

\-

C1

X

 

Released

CX\_LOGOFF\_FAILED

\-

\-

C1

X

 

Released

CX\_MBC\_API\_EXCEPTION

\-

\-

C1

X

 

Released

CX\_NO\_CHECK

\-

\-

C1

X

X

Released

CX\_NR\_OBJECT\_NOT\_FOUND

\-

\-

C1

X

 

Released

CX\_NR\_SUBOBJECT

\-

\-

C1

X

 

Released

CX\_NUMBER\_RANGES

\-

\-

C1

X

 

Released

CX\_PARAMETER\_INVALID

\-

\-

C1

X

X

Released

CX\_PARAMETER\_INVALID\_RANGE

\-

\-

C1

X

X

Released

CX\_PARAMETER\_INVALID\_TYPE

\-

\-

C1

X

X

Released

CX\_PROGRAM\_NOT\_FOUND

\-

\-

C1

 

X

Released

CX\_RAP\_QUERY\_FILTER\_NO\_RANGE

\-

\-

C1

X

 

Released

CX\_RAP\_QUERY\_PROVIDER

\-

\-

C1

X

 

Released

CX\_RAP\_QUERY\_PROV\_NOT\_IMPL

\-

\-

C1

X

 

Released

CX\_RAP\_QUERY\_RESPONSE\_SET\_TWIC

\-

\-

C1

X

 

Released

CX\_REDUNDANCY\_CHECK

\-

\-

C1

 

X

Released

CX\_REFERENCE\_NOT\_SERIALIZABLE

\-

\-

C1

X

X

Released

CX\_RESOURCE\_ALREADY\_CLOSED

\-

\-

C1

X

 

Released

CX\_RFC\_DEST\_PROVIDER\_ERROR

\-

\-

C1

X

 

Released

CX\_ROOT

\-

\-

C1

X

X

Released

CX\_RSPO\_PDF\_MERGER

\-

\-

C1

X

 

Released

CX\_SADL\_EXIT

\-

\-

C1

X

 

Released

CX\_SATC\_API

\-

\-

C1

X

 

Released

CX\_SCAL

\-

\-

C1

X

 

Released

CX\_SMTG\_EMAIL\_COMMON

\-

\-

C1

X

 

Released

CX\_SOAP\_DESTINATION\_ERROR

\-

\-

C1

X

 

Released

CX\_SSI\_EXCEPTION

\-

\-

C1

X

 

Released

CX\_STACKOFWP\_INVALID\_WP

\-

\-

C1

 

X

Released

CX\_STACKOFWP\_NOSTACK\_AVAIL

\-

\-

C1

 

X

Released

CX\_STACKOFWP\_NO\_AUTHORITY

\-

\-

C1

 

X

Released

CX\_STACKOFWP\_WP\_NOT\_RUN

\-

\-

C1

 

X

Released

CX\_STATIC\_CHECK

\-

\-

C1

X

X

Released

CX\_STREAM\_ERROR

\-

\-

C1

X

 

Released

CX\_STREAM\_IO\_EXCEPTION

\-

\-

C1

X

 

Released

CX\_STREAM\_POSITION\_ERROR

\-

\-

C1

X

 

Released

CX\_STREAM\_STATE\_ERROR

\-

\-

C1

X

 

Released

CX\_ST\_CALL\_ERROR

\-

\-

C1

X

X

Released

CX\_ST\_CALL\_METHOD\_ERROR

\-

\-

C1

X

X

Released

CX\_ST\_CONDITION

\-

\-

C1

X

X

Released

CX\_ST\_COND\_CHECK\_FAIL

\-

\-

C1

X

X

Released

CX\_ST\_CONSTRAINT\_ERROR

\-

\-

C1

X

X

Released

CX\_ST\_DESERIALIZATION\_ERROR

\-

\-

C1

X

X

Released

CX\_ST\_DYNAMIC\_CALL\_ST\_ERROR

\-

\-

C1

X

 

Released

CX\_ST\_ERROR

\-

\-

C1

X

X

Released

CX\_ST\_FORMAT\_ERROR

\-

\-

C1

X

X

Released

CX\_ST\_GROUP\_MISSING\_CASE

\-

\-

C1

X

X

Released

CX\_ST\_INVALID\_XML

\-

\-

C1

X

X

Released

CX\_ST\_MATCH

\-

\-

C1

X

X

Released

CX\_ST\_MATCH\_ATTRIBUTE

\-

\-

C1

X

X

Released

CX\_ST\_MATCH\_ELEMENT

\-

\-

C1

X

X

Released

CX\_ST\_MATCH\_NAMED

\-

\-

C1

X

X

Released

CX\_ST\_MATCH\_TEXT

\-

\-

C1

X

X

Released

CX\_ST\_MATCH\_TYPE

\-

\-

C1

X

X

Released

CX\_ST\_REF\_ACCESS

\-

\-

C1

X

X

Released

CX\_ST\_RUNTIME\_ERROR

\-

\-

C1

X

X

Released

CX\_ST\_SERIALIZATION\_ERROR

\-

\-

C1

X

X

Released

CX\_ST\_SWITCH\_NO\_CASE

\-

\-

C1

X

X

Released

CX\_ST\_VALIDATION\_ERROR

\-

\-

C1

X

X

Released

CX\_SWF\_CPWF\_API

\-

\-

C1

X

 

Released

CX\_SWF\_CPWF\_CALLBACK

\-

\-

C1

X

 

Released

CX\_SXML\_ILLEGAL\_ARGUMENT\_ERROR

\-

\-

C1

X

 

Released

CX\_SXML\_INTERNAL\_ERROR

\-

\-

C1

X

 

Released

CX\_SXML\_NAME\_ERROR

\-

\-

C1

X

 

Released

CX\_SXML\_PARSE\_ERROR

\-

\-

C1

X

 

Released

CX\_SXML\_STATE\_ERROR

\-

\-

C1

X

 

Released

CX\_SY\_ARG\_OUT\_OF\_DOMAIN

\-

\-

C1

X

X

Released

CX\_SY\_ARITHMETIC\_ERROR

\-

\-

C1

X

X

Released

CX\_SY\_ARITHMETIC\_OVERFLOW

\-

\-

C1

X

X

Released

CX\_SY\_ASSIGN\_CAST\_ERROR

\-

\-

C1

X

X

Released

CX\_SY\_ASSIGN\_CAST\_ILLEGAL\_CAST

\-

\-

C1

X

X

Released

CX\_SY\_ASSIGN\_CAST\_UNKNOWN\_TYPE

\-

\-

C1

X

X

Released

CX\_SY\_ASSIGN\_ERROR

\-

\-

C1

X

X

Released

CX\_SY\_ASSIGN\_ILLEGAL\_COMPONENT

\-

\-

C1

X

X

Released

CX\_SY\_ASSIGN\_OUT\_OF\_RANGE

\-

\-

C1

X

X

Released

CX\_SY\_BUFFER\_OVERFLOW

\-

\-

C1

X

X

Released

CX\_SY\_CODEPAGE\_CONVERTER\_INIT

\-

\-

C1

X

X

Released

CX\_SY\_COMPRESSION\_ERROR

\-

\-

C1

X

X

Released

CX\_SY\_CONVERSION\_CODEPAGE

\-

\-

C1

X

X

Released

CX\_SY\_CONVERSION\_CODEPAGE\_EX

\-

\-

C1

X

X

Released

CX\_SY\_CONVERSION\_DATA\_LOSS

\-

\-

C1

X

X

Released

CX\_SY\_CONVERSION\_ERROR

\-

\-

C1

X

X

Released

CX\_SY\_CONVERSION\_EXACT\_NOT\_SUP

\-

\-

C1

X

X

Released

CX\_SY\_CONVERSION\_INEXACT\_FLTP

\-

\-

C1

X

X

Released

CX\_SY\_CONVERSION\_LOST\_DECIMALS

\-

\-

C1

X

X

Released

CX\_SY\_CONVERSION\_NOT\_SUPPORTED

\-

\-

C1

X

X

Released

CX\_SY\_CONVERSION\_NO\_BOOLEAN

\-

\-

C1

X

X

Released

CX\_SY\_CONVERSION\_NO\_DATE

\-

\-

C1

X

X

Released

CX\_SY\_CONVERSION\_NO\_DATE\_TIME

\-

\-

C1

X

X

Released

CX\_SY\_CONVERSION\_NO\_ENUM\_VALUE

\-

\-

C1

X

X

Released

CX\_SY\_CONVERSION\_NO\_NUMBER

\-

\-

C1

X

X

Released

CX\_SY\_CONVERSION\_NO\_QNAME

\-

\-

C1

X

X

Released

CX\_SY\_CONVERSION\_NO\_RAW

\-

\-

C1

X

X

Released

CX\_SY\_CONVERSION\_NO\_TIME

\-

\-

C1

X

X

Released

CX\_SY\_CONVERSION\_NO\_UUID

\-

\-

C1

X

X

Released

CX\_SY\_CONVERSION\_OVERFLOW

\-

\-

C1

X

X

Released

CX\_SY\_CONVERSION\_ROUNDING

\-

\-

C1

X

X

Released

CX\_SY\_CONVERSION\_SRC\_TOO\_SHORT

\-

\-

C1

X

X

Released

CX\_SY\_CONVERSION\_UNKNOWN\_CURR

\-

\-

C1

X

X

Released

CX\_SY\_CONVERSION\_UNKNOWN\_LANGU

\-

\-

C1

X

X

Released

CX\_SY\_CONVERSION\_UNKNOWN\_UNIT

\-

\-

C1

X

X

Released

CX\_SY\_CREATE\_DATA\_ERROR

\-

\-

C1

X

X

Released

CX\_SY\_CREATE\_ERROR

\-

\-

C1

X

X

Released

CX\_SY\_CREATE\_OBJECT\_ERROR

\-

\-

C1

X

X

Released

CX\_SY\_DATA\_ACCESS\_ERROR

\-

\-

C1

X

X

Released

CX\_SY\_DYNAMIC\_OSQL\_ERROR

\-

\-

C1

X

X

Released

CX\_SY\_DYNAMIC\_OSQL\_SEMANTICS

\-

\-

C1

X

X

Released

CX\_SY\_DYNAMIC\_OSQL\_SYNTAX

\-

\-

C1

X

X

Released

CX\_SY\_DYN\_CALL\_ERROR

\-

\-

C1

X

X

Released

CX\_SY\_DYN\_CALL\_EXCP\_NOT\_FOUND

\-

\-

C1

X

X

Released

CX\_SY\_DYN\_CALL\_ILLEGAL\_CLASS

\-

\-

C1

X

X

Released

CX\_SY\_DYN\_CALL\_ILLEGAL\_FUNC

\-

\-

C1

X

X

Released

CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD

\-

\-

C1

X

X

Released

CX\_SY\_DYN\_CALL\_ILLEGAL\_TYPE

\-

\-

C1

X

X

Released

CX\_SY\_DYN\_CALL\_PARAMETER\_CONV

\-

\-

C1

X

X

Released

CX\_SY\_DYN\_CALL\_PARAMETER\_ERROR

\-

\-

C1

X

X

Released

CX\_SY\_DYN\_CALL\_PARAM\_MISSING

\-

\-

C1

X

X

Released

CX\_SY\_DYN\_CALL\_PARAM\_NOT\_FOUND

\-

\-

C1

X

X

Released

CX\_SY\_DYN\_TABLE\_ERROR

\-

\-

C1

X

X

Released

CX\_SY\_DYN\_TABLE\_ILL\_COMP\_VAL

\-

\-

C1

X

X

Released

CX\_SY\_DYN\_TABLE\_ILL\_LINE\_TYPE

\-

\-

C1

X

X

Released

CX\_SY\_ENUM\_CREATION

\-

\-

C1

X

 

Released

CX\_SY\_FIND\_INFINITE\_LOOP

\-

\-

C1

X

X

Released

CX\_SY\_ILLEGAL\_HANDLER

\-

\-

C1

X

X

Released

CX\_SY\_IMPORT\_FORMAT\_ERROR

\-

\-

C1

X

X

Released

CX\_SY\_IMPORT\_MISMATCH\_ERROR

\-

\-

C1

X

X

Released

CX\_SY\_INVALID\_REGEX

\-

\-

C1

X

X

Released

CX\_SY\_INVALID\_REGEX\_FORMAT

\-

\-

C1

X

X

Released

CX\_SY\_INVALID\_REGEX\_OPERATION

\-

\-

C1

X

X

Released

CX\_SY\_INVALID\_SUBMATCH

\-

\-

C1

X

X

Released

CX\_SY\_ITAB\_DUPLICATE\_KEY

\-

\-

C1

X

X

Released

CX\_SY\_ITAB\_DYN\_LOOP

\-

\-

C1

X

X

Released

CX\_SY\_ITAB\_ERROR

\-

\-

C1

X

X

Released

CX\_SY\_ITAB\_LINE\_NOT\_FOUND

\-

\-

C1

X

X

Released

CX\_SY\_MATCHER

\-

\-

C1

X

X

Released

CX\_SY\_MESSAGE\_ILLEGAL\_TEXT

\-

\-

C1

X

X

Released

CX\_SY\_MISSING\_OUTBUF

\-

\-

C1

X

X

Released

CX\_SY\_MOVE\_CAST\_ERROR

\-

\-

C1

X

X

Released

CX\_SY\_NO\_CURRENT\_MATCH

\-

\-

C1

X

X

Released

CX\_SY\_NO\_HANDLER

\-

\-

C1

X

X

Released

CX\_SY\_NO\_REFERENCE

\-

\-

C1

X

X

Released

CX\_SY\_OFFSET\_NOT\_ALLOWED

\-

\-

C1

X

X

Released

CX\_SY\_OPEN\_SQL\_DATA\_ERROR

\-

\-

C1

X

 

Released

CX\_SY\_OPEN\_SQL\_DB

\-

\-

C1

X

X

Released

CX\_SY\_OPEN\_SQL\_ERROR

\-

\-

C1

X

X

Released

CX\_SY\_OPERATION\_FAILURE

\-

\-

C1

X

X

Released

CX\_SY\_PRECISION\_LOSS

\-

\-

C1

X

X

Released

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

\-

\-

C1

X

X

Released

CX\_SY\_REF\_CREATION

\-

\-

C1

X

 

Released

CX\_SY\_REF\_IS\_INITIAL

\-

\-

C1

X

X

Released

CX\_SY\_REF\_NOT\_SUPPORTED

\-

\-

C1

X

X

Released

CX\_SY\_REGEX

\-

\-

C1

X

X

Released

CX\_SY\_REGEX\_LOCALE\_MISMATCH

\-

\-

C1

X

X

Released

CX\_SY\_REGEX\_TOO\_COMPLEX

\-

\-

C1

X

X

Released

CX\_SY\_REPLACE\_INFINITE\_LOOP

\-

\-

C1

X

X

Released

CX\_SY\_RTTI\_NO\_CHECK

\-

\-

C1

X

 

Released

CX\_SY\_RTTI\_SYNTAX\_ERROR

\-

\-

C1

X

 

Released

CX\_SY\_RTTI\_TYPE\_NOT\_RELEASED

\-

\-

C1

X

 

Released

CX\_SY\_SERIALIZABLE\_OBJECT

\-

\-

C1

X

X

Released

CX\_SY\_SQL\_ERROR

\-

\-

C1

X

X

Released

CX\_SY\_SQL\_REDIRECT\_ERROR

\-

\-

C1

X

 

Released

CX\_SY\_SQL\_REPLACEMENT\_ERROR

\-

\-

C1

X

 

Released

CX\_SY\_SQL\_SHARING\_ERROR

\-

\-

C1

X

 

Released

CX\_SY\_SQL\_UNSUPPORTED\_FEATURE

\-

\-

C1

X

X

Released

CX\_SY\_STRG\_FORMAT

\-

\-

C1

X

X

Released

CX\_SY\_STRG\_PAR\_VAL

\-

\-

C1

X

X

Released

CX\_SY\_STRUCT\_ATTRIBUTES

\-

\-

C1

X

 

Released

CX\_SY\_STRUCT\_COMP\_NAME

\-

\-

C1

X

 

Released

CX\_SY\_STRUCT\_COMP\_TYPE

\-

\-

C1

X

 

Released

CX\_SY\_STRUCT\_CREATION

\-

\-

C1

X

 

Released

CX\_SY\_STRUCT\_SUFFIX\_NAME

\-

\-

C1

X

 

Released

CX\_SY\_TABLE\_ATTRIBUTES

\-

\-

C1

X

X

Released

CX\_SY\_TABLE\_CREATION

\-

\-

C1

X

 

Released

CX\_SY\_TABLE\_KEY\_SPECIFICATION

\-

\-

C1

X

X

Released

CX\_SY\_TABLE\_LINE\_TYPE

\-

\-

C1

X

 

Released

CX\_SY\_TAB\_RANGE\_OUT\_OF\_BOUNDS

\-

\-

C1

X

X

Released

CX\_SY\_TRANS\_OPTION\_ERROR

\-

\-

C1

X

X

Released

CX\_SY\_TYPE\_CREATION

\-

\-

C1

X

 

Released

CX\_SY\_TYPE\_NOT\_EXACT

\-

\-

C1

X

X

Released

CX\_SY\_TYPE\_NOT\_RELEASED

\-

\-

C1

X

 

Released

CX\_SY\_UNKNOWN\_CURRENCY

\-

\-

C1

X

X

Released

CX\_SY\_UNKNOWN\_TYPE

\-

\-

C1

X

 

Released

CX\_SY\_UNSUPPORTED\_FUNCTION

\-

\-

C1

X

X

Released

CX\_SY\_ZERODIVIDE

\-

\-

C1

X

X

Released

CX\_TRANSFORMATION\_ERROR

\-

\-

C1

X

X

Released

CX\_TSTMP\_INTERNAL\_ERROR

\-

\-

C1

X

X

Released

CX\_UOM\_ERROR

\-

\-

C1

X

X

Released

CX\_UUID\_ERROR

\-

\-

C1

X

X

Released

CX\_WEB\_HTTP\_CLIENT\_ERROR

\-

\-

C1

X

 

Released

CX\_WEB\_HTTP\_CONVERSION\_FAILED

\-

\-

C1

X

 

Released

CX\_WEB\_MESSAGE\_ERROR

\-

\-

C1

X

 

Released

CX\_WS\_PROTOCOL\_ERROR

\-

\-

C1

X

 

Released

CX\_XCO\_AR\_EXISTENCE\_EXCEPTION

\-

\-

C1

X

 

Released

CX\_XCO\_GEN\_DELETE\_EXCEPTION

\-

\-

C1

X

 

Released

CX\_XCO\_GEN\_PATCH\_EXCEPTION

\-

\-

C1

X

 

Released

CX\_XCO\_GEN\_POST\_EXCEPTION

\-

\-

C1

X

 

Released

CX\_XCO\_GEN\_PUT\_EXCEPTION

\-

\-

C1

X

 

Released

CX\_XCO\_LOCK\_EXCEPTION

\-

\-

C1

X

 

Released

CX\_XCO\_RUNTIME\_EXCEPTION

\-

\-

C1

X

 

Released

CX\_XSDANY\_ERROR

\-

\-

C1

X

 

Released

CX\_XSDANY\_NAMESPACE\_ERROR

\-

\-

C1

X

 

Released

CX\_XSDANY\_PARSE\_ERROR

\-

\-

C1

X

 

Released

CX\_XSDANY\_PREFIX\_CONFLICT

\-

\-

C1

X

 

Released

CX\_XSLT\_ABAP\_CALL\_ERROR

\-

\-

C1

X

X

Released

CX\_XSLT\_CALL\_ERROR

\-

\-

C1

X

 

Released

CX\_XSLT\_DESERIALIZATION\_ERROR

\-

\-

C1

X

X

Released

CX\_XSLT\_EXCEPTION

\-

\-

C1

X

 

Released

CX\_XSLT\_FORMAT\_ERROR

\-

\-

C1

X

X

Released

CX\_XSLT\_ID\_HREF\_ERROR

\-

\-

C1

X

X

Released

CX\_XSLT\_INVALID\_XML

\-

\-

C1

X

X

Released

CX\_XSLT\_RUNTIME\_ERROR

\-

\-

C1

X

 

Released

CX\_XSLT\_SERIALIZATION\_ERROR

\-

\-

C1

X

X

Released

CX\_XSLT\_SYSTEM\_ERROR

\-

\-

C1

X

X

Released

MBC\_CP\_API

\-

\-

C1

X

 

Released

SQL\_CURRENCY\_CONVERSION

\-

\-

C1

X

 

Released

SQL\_UNIT\_CONVERSION

\-

\-

C1

X

 

Released

XCO\_CP

\-

\-

C1

X

 

Released

XCO\_CP\_ABAP

\-

\-

C1

X

 

Released

XCO\_CP\_ABAP\_DICTIONARY

\-

\-

C1

X

 

Released

XCO\_CP\_ABAP\_OBJECTS

\-

\-

C1

X

 

Released

XCO\_CP\_ABAP\_REPOSITORY

\-

\-

C1

X

 

Released

XCO\_CP\_ABAP\_SQL

\-

\-

C1

X

 

Released

XCO\_CP\_ABAP\_UNIT

\-

\-

C1

X

 

Released

XCO\_CP\_AMDP

\-

\-

C1

X

 

Released

XCO\_CP\_APPLICATION\_LOG\_OBJECT

\-

\-

C1

X

 

Released

XCO\_CP\_ARS

\-

\-

C1

X

 

Released

XCO\_CP\_BAL

\-

\-

C1

X

 

Released

XCO\_CP\_BEHAVIOR\_DEFINITION

\-

\-

C1

X

 

Released

XCO\_CP\_BEHAVIOR\_IMPLEMENTATION

\-

\-

C1

X

 

Released

XCO\_CP\_BINARY

\-

\-

C1

X

 

Released

XCO\_CP\_BUSINESS\_CNFGRTN\_OBJECT

\-

\-

C1

X

 

Released

XCO\_CP\_CALL\_STACK

\-

\-

C1

X

 

Released

XCO\_CP\_CDS

\-

\-

C1

X

 

Released

XCO\_CP\_CDS\_ANNOTATION

\-

\-

C1

X

 

Released

XCO\_CP\_CDS\_TYPE\_DEFINITION

\-

\-

C1

X

 

Released

XCO\_CP\_CHARACTER

\-

\-

C1

X

 

Released

XCO\_CP\_CTS

\-

\-

C1

X

 

Released

XCO\_CP\_DATABASE\_TABLE

\-

\-

C1

X

 

Released

XCO\_CP\_DATA\_DEFINITION

\-

\-

C1

X

 

Released

XCO\_CP\_DATA\_ELEMENT

\-

\-

C1

X

 

Released

XCO\_CP\_DCL

\-

\-

C1

X

 

Released

XCO\_CP\_DDL

\-

\-

C1

X

 

Released

XCO\_CP\_DOMAIN

\-

\-

C1

X

 

Released

XCO\_CP\_EVENT\_BINDING

\-

\-

C1

X

 

Released

XCO\_CP\_FUNCTION\_GROUP

\-

\-

C1

X

 

Released

XCO\_CP\_FUNCTION\_MODULE

\-

\-

C1

X

 

Released

XCO\_CP\_GENERATION

\-

\-

C1

X

 

Released

XCO\_CP\_GENERATION\_AO

\-

\-

C1

X

 

Released

XCO\_CP\_GENERATION\_DDLS

\-

\-

C1

X

 

Released

XCO\_CP\_GENERATION\_DOMA

\-

\-

C1

X

 

Released

XCO\_CP\_GENERATION\_DTEL

\-

\-

C1

X

 

Released

XCO\_CP\_GENERATION\_TABL

\-

\-

C1

X

 

Released

XCO\_CP\_GENERATION\_TTYP

\-

\-

C1

X

 

Released

XCO\_CP\_HASH

\-

\-

C1

X

 

Released

XCO\_CP\_I18N

\-

\-

C1

X

 

Released

XCO\_CP\_JSON

\-

\-

C1

X

 

Released

XCO\_CP\_LANGUAGE

\-

\-

C1

X

 

Released

XCO\_CP\_MESSAGE

\-

\-

C1

X

 

Released

XCO\_CP\_MESSAGE\_CLASS

\-

\-

C1

X

 

Released

XCO\_CP\_METADATA\_EXTENSION

\-

\-

C1

X

 

Released

XCO\_CP\_NAME

\-

\-

C1

X

 

Released

XCO\_CP\_PACKAGE

\-

\-

C1

X

 

Released

XCO\_CP\_RAP

\-

\-

C1

X

 

Released

XCO\_CP\_REGULAR\_EXPRESSION

\-

\-

C1

X

 

Released

XCO\_CP\_SAP\_OBJECT\_NODE\_TYPE

\-

\-

C1

X

 

Released

XCO\_CP\_SAP\_OBJECT\_TYPE

\-

\-

C1

X

 

Released

XCO\_CP\_SERVICE\_BINDING

\-

\-

C1

X

 

Released

XCO\_CP\_SERVICE\_CONS\_MODEL

\-

\-

C1

X

 

Released

XCO\_CP\_SERVICE\_DEFINITION

\-

\-

C1

X

 

Released

XCO\_CP\_SOFTWARE\_COMPONENT

\-

\-

C1

X

 

Released

XCO\_CP\_STRING

\-

\-

C1

X

 

Released

XCO\_CP\_SYSTEM

\-

\-

C1

X

 

Released

XCO\_CP\_TABLE

\-

\-

C1

X

 

Released

XCO\_CP\_TABLE\_TYPE

\-

\-

C1

X

 

Released

XCO\_CP\_TENANT

\-

\-

C1

X

 

Released

XCO\_CP\_TEXT\_POOL

\-

\-

C1

X

 

Released

XCO\_CP\_TIME

\-

\-

C1

X

 

Released

XCO\_CP\_TRANSFORMATION

\-

\-

C1

X

 

Released

XCO\_CP\_TRANSPORT

\-

\-

C1

X

 

Released

XCO\_CP\_UUID

\-

\-

C1

X

 

Released

XCO\_CP\_XLSX

\-

\-

C1

X

 

Released

XCO\_CP\_XLSX\_READ\_ACCESS

\-

\-

C1

X

 

Released

XCO\_CP\_XLSX\_SELECTION

\-

\-

C1

X

 

Released

XCO\_CP\_XLSX\_WRITE\_ACCESS

\-

\-

C1

X

 

Released

XCO\_KU

\-

\-

C1

 

X

Released

XCO\_KU\_BINARY

\-

\-

C1

 

X

Released

XCO\_KU\_JSON

\-

\-

C1

 

X

Released

XCO\_KU\_REGULAR\_EXPRESSION

\-

\-

C1

 

X

Released

XCO\_KU\_STRING

\-

\-

C1

 

X

Released

XCO\_KU\_TENANT

\-

\-

C1

 

X

Released

XCO\_KU\_TIME

\-

\-

C1

 

X

Released

XCO\_KU\_UUID

\-

\-

C1

 

X

Released

DDLS - Data Definition Language Source   

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

State

Successor

C\_PCF\_CODEVALUEHELP

\-

\-

C1

X

X

Released

C\_SWF\_SWD\_C1\_RELEASED\_NFC\_UT

\-

\-

C1

 

X

Deprecated

,

C\_SWF\_SWD\_C1\_RELEASED\_UT

\-

\-

C1

X

 

Deprecated

,

DDCDS\_CUSTOMER\_DOMAIN\_VALUE

\-

\-

C1

X

 

Released

DDCDS\_CUSTOMER\_DOMAIN\_VALUE\_T

\-

\-

C1

X

 

Released

DDCDS\_TYPE\_ENUMVAL\_CHAR1\_SCP

\-

\-

C1

X

 

Released

DDCDS\_TYPE\_ENUMVAL\_CHAR1\_T\_SCP

\-

\-

C1

X

 

Released

DDCDS\_TYPE\_ENUMVAL\_CHAR2\_SCP

\-

\-

C1

X

 

Released

DDCDS\_TYPE\_ENUMVAL\_CHAR2\_T\_SCP

\-

\-

C1

X

 

Released

DDCDS\_TYPE\_ENUMVAL\_CHAR3\_SCP

\-

\-

C1

X

 

Released

DDCDS\_TYPE\_ENUMVAL\_CHAR3\_T\_SCP

\-

\-

C1

X

 

Released

DDCDS\_TYPE\_ENUMVAL\_CHAR4\_SCP

\-

\-

C1

X

 

Released

DDCDS\_TYPE\_ENUMVAL\_CHAR4\_T\_SCP

\-

\-

C1

X

 

Released

DDCDS\_TYPE\_ENUMVAL\_CHAR5\_SCP

\-

\-

C1

X

 

Released

DDCDS\_TYPE\_ENUMVAL\_CHAR5\_T\_SCP

\-

\-

C1

X

 

Released

DDCDS\_TYPE\_ENUMVAL\_CHAR6\_SCP

\-

\-

C1

X

 

Released

DDCDS\_TYPE\_ENUMVAL\_CHAR6\_T\_SCP

\-

\-

C1

X

 

Released

DDCDS\_TYPE\_ENUMVAL\_CHAR7\_SCP

\-

\-

C1

X

 

Released

DDCDS\_TYPE\_ENUMVAL\_CHAR7\_T\_SCP

\-

\-

C1

X

 

Released

DDCDS\_TYPE\_ENUMVAL\_CHAR8\_SCP

\-

\-

C1

X

 

Released

DDCDS\_TYPE\_ENUMVAL\_CHAR8\_T\_SCP

\-

\-

C1

X

 

Released

DDCDS\_TYPE\_ENUMVAL\_INT1\_SCP

\-

\-

C1

X

 

Released

DDCDS\_TYPE\_ENUMVAL\_INT1\_T\_SCP

\-

\-

C1

X

 

Released

DDCDS\_TYPE\_ENUMVAL\_INT2\_SCP

\-

\-

C1

X

 

Released

DDCDS\_TYPE\_ENUMVAL\_INT2\_T\_SCP

\-

\-

C1

X

 

Released

DDCDS\_TYPE\_ENUMVAL\_INT4\_SCP

\-

\-

C1

X

 

Released

DDCDS\_TYPE\_ENUMVAL\_INT4\_T\_SCP

\-

\-

C1

X

 

Released

DDCDS\_TYPE\_ENUMVAL\_NUMC1\_SCP

\-

\-

C1

X

 

Released

DDCDS\_TYPE\_ENUMVAL\_NUMC1\_T\_SCP

\-

\-

C1

X

 

Released

DDCDS\_TYPE\_ENUMVAL\_NUMC2\_SCP

\-

\-

C1

X

 

Released

DDCDS\_TYPE\_ENUMVAL\_NUMC2\_T\_SCP

\-

\-

C1

X

 

Released

DDCDS\_TYPE\_ENUMVAL\_NUMC3\_SCP

\-

\-

C1

X

 

Released

DDCDS\_TYPE\_ENUMVAL\_NUMC3\_T\_SCP

\-

\-

C1

X

 

Released

DDCDS\_TYPE\_ENUMVAL\_NUMC4\_SCP

\-

\-

C1

X

 

Released

DDCDS\_TYPE\_ENUMVAL\_NUMC4\_T\_SCP

\-

\-

C1

X

 

Released

DDCDS\_TYPE\_ENUMVAL\_NUMC5\_SCP

\-

\-

C1

X

 

Released

DDCDS\_TYPE\_ENUMVAL\_NUMC5\_T\_SCP

\-

\-

C1

X

 

Released

DDCDS\_TYPE\_ENUMVAL\_NUMC6\_SCP

\-

\-

C1

X

 

Released

DDCDS\_TYPE\_ENUMVAL\_NUMC6\_T\_SCP

\-

\-

C1

X

 

Released

DDCDS\_TYPE\_ENUMVAL\_NUMC7\_SCP

\-

\-

C1

X

 

Released

DDCDS\_TYPE\_ENUMVAL\_NUMC7\_T\_SCP

\-

\-

C1

X

 

Released

DDCDS\_TYPE\_ENUMVAL\_NUMC8\_SCP

\-

\-

C1

X

 

Released

DDCDS\_TYPE\_ENUMVAL\_NUMC8\_T\_SCP

\-

\-

C1

X

 

Released

D\_CPWF\_CONTEXT\_PARAMETER

\-

\-

C1

X

 

Released

D\_CPWF\_START\_PARAMETER

\-

\-

C1

X

 

Released

D\_SELECTCUSTOMIZINGTRANSPTREQP

\-

\-

C1

X

 

Released

I\_ACADEMICTITLE

\-

\-

C1

X

X

Released

I\_ACADEMICTITLETEXT

\-

\-

C1

X

X

Released

I\_ACADEMICTITLEVH

\-

\-

C1

X

X

Released

I\_ACTIVEADDRESSREPRESENTATION

\-

\-

C1

X

X

Released

I\_ADDRCOMMUNICATIONMETHODTEXT

\-

\-

C1

X

X

Released

I\_ADDRCURDEFAULTEMAILADDRESS

\-

\-

C1

X

X

Released

I\_ADDRCURDEFAULTFAXNUMBER

\-

\-

C1

X

X

Released

I\_ADDRCURDFLTLANDLINEPHONENMBR

\-

\-

C1

X

X

Released

I\_ADDRCURDFLTMOBILEPHONENUMBER

\-

\-

C1

X

X

Released

I\_ADDRDELIVERYSERVICETYPETEXT

\-

\-

C1

X

X

Released

I\_ADDRDELIVERYSERVICETYPEVH

\-

\-

C1

X

X

Released

I\_ADDRESSCOMMUNICATIONMETHOD

\-

\-

C1

X

X

Released

I\_ADDRESSCOMMUNICATIONMETHODVH

\-

\-

C1

X

X

Released

I\_ADDRESSCOMMUNICATIONREMARK\_2

\-

\-

C1

X

X

Released

I\_ADDRESSCOMMUNICATIONUSAGE

\-

\-

C1

X

X

Released

I\_ADDRESSDEFAULTREPRESENTATION

\-

\-

C1

X

X

Released

I\_ADDRESSDELIVERYSERVICETYPE

\-

\-

C1

X

X

Released

I\_ADDRESSEMAILADDRESS\_2

\-

\-

C1

X

X

Released

I\_ADDRESSFAXNUMBER\_2

\-

\-

C1

X

X

Released

I\_ADDRESSGROUP

\-

\-

C1

X

X

Released

I\_ADDRESSGROUPTEXT

\-

\-

C1

X

X

Released

I\_ADDRESSGROUPVH

\-

\-

C1

X

X

Released

I\_ADDRESSMAINWEBSITEURL

\-

\-

C1

X

X

Released

I\_ADDRESSMANAGEMENTURITYPE

\-

\-

C1

X

X

Released

I\_ADDRESSMANAGEMENTURITYPETEXT

\-

\-

C1

X

X

Released

I\_ADDRESSMANAGEMENTURITYPEVH

\-

\-

C1

X

X

Released

I\_ADDRESSNONDELIVERABLEREASON

\-

\-

C1

X

X

Released

I\_ADDRESSNONDELIVERABLEREASONT

\-

\-

C1

X

X

Released

I\_ADDRESSOBJECTTYPE

\-

\-

C1

X

X

Released

I\_ADDRESSOBJECTTYPETEXT

\-

\-

C1

X

X

Released

I\_ADDRESSPERSONNAME

\-

\-

C1

X

X

Released

I\_ADDRESSPHONENUMBER\_2

\-

\-

C1

X

X

Released

I\_ADDRESSREPRESENTATION

\-

\-

C1

X

X

Released

I\_ADDRESSREPRESENTATIONCODEVH

\-

\-

C1

X

X

Released

I\_ADDRESSREPRESENTATIONTEXT

\-

\-

C1

X

X

Released

I\_ADDRESSURI

\-

\-

C1

X

X

Released

I\_ADDRESSWORKPLACEDETAILS

\-

\-

C1

X

X

Released

I\_ADDRESS\_2

\-

\-

C1

X

X

Released

I\_ADDRNONDELIVERABLEREASONVH

\-

\-

C1

X

X

Released

I\_ADDRORGNAMEPOSTALADDRESS

\-

\-

C1

X

X

Released

I\_ADDRPERSNNAMEDFLTRPRSTN

\-

\-

C1

X

X

Released

I\_APISFORCLOUDDEVELOPMENT

\-

\-

C1

X

 

Released

I\_APISFORSAPCOUDPLATFORM

\-

\-

C1

X

 

Deprecated

DDLS I\_APISFORCLOUDDEVELOPMENT

I\_APISWITHCLOUDDEVSUCCESSOR

\-

\-

C1

X

 

Released

I\_BPUSREXTERNALID

\-

\-

C1

X

X

Released

I\_BPUSRROLE

\-

\-

C1

X

X

Released

I\_BUPAIDENTIFICATIONTYPE

\-

\-

C1

X

X

Released

I\_BUSINESSUSER

\-

\-

C1

X

X

Deprecated

DDLS I\_BUSINESSUSERBASIC

I\_BUSINESSUSERBASIC

\-

\-

C1

X

X

Released

I\_BUSINESSUSERVH

\-

\-

C1

X

X

Released

I\_CASEATTRIBUTE

\-

\-

C1

 

X

Released

I\_CASEATTRIBUTEPROFILE

\-

\-

C1

 

X

Released

I\_CASEATTRIBUTEPROFILETEXT

\-

\-

C1

 

X

Released

I\_CASEAUTHORIZATIONLEVEL

\-

\-

C1

 

X

Released

I\_CASEAUTHORIZATIONLEVELTEXT

\-

\-

C1

 

X

Released

I\_CASECATEGORY

\-

\-

C1

 

X

Released

I\_CASECATEGORYTEXT

\-

\-

C1

 

X

Released

I\_CASEENTITY

\-

\-

C1

 

X

Released

I\_CASEESCALATIONREASON

\-

\-

C1

 

X

Released

I\_CASEESCALATIONREASONTEXT

\-

\-

C1

 

X

Released

I\_CASEFUNCTIONPROFILE

\-

\-

C1

 

X

Released

I\_CASEFUNCTIONPROFILETEXT

\-

\-

C1

 

X

Released

I\_CASEINDIVIDUALSTATUS

\-

\-

C1

 

X

Released

I\_CASEINDIVIDUALSTATUSTEXT

\-

\-

C1

 

X

Released

I\_CASEPRIORITY

\-

\-

C1

 

X

Released

I\_CASEPRIORITYTEXT

\-

\-

C1

 

X

Released

I\_CASEPROCESS

\-

\-

C1

 

X

Released

I\_CASEPROCESSTEXT

\-

\-

C1

 

X

Released

I\_CASEREASONS

\-

\-

C1

 

X

Released

I\_CASEREASONSTEXT

\-

\-

C1

 

X

Released

I\_CASESTATUSPROFILE

\-

\-

C1

 

X

Released

I\_CASESTATUSPROFILETEXT

\-

\-

C1

 

X

Released

I\_CASESYSTEMSTATUS

\-

\-

C2

 

Released

I\_CASESYSTEMSTATUSTEXT

\-

\-

C1

 

X

Released

I\_CASETERMINOLOGYPROFILE

\-

\-

C1

 

X

Released

I\_CASETERMINOLOGYPROFILETEXT

\-

\-

C1

 

X

Released

I\_CASETEXTPROFILE

\-

\-

C1

 

X

Released

I\_CASETEXTPROFILETEXT

\-

\-

C1

 

X

Released

I\_CASETYPES

\-

\-

C1

 

X

Released

I\_CASETYPESTEXT

\-

\-

C1

 

X

Released

I\_CONFIGNDEPRECATIONCODE

\-

\-

C1

X

X

Released

I\_CONFIGNDEPRECATIONCODETEXT

\-

\-

C1

X

X

Released

I\_COUNTRY

\-

\-

C1

X

X

Released

I\_COUNTRYTEXT

\-

\-

C1

X

X

Released

I\_COUNTRYVH

\-

\-

C1

X

X

Released

I\_CPWF\_INST

\-

\-

C1

X

 

Released

I\_CSTMBIZCONFIGNLASTCHGD

\-

\-

C1

X

 

Released

I\_CURRENCY

\-

\-

C1

X

X

Released

I\_CURRENCYSTDVH

\-

\-

C1

X

X

Released

I\_CURRENCYTEXT

\-

\-

C1

X

X

Released

I\_CUSTABAPOBJDIRECTORYENTRY

\-

\-

C1

X

 

Released

I\_CUSTABAPPACKAGE

\-

\-

C1

X

 

Released

I\_DAYLIGHTSAVINGRULE

\-

\-

C1

X

X

Released

I\_DAYLIGHTSAVINGRULETEXT

\-

\-

C1

X

X

Released

I\_EXCHANGERATEFACTORSRAWDATA

\-

\-

C1

X

X

Released

I\_EXCHANGERATERAWDATA

\-

\-

C1

X

X

Released

I\_EXCHANGERATESPREADRAWDATA

\-

\-

C1

X

X

Released

I\_EXCHANGERATETYPE

\-

\-

C1

X

X

Released

I\_EXCHANGERATETYPESTDVH

\-

\-

C1

X

X

Released

I\_EXCHANGERATETYPETEXT

\-

\-

C1

X

X

Released

I\_EXCHRATEQTANTYPERAWDATA

\-

\-

C1

X

X

Released

I\_FACTORYCALENDARBASIC

\-

\-

C1

X

 

Released

I\_FACTORYCALENDARBASICTEXT

\-

\-

C1

X

 

Released

I\_FACTORYCALENDARVALUEHELP

\-

\-

C1

X

 

Released

I\_FAMILYNAMEPREFIX

\-

\-

C1

X

X

Released

I\_FAMILYNAMEPREFIXVH

\-

\-

C1

X

X

Released

I\_FISCALPERIODRAWDATA

\-

\-

C1

X

X

Released

I\_FISCALPERIODTEXTRAWDATA

\-

\-

C1

X

X

Released

I\_FISCALYEARVARIANT

\-

\-

C1

X

X

Released

I\_FISCALYEARVARIANTTEXT

\-

\-

C1

X

X

Released

I\_FORMOFADDRESS

\-

\-

C1

X

X

Released

I\_FORMOFADDRESSTEXT

\-

\-

C1

X

X

Released

I\_LANGUAGE

\-

\-

C1

X

X

Released

I\_LANGUAGETEXT

\-

\-

C1

X

X

Released

I\_NAMESUPPLEMENT

\-

\-

C1

X

X

Released

I\_NAMESUPPLEMENTTEXT

\-

\-

C1

X

X

Released

I\_NAMESUPPLEMENTVH

\-

\-

C1

X

X

Released

I\_ORGADDRESSDEFAULTRPRSTN

\-

\-

C1

X

X

Released

I\_ORGANIZATIONADDRESS

\-

\-

C1

X

X

Released

I\_ORGNAMEPOSTLADDRDFLTRPRSTN

\-

\-

C1

X

X

Released

I\_PCF\_CODEVALUEHELP

\-

\-

C1

X

 

Released

I\_PCF\_CODEVALUEHELPTEXT

\-

\-

C1

X

 

Released

I\_PERSONADDRESS

\-

\-

C1

X

X

Released

I\_PERSONADDRESSDEFAULTRPRSTN

\-

\-

C1

X

X

Released

I\_PERSONWORKPLACEADDRESS

\-

\-

C1

X

X

Released

I\_PHONENUMBERTYPE

\-

\-

C1

X

X

Released

I\_PHONENUMBERTYPETEXT

\-

\-

C1

X

X

Released

I\_POSTALCITY

\-

\-

C1

X

X

Released

I\_POSTALCITYTEXT

\-

\-

C1

X

X

Released

I\_PUBLHOLIDAYCALENDARBASICTEXT

\-

\-

C1

X

 

Released

I\_PUBLICHOLIDAYCALENDARBASIC

\-

\-

C1

X

 

Released

I\_PUBLICHOLIDAYCALENDARVH

\-

\-

C1

X

 

Released

I\_REGION

\-

\-

C1

X

X

Released

I\_REGIONALSTRUCCHECKSTATUSTEXT

\-

\-

C1

X

X

Released

I\_REGIONALSTRUCTURECHECKSTATUS

\-

\-

C1

X

X

Released

I\_REGIONTEXT

\-

\-

C1

X

X

Released

I\_REGIONVH

\-

\-

C1

X

X

Released

I\_SECONDARYREGION

\-

\-

C1

X

X

Released

I\_SECONDARYREGIONTEXT

\-

\-

C1

X

X

Released

I\_SHORTENEDFISCALYEAR

\-

\-

C1

X

X

Released

I\_STREET

\-

\-

C1

X

X

Released

I\_STREETTEXT

\-

\-

C1

X

X

Released

I\_SYSTEMUSER

\-

\-

C1

X

X

Released

I\_TAXINGCOUNTY

\-

\-

C1

X

X

Released

I\_TAXINGCOUNTYTEXT

\-

\-

C1

X

X

Released

I\_TERTIARYREGION

\-

\-

C1

X

X

Released

I\_TERTIARYREGIONTEXT

\-

\-

C1

X

X

Released

I\_TIMEZONE

\-

\-

C1

X

X

Released

I\_TIMEZONEIANACODEMAP

\-

\-

C1

X

X

Released

I\_TIMEZONEIANACODESTDVH

\-

\-

C1

X

X

Released

I\_TIMEZONERULE

\-

\-

C1

X

X

Released

I\_TIMEZONERULETEXT

\-

\-

C1

X

X

Released

I\_TIMEZONETEXT

\-

\-

C1

X

X

Released

I\_TRANSPORTATIONZONE

\-

\-

C1

X

X

Released

I\_TRANSPORTATIONZONETEXT

\-

\-

C1

X

X

Released

I\_TRANSPORTATIONZONEVH

\-

\-

C1

X

X

Released

I\_UNITOFMEASURE

\-

\-

C1

X

X

Released

I\_UNITOFMEASURECOMMERCIALNAME

\-

\-

C1

X

X

Released

I\_UNITOFMEASUREDIMENSION

\-

\-

C1

X

X

Released

I\_UNITOFMEASUREDIMENSIONTEXT

\-

\-

C1

X

X

Released

I\_UNITOFMEASUREISOCODE

\-

\-

C1

X

X

Released

I\_UNITOFMEASUREISOCODETEXT

\-

\-

C1

X

X

Released

I\_UNITOFMEASURESTDVH

\-

\-

C1

X

X

Released

I\_UNITOFMEASURETECHNICALNAME

\-

\-

C1

X

X

Released

I\_UNITOFMEASURETEXT

\-

\-

C1

X

X

Released

I\_USER

\-

\-

C1

X

X

Released

I\_USERSUBSTITUTE

\-

\-

C1

 

X

Released

I\_WORKFLOWAGENTRULE

\-

\-

C1

 

X

Released

I\_WORKFLOWAGENTRULETEXT

\-

\-

C1

 

X

Released

I\_WORKFLOWEXTERNALSTATUS

\-

\-

C1

 

X

Released

I\_WORKFLOWEXTERNALSTATUSTEXT

\-

\-

C1

 

X

Released

I\_WORKFLOWLEAVEREQUEST

\-

\-

C1

 

X

Released

I\_WORKFLOWRECIPIENTS

\-

\-

C1

 

X

Deprecated

DDLS I\_WORKFLOWRECIPIENTS\_V2

I\_WORKFLOWRECIPIENTS\_V2

\-

\-

C1

 

X

Released

I\_WORKFLOWSCENARIODEFINITION

\-

\-

C1

 

X

Released

I\_WORKFLOWSCENARIODEFTEXT

\-

\-

C1

 

X

Released

I\_WORKFLOWSCENARIORESULT

\-

\-

C1

 

X

Released

I\_WORKFLOWSCENARIORESULTTEXT

\-

\-

C1

 

X

Released

I\_WORKFLOWSTATUSDETAILS

\-

\-

C1

 

X

Released

I\_WORKFLOWSTATUSOVERVIEW

\-

\-

C1

 

X

Released

I\_WORKFLOWSTEPRESULT

\-

\-

C1

 

X

Released

I\_WORKFLOWSTEPRESULTTEXT

\-

\-

C1

 

X

Released

I\_WORKFLOWSTEPTYPE

\-

\-

C1

 

X

Released

I\_WORKFLOWSTEPTYPETEXT

\-

\-

C1

 

X

Released

I\_WORKFLOWTASKEXTERNALSTATTEXT

\-

\-

C1

 

X

Released

I\_WORKFLOWTASKEXTERNALSTATUS

\-

\-

C1

 

X

Released

I\_WORKPLACEADDRESS

\-

\-

C1

X

X

Released

RIS\_SEARCH\_RELEASED\_OBJECTS

\-

\-

C1

 

X

Released

SPAK\_CLS\_DDL\_TEST\_VIEW

\-

\-

C1

 

X

Released

DOMA - Domain   

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

State

Successor

/AIF/IFNAME

\-

\-

C1

 

X

Released

/AIF/IFVERSION

\-

\-

C1

 

X

Released

/AIF/NS

\-

\-

C1

 

X

Released

ABAPVRS

\-

\-

C1

 

X

Released

ABAP\_BOOLEAN

\-

\-

C1

X

X

Released

ABAP\_MSIZE

\-

\-

C1

 

X

Released

ACO\_PROXY\_MSG\_TYPE

\-

\-

C1

X

 

Released

ACTIV\_AUTH

\-

\-

C1

X

 

Released

BAPIFLAG

\-

\-

C1

X

X

Released

BEGRU

\-

\-

C1

X

 

Released

CHAR001

\-

\-

C1

X

 

Deprecated

CHAR01

\-

\-

C1

X

X

Released

CHAR010

\-

\-

C1

X

 

Deprecated

CHAR02

\-

\-

C1

X

 

Deprecated

CHAR03

\-

\-

C1

X

 

Deprecated

CHAR08

\-

\-

C1

X

 

Deprecated

CHAR1

\-

\-

C1

X

X

Released

CHAR10

\-

\-

C1

X

 

Deprecated

CHAR100

\-

\-

C1

X

 

Deprecated

CHAR11

\-

\-

C1

X

 

Deprecated

CHAR116

\-

\-

C1

X

 

Deprecated

CHAR12

\-

\-

C1

X

 

Deprecated

CHAR120

\-

\-

C1

X

 

Deprecated

CHAR123

\-

\-

C1

X

 

Deprecated

CHAR128

\-

\-

C1

X

 

Deprecated

CHAR13

\-

\-

C1

X

 

Deprecated

CHAR134

\-

\-

C1

X

 

Deprecated

CHAR14

\-

\-

C1

X

 

Deprecated

CHAR140

\-

\-

C1

X

 

Deprecated

CHAR15

\-

\-

C1

X

 

Deprecated

CHAR150

\-

\-

C1

X

 

Deprecated

CHAR16

\-

\-

C1

X

 

Deprecated

CHAR17

\-

\-

C1

X

 

Deprecated

CHAR18

\-

\-

C1

X

 

Deprecated

CHAR180

\-

\-

C1

X

 

Deprecated

CHAR19

\-

\-

C1

X

 

Deprecated

CHAR1\_X

\-

\-

C1

X

 

Deprecated

CHAR2

\-

\-

C1

X

 

Deprecated

CHAR20

\-

\-

C1

X

 

Deprecated

CHAR200

\-

\-

C1

X

 

Deprecated

CHAR21

\-

\-

C1

X

 

Deprecated

CHAR22

\-

\-

C1

X

 

Deprecated

CHAR24

\-

\-

C1

X

 

Deprecated

CHAR240

\-

\-

C1

X

 

Deprecated

CHAR25

\-

\-

C1

X

 

Deprecated

CHAR251

\-

\-

C1

X

 

Deprecated

CHAR255

\-

\-

C1

X

 

Deprecated

CHAR256

\-

\-

C1

X

 

Deprecated

CHAR26

\-

\-

C1

X

 

Deprecated

CHAR260

\-

\-

C1

X

 

Deprecated

CHAR27

\-

\-

C1

X

 

Deprecated

CHAR28

\-

\-

C1

X

 

Deprecated

CHAR3

\-

\-

C1

X

 

Deprecated

CHAR30

\-

\-

C1

X

X

Released

CHAR300

\-

\-

C1

X

 

Deprecated

CHAR32

\-

\-

C1

X

 

Deprecated

CHAR33

\-

\-

C1

X

 

Deprecated

CHAR34

\-

\-

C1

X

 

Deprecated

CHAR35

\-

\-

C1

X

 

Deprecated

CHAR36

\-

\-

C1

X

 

Deprecated

CHAR37

\-

\-

C1

X

 

Deprecated

CHAR38

\-

\-

C1

X

 

Deprecated

CHAR4

\-

\-

C1

X

 

Deprecated

CHAR40

\-

\-

C1

X

 

Deprecated

CHAR42

\-

\-

C1

X

 

Deprecated

CHAR45

\-

\-

C1

X

 

Deprecated

CHAR46

\-

\-

C1

X

 

Deprecated

CHAR47

\-

\-

C1

X

 

Deprecated

CHAR48

\-

\-

C1

X

 

Deprecated

CHAR49

\-

\-

C1

X

 

Deprecated

CHAR5

\-

\-

C1

X

 

Deprecated

CHAR50

\-

\-

C1

X

 

Deprecated

CHAR55

\-

\-

C1

X

 

Deprecated

CHAR56

\-

\-

C1

X

 

Deprecated

CHAR58

\-

\-

C1

X

 

Deprecated

CHAR6

\-

\-

C1

X

 

Deprecated

CHAR60

\-

\-

C1

X

 

Deprecated

CHAR61

\-

\-

C1

X

 

Deprecated

CHAR64

\-

\-

C1

X

 

Deprecated

CHAR65

\-

\-

C1

X

 

Deprecated

CHAR66

\-

\-

C1

X

 

Deprecated

CHAR7

\-

\-

C1

X

 

Deprecated

CHAR70

\-

\-

C1

X

 

Deprecated

CHAR72

\-

\-

C1

X

 

Deprecated

CHAR78

\-

\-

C1

X

 

Deprecated

CHAR79

\-

\-

C1

X

 

Deprecated

CHAR8

\-

\-

C1

X

 

Deprecated

CHAR80

\-

\-

C1

X

 

Deprecated

CHAR81

\-

\-

C1

X

 

Deprecated

CHAR9

\-

\-

C1

X

 

Deprecated

CHAR90

\-

\-

C1

X

 

Deprecated

CHAR93

\-

\-

C1

X

 

Deprecated

DATS

\-

\-

C1

X

 

Deprecated

DATUM

\-

\-

C1

X

X

Released

DDOPTION

\-

\-

C1

X

 

Released

DDSIGN

\-

\-

C1

X

 

Released

DUMMY

\-

\-

C1

 

X

Released

ISOCD

\-

\-

C1

X

 

Released

ISOCD\_UNIT

\-

\-

C1

X

 

Released

MEINS

\-

\-

C1

X

X

Released

PROGNAME

\-

\-

C1

 

X

Released

REGEX\_STANDARD

\-

\-

C1

X

X

Released

SAP\_BOOL

\-

\-

C1

 

X

Released

SNAP\_INST\_ID

\-

\-

C1

 

X

Released

SPRAS

\-

\-

C1

X

 

Released

SWF\_PBL\_ID\_FIELD

\-

\-

C1

 

X

Released

SWF\_PBL\_SAP\_OBJECT\_TYPE

\-

\-

C1

 

X

Released

SXSDDURATION\_SIGN

\-

\-

C1

 

X

Released

SYCHAR12K

\-

\-

C1

 

X

Released

TEXT1

\-

\-

C1

X

 

Deprecated

TEXT10

\-

\-

C1

X

 

Deprecated

TEXT100

\-

\-

C1

X

 

Deprecated

TEXT11

\-

\-

C1

X

 

Deprecated

TEXT12

\-

\-

C1

X

 

Deprecated

TEXT120

\-

\-

C1

X

 

Deprecated

TEXT128

\-

\-

C1

X

 

Deprecated

TEXT132

\-

\-

C1

X

 

Deprecated

TEXT140

\-

\-

C1

X

 

Deprecated

TEXT15

\-

\-

C1

X

 

Deprecated

TEXT16

\-

\-

C1

X

 

Deprecated

TEXT17

\-

\-

C1

X

 

Deprecated

TEXT18

\-

\-

C1

X

 

Deprecated

TEXT2

\-

\-

C1

X

 

Deprecated

TEXT20

\-

\-

C1

X

 

Deprecated

TEXT220

\-

\-

C1

 

X

Released

TEXT240

\-

\-

C1

X

 

Deprecated

TEXT25

\-

\-

C1

X

 

Deprecated

TEXT255

\-

\-

C1

X

 

Deprecated

TEXT27

\-

\-

C1

X

 

Deprecated

TEXT3

\-

\-

C1

X

 

Deprecated

TEXT30

\-

\-

C1

X

 

Deprecated

TEXT32

\-

\-

C1

X

 

Deprecated

TEXT34

\-

\-

C1

X

 

Deprecated

TEXT35

\-

\-

C1

X

 

Deprecated

TEXT4

\-

\-

C1

X

 

Deprecated

TEXT40

\-

\-

C1

X

X

Released

TEXT42

\-

\-

C1

X

 

Deprecated

TEXT45

\-

\-

C1

X

 

Deprecated

TEXT47

\-

\-

C1

X

 

Deprecated

TEXT5

\-

\-

C1

X

 

Deprecated

TEXT50

\-

\-

C1

X

 

Deprecated

TEXT55

\-

\-

C1

X

 

Deprecated

TEXT56

\-

\-

C1

X

 

Deprecated

TEXT60

\-

\-

C1

X

 

Deprecated

TEXT64

\-

\-

C1

X

 

Deprecated

TEXT65

\-

\-

C1

X

 

Deprecated

TEXT7

\-

\-

C1

X

 

Deprecated

TEXT70

\-

\-

C1

X

 

Deprecated

TEXT72

\-

\-

C1

X

 

Deprecated

TEXT8

\-

\-

C1

X

 

Deprecated

TEXT80

\-

\-

C1

X

 

Deprecated

TEXT9

\-

\-

C1

X

 

Deprecated

TEXT90

\-

\-

C1

X

 

Deprecated

TZNTSTMPL

\-

\-

C1

X

 

Released

TZNTSTMPS

\-

\-

C1

X

 

Released

USNAM

\-

\-

C1

 

X

Released

UTF8STR\_ND

\-

\-

C1

 

X

Released

UTF8STR\_XD

\-

\-

C1

 

X

Released

WAERS

\-

\-

C1

X

X

Released

XFELD

\-

\-

C1

 

X

Released

XSDANY

\-

\-

C1

X

 

Released

XSDBOOLEAN

\-

\-

C1

X

X

Released

XSDCURRCODE

\-

\-

C1

X

 

Released

XSDDATETIME\_ISO

\-

\-

C1

X

 

Released

XSDDATETIME\_LOCAL

\-

\-

C1

X

 

Released

XSDDATETIME\_LOCAL\_DT

\-

\-

C1

X

 

Released

XSDDATETIME\_LONG\_Z

\-

\-

C1

X

 

Released

XSDDATETIME\_OFFSET

\-

\-

C1

X

 

Released

XSDDATETIME\_Z

\-

\-

C1

X

 

Released

XSDDATE\_D

\-

\-

C1

X

 

Released

XSDDATE\_ISO

\-

\-

C1

X

 

Released

XSDDURATION\_ISO

\-

\-

C1

X

 

Released

XSDLANGUAGE

\-

\-

C1

X

 

Released

XSDQNAME

\-

\-

C1

X

 

Released

XSDTIME\_ISO

\-

\-

C1

X

 

Released

XSDTIME\_T

\-

\-

C1

X

 

Released

XSDUNITCODE

\-

\-

C1

X

 

Released

XSDUUID\_BASE32

\-

\-

C1

X

 

Released

XSDUUID\_BASE64

\-

\-

C1

X

 

Released

XSDUUID\_CHAR

\-

\-

C1

X

 

Released

XSDUUID\_RAW

\-

\-

C1

X

 

Released

XUBNAME

\-

\-

C1

X

 

Released

DRTY - CDS Type Definitions   

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

State

Successor

CALENDAR\_DATE\_LEVEL

\-

\-

C1

X

 

Released

CALENDAR\_DATE\_OPERATION

\-

\-

C1

X

 

Released

CALENDAR\_FISCAL\_LEVEL

\-

\-

C1

X

X

Released

CALENDAR\_FISCAL\_OPERATION

\-

\-

C1

X

X

Released

DSFD - CDS Scalar Function Definition   

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

State

Successor

CALENDAR\_OPERATION

\-

\-

C1

X

X

Released

CALENDAR\_SHIFT

\-

\-

C1

X

X

Released

COLUMN\_TOTAL

\-

\-

C1

X

X

Released

CURRENT\_TOTAL

\-

\-

C1

X

X

Released

DEVIATION\_RATIO

\-

\-

C1

X

X

Released

FISCAL\_CALENDAR\_OPERATION

\-

\-

C1

X

X

Released

FISCAL\_CALENDAR\_SHIFT

\-

\-

C1

X

X

Released

GRAND\_TOTAL

\-

\-

C1

X

X

Released

HRY\_NODE\_SIGN\_VALUE

\-

\-

C1

X

X

Released

LN

\-

\-

C1

X

X

Released

LOG

\-

\-

C1

X

X

Released

RATIO\_OF

\-

\-

C1

X

X

Released

ROW\_TOTAL

\-

\-

C1

X

X

Released

SQRT

\-

\-

C1

X

X

Released

DSFI - CDS Scalar Function Implementation Reference   

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

State

Successor

CALENDAR\_OPERATION\_ANA

\-

\-

C1

X

X

Released

CALENDAR\_SHIFT\_ANA

\-

\-

C1

X

X

Released

COLUMN\_TOTAL\_ANA

\-

\-

C1

X

X

Released

CURRENT\_TOTAL\_ANA

\-

\-

C1

X

X

Released

DEVIATION\_RATIO\_ANA

\-

\-

C1

X

X

Released

FISCAL\_CALENDAR\_OPERATION\_ANA

\-

\-

C1

X

X

Released

FISCAL\_CALENDAR\_SHIFT\_ANA

\-

\-

C1

X

X

Released

GRAND\_TOTAL\_ANA

\-

\-

C1

X

X

Released

HRY\_NODE\_SIGN\_VALUE\_ANA

\-

\-

C1

X

X

Released

LN\_ANA

\-

\-

C1

X

X

Released

LOG\_ANA

\-

\-

C1

X

X

Released

RATIO\_OF\_ANA

\-

\-

C1

X

X

Released

ROW\_TOTAL\_ANA

\-

\-

C1

X

X

Released

SQRT\_ANA

\-

\-

C1

X

X

Released

DTEL - Data Element   

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

State

Successor

/AIF/IFNAME

\-

\-

C1

 

X

Released

/AIF/IFVERSION

\-

\-

C1

 

X

Released

/AIF/NS

\-

\-

C1

 

X

Released

/IWBEP/CP\_HIDDEN\_ELEMENT

\-

\-

C1

X

 

Released

/IWBEP/V4\_DELTA\_STATUS

\-

\-

C1

X

 

Released

/IWBEP/V4\_FLOAT

\-

\-

C1

X

 

Released

/IWBEP/V4\_VALUE\_CONTROL

\-

\-

C1

X

 

Released

ABAPVRS

\-

\-

C1

 

X

Released

ABAP\_BOOLEAN

\-

\-

C1

X

X

Released

ABAP\_ENCOD

\-

\-

C1

X

X

Released

ABAP\_MSIZE

\-

\-

C1

X

X

Released

ABAP\_REPL

\-

\-

C1

 

X

Released

ABP\_ACTION\_NAME

\-

\-

C1

X

 

Released

ABP\_ASSOCIATION\_NAME

\-

\-

C1

X

 

Released

ABP\_BEHV\_CID

\-

\-

C1

X

 

Released

ABP\_BEHV\_DRAFT

\-

\-

C1

X

 

Released

ABP\_BEHV\_FEATURE

\-

\-

C1

X

 

Released

ABP\_BEHV\_FLAG

\-

\-

C1

X

X

Released

ABP\_BEHV\_KIND

\-

\-

C1

X

 

Released

ABP\_BEHV\_OP\_MODIFY

\-

\-

C1

X

 

Released

ABP\_BEHV\_OP\_READ

\-

\-

C1

X

 

Released

ABP\_BEHV\_PID

\-

\-

C1

X

 

Released

ABP\_BEHV\_TYPEKIND

\-

\-

C1

X

 

Released

ABP\_CREATION\_DATE

\-

\-

C1

X

 

Released

ABP\_CREATION\_TIME

\-

\-

C1

X

 

Released

ABP\_CREATION\_TSTMPL

\-

\-

C1

X

 

Released

ABP\_CREATION\_USER

\-

\-

C1

X

 

Released

ABP\_CREATION\_UTCL

\-

\-

C1

X

 

Released

ABP\_ELEMENT\_NAME

\-

\-

C1

X

 

Released

ABP\_ENTITY\_NAME

\-

\-

C1

X

 

Released

ABP\_EVENT\_NAME

\-

\-

C1

X

 

Released

ABP\_FIELD\_NAME

\-

\-

C1

X

 

Released

ABP\_LASTCHANGE\_DATE

\-

\-

C1

X

 

Released

ABP\_LASTCHANGE\_TIME

\-

\-

C1

X

 

Released

ABP\_LASTCHANGE\_TSTMPL

\-

\-

C1

X

 

Released

ABP\_LASTCHANGE\_USER

\-

\-

C1

X

 

Released

ABP\_LASTCHANGE\_UTCL

\-

\-

C1

X

 

Released

ABP\_LOCINST\_LASTCHANGE\_DATE

\-

\-

C1

X

 

Released

ABP\_LOCINST\_LASTCHANGE\_TIME

\-

\-

C1

X

 

Released

ABP\_LOCINST\_LASTCHANGE\_TSTMPL

\-

\-

C1

X

 

Released

ABP\_LOCINST\_LASTCHANGE\_USER

\-

\-

C1

X

 

Released

ABP\_LOCINST\_LASTCHANGE\_UTCL

\-

\-

C1

X

 

Released

ABP\_ROOT\_ENTITY\_NAME

\-

\-

C1

X

 

Released

ABP\_TIMEST

\-

\-

C1

 

X

Released

ABWGA\_CURR

\-

\-

C1

X

 

Released

ABWKT\_CURR

\-

\-

C1

X

 

Released

ACO\_PROXY\_MSG\_TYPE

\-

\-

C1

X

 

Released

ACTIV\_AUTH

\-

\-

C1

X

 

Released

AD\_ADDRNUM

\-

\-

C1

X

X

Released

AD\_ADRTYPE

\-

\-

C1

X

X

Released

AD\_COMCTRY

\-

\-

C1

X

X

Released

AD\_COMMLINENOTFORUNSLCTDCNTCT

\-

\-

C1

X

X

Released

AD\_CTRY\_FR

\-

\-

C1

X

X

Released

AD\_EMAILCURDFLT

\-

\-

C1

X

X

Released

AD\_HANDLE

\-

\-

C1

X

X

Released

AD\_LINE\_S

\-

\-

C1

X

X

Released

AD\_NAMEFIR

\-

\-

C1

X

X

Released

AD\_NAMELAS

\-

\-

C1

X

X

Released

AD\_PERSNUM

\-

\-

C1

X

X

Released

AD\_PHNMBRCUROVRLDFLT

\-

\-

C1

X

X

Released

AD\_PHONENUMBERTYPE

\-

\-

C1

X

X

Released

AD\_PSTCD1

\-

\-

C1

X

X

Released

AD\_STRPRIO

\-

\-

C1

X

X

Released

AD\_TELNRLG

\-

\-

C1

X

X

Released

AD\_TITLE

\-

\-

C1

X

 

Released

AD\_TITLETX

\-

\-

C1

X

 

Released

AD\_TLNMBR

\-

\-

C1

X

X

Released

AD\_TLXTNS

\-

\-

C1

X

X

Released

ANZEI

\-

\-

C1

X

X

Released

APPL\_VAR

\-

\-

C1

X

X

Released

ARCH\_DOCID

\-

\-

C1

X

 

Released

BADI\_CONTEXT\_MODE

\-

\-

C1

X

 

Released

BADI\_FILTER\_NAME

\-

\-

C1

X

 

Released

BADI\_NAME

\-

\-

C1

X

 

Released

BALLEVEL

\-

\-

C1

X

 

Released

BALLOGHNDL

\-

\-

C1

X

 

Released

BALMNR

\-

\-

C1

X

 

Released

BALOBJ\_D

\-

\-

C1

X

 

Released

BALOGNR

\-

\-

C1

X

 

Released

BALSUBOBJ

\-

\-

C1

X

 

Released

BAPIAG

\-

\-

C1

X

X

Released

BAPICUREXT

\-

\-

C1

X

X

Released

BAPICUREXT31

\-

\-

C1

X

X

Released

BAPICURR\_D

\-

\-

C1

X

X

Released

BAPILOGSYS

\-

\-

C1

X

X

Released

BAPIMAXROW

\-

\-

C1

X

X

Released

BAPINETWRK

\-

\-

C1

X

X

Released

BAPIOPTION

\-

\-

C1

X

X

Released

BAPIPARA

\-

\-

C1

X

X

Released

BAPIRELSTA

\-

\-

C1

X

X

Released

BAPISIGN

\-

\-

C1

X

X

Released

BAPIUPDATE

\-

\-

C1

X

X

Released

BAPIWAIT

\-

\-

C1

X

X

Released

BAPI\_BACK

\-

\-

C1

X

X

Released

BAPI\_COMP

\-

\-

C1

X

X

Released

BAPI\_CONV

\-

\-

C1

X

X

Released

BAPI\_FLD

\-

\-

C1

X

X

Released

BAPI\_HIGH

\-

\-

C1

X

X

Released

BAPI\_INDEX

\-

\-

C1

X

X

Released

BAPI\_LFRMT

\-

\-

C1

X

X

Released

BAPI\_LINE

\-

\-

C1

X

X

Released

BAPI\_LINESIZE

\-

\-

C1

X

X

Released

BAPI\_LISTR

\-

\-

C1

X

X

Released

BAPI\_LMASK

\-

\-

C1

X

X

Released

BAPI\_LOW

\-

\-

C1

X

X

Released

BAPI\_MSG

\-

\-

C1

X

X

Released

BAPI\_MTYPE

\-

\-

C1

X

X

Released

BAPI\_NCOMT

\-

\-

C1

X

X

Released

BAPI\_PARAM

\-

\-

C1

X

X

Released

BAPI\_RCODE

\-

\-

C1

X

X

Deprecated

BAPI\_SIGN

\-

\-

C1

X

X

Released

BAPI\_STXT

\-

\-

C1

X

X

Released

BAPI\_TABL

\-

\-

C1

X

X

Released

BAPI\_TFRMT

\-

\-

C1

X

X

Released

BAPI\_TLINE

\-

\-

C1

X

X

Released

BDATJ

\-

\-

C1

X

 

Released

BEGRU

\-

\-

C1

X

 

Released

BOOLEAN

\-

\-

C1

X

 

Deprecated

DTEL ABAP\_BOOLEAN

BOOLE\_D

\-

\-

C1

X

 

Deprecated

DTEL ABAP\_BOOLEAN

BUMON

\-

\-

C1

X

 

Released

BUTAG

\-

\-

C1

X

 

Released

CALLTRANS2

\-

\-

C1

X

X

Released

CFD\_CUSTOM\_CURRENCY\_NAME

\-

\-

C1

 

X

Released

CFD\_CUSTOM\_UOM\_LONG\_NAME

\-

\-

C1

 

X

Released

CFD\_DUMMY

\-

\-

C1

 

X

Released

CHAR1

\-

\-

C1

X

 

Deprecated

CHAR10

\-

\-

C1

X

 

Deprecated

CHAR100

\-

\-

C1

X

 

Deprecated

CHAR12

\-

\-

C1

X

 

Deprecated

CHAR120

\-

\-

C1

X

 

Deprecated

CHAR128

\-

\-

C1

X

 

Deprecated

CHAR134

\-

\-

C1

X

 

Deprecated

CHAR14

\-

\-

C1

X

 

Deprecated

CHAR140

\-

\-

C1

X

 

Deprecated

CHAR15

\-

\-

C1

X

 

Deprecated

CHAR16

\-

\-

C1

X

 

Deprecated

CHAR17

\-

\-

C1

X

 

Deprecated

CHAR18

\-

\-

C1

X

 

Deprecated

CHAR2

\-

\-

C1

X

 

Deprecated

CHAR20

\-

\-

C1

X

 

Deprecated

CHAR200

\-

\-

C1

X

 

Deprecated

CHAR22

\-

\-

C1

X

 

Deprecated

CHAR24

\-

\-

C1

X

 

Deprecated

CHAR25

\-

\-

C1

X

 

Deprecated

CHAR251

\-

\-

C1

X

 

Deprecated

CHAR255

\-

\-

C1

X

 

Deprecated

CHAR26

\-

\-

C1

X

 

Deprecated

CHAR260

\-

\-

C1

X

 

Deprecated

CHAR3

\-

\-

C1

X

 

Deprecated

CHAR30

\-

\-

C1

X

 

Deprecated

CHAR32

\-

\-

C1

X

 

Deprecated

CHAR35

\-

\-

C1

X

 

Deprecated

CHAR38

\-

\-

C1

X

 

Deprecated

CHAR4

\-

\-

C1

X

 

Deprecated

CHAR40

\-

\-

C1

X

 

Deprecated

CHAR45

\-

\-

C1

X

 

Deprecated

CHAR5

\-

\-

C1

X

 

Deprecated

CHAR6

\-

\-

C1

X

 

Deprecated

CHAR64

\-

\-

C1

X

 

Deprecated

CHAR70

\-

\-

C1

X

 

Deprecated

CHAR79

\-

\-

C1

X

 

Deprecated

CHAR8

\-

\-

C1

X

 

Deprecated

CHAR80

\-

\-

C1

X

 

Deprecated

CHAR90

\-

\-

C1

X

 

Deprecated

CMIS\_DECIMAL

\-

\-

C1

X

 

Released

CMIS\_ENUM

\-

\-

C1

X

 

Released

CMIS\_ID

\-

\-

C1

X

 

Released

CMIS\_LONG

\-

\-

C1

X

 

Released

CMIS\_REPOSITORY\_ID

\-

\-

C1

X

 

Released

CMIS\_STRING

\-

\-

C1

X

 

Released

CONFIG\_DEPRECATION\_CODE

\-

\-

C1

X

X

Released

CPCODEPAGE

\-

\-

C1

 

X

Released

D16N

\-

\-

C1

X

X

Released

D34N

\-

\-

C1

X

X

Released

DATN

\-

\-

C1

X

X

Released

DATS

\-

\-

C1

X

 

Deprecated

DATUM

\-

\-

C1

X

 

Released

DDOPTION

\-

\-

C1

X

X

Released

DDSIGN

\-

\-

C1

X

X

Released

DD\_CDS\_CALCULATED\_UNIT

\-

\-

C1

X

X

Released

DUMMY

\-

\-

C1

 

X

Released

D\_DELFUNC

\-

\-

C1

X

X

Released

FCURR\_CURR

\-

\-

C1

X

X

Released

FDT\_CALENDAR\_WEEK

\-

\-

C1

X

X

Released

FDT\_DAY\_OF\_MONTH

\-

\-

C1

X

X

Released

FDT\_DAY\_OF\_WEEK

\-

\-

C1

X

X

Released

FDT\_MONTH

\-

\-

C1

X

X

Released

FDT\_QUARTER\_OF\_YEAR

\-

\-

C1

X

X

Released

FDT\_SYBATCH

\-

\-

C1

X

X

Released

FDT\_SYDATUM

\-

\-

C1

X

X

Released

FDT\_SYUZEIT

\-

\-

C1

X

X

Released

FFACT\_CURR

\-

\-

C1

X

 

Released

FIS\_GJAHR

\-

\-

C1

 

X

Released

FIS\_PERIV

\-

\-

C1

X

X

Released

FLAG

\-

\-

C1

X

 

Deprecated

DTEL ABAP\_BOOLEAN

GEOM\_EWKB

\-

\-

C1

X

X

Released

GJAHR

\-

\-

C1

X

X

Released

GUID

\-

\-

C1

X

 

Deprecated

DTEL SYSUUID\_X16

ICON\_D

\-

\-

C1

X

 

Released

ILEN

\-

\-

C1

 

X

Released

INT1

\-

\-

C1

X

X

Released

INT2

\-

\-

C1

X

X

Released

INT4

\-

\-

C1

X

X

Released

INTCA

\-

\-

C1

X

X

Released

IOFF

\-

\-

C1

 

X

Released

ISLM2\_DE\_BAR01

\-

\-

C1

 

X

Released

ISLM2\_DE\_DOUBLE\_PARAM

\-

\-

C1

 

X

Released

ISLM2\_DE\_FIELDNAME

\-

\-

C1

 

X

Released

ISLM2\_DE\_INTEGER\_PARAM

\-

\-

C1

 

X

Released

ISLM2\_DE\_NCLOB\_PARAM

\-

\-

C1

 

X

Released

ISLM2\_DE\_PROBABILITY01

\-

\-

C1

 

X

Released

ISLM2\_DE\_SCORE01

\-

\-

C1

 

X

Released

ISLM3\_DE\_PERCENTILE

\-

\-

C1

 

X

Released

ISLM\_DE\_REASON\_CODE\_QUALITY

\-

\-

C1

 

X

Released

ISOCD

\-

\-

C1

X

 

Released

ISOCD\_UNIT

\-

\-

C1

X

 

Released

KURST\_CURR

\-

\-

C1

X

X

Released

LAISO

\-

\-

C1

X

X

Released

LAND1

\-

\-

C1

X

X

Released

LANGU

\-

\-

C1

X

 

Deprecated

DTEL SPRAS

LOGSYSTEM

\-

\-

C1

X

X

Released

MANDT

\-

\-

C1

X

 

Released

MSEHI

\-

\-

C1

X

 

Released

NUM12

\-

\-

C1

 

X

Released

NUMC2

\-

\-

C1

X

 

Deprecated

NUMC3

\-

\-

C1

X

 

Deprecated

NUMC4

\-

\-

C1

X

 

Deprecated

OUTPUTSTYLE

\-

\-

C1

X

X

Released

PCF\_AMOUNT

\-

\-

C1

X

X

Released

PCF\_BOOLEAN

\-

\-

C1

X

X

Deprecated

DTEL ABAP\_BOOLEAN

PCF\_CURRENCY

\-

\-

C1

X

X

Released

PCF\_DATE

\-

\-

C1

X

X

Released

PCF\_DECIMAL\_NUMBER

\-

\-

C1

X

X

Released

PCF\_NUMBER

\-

\-

C1

X

X

Deprecated

DTEL PCF\_DECIMAL\_NUMBER

PCF\_QUANTITY

\-

\-

C1

X

X

Released

PCF\_TIME

\-

\-

C1

X

X

Released

PCF\_TIMESTAMP

\-

\-

C1

X

X

Released

PCF\_UNIT

\-

\-

C1

X

X

Released

PERIV

\-

\-

C1

X

 

Released

POPER

\-

\-

C1

X

X

Released

PROGNAME

\-

\-

C1

X

X

Released

PRX\_AUTOMATIC\_RETRY

\-

\-

C1

X

 

Released

PRX\_LOGICAL\_PORT\_NAME

\-

\-

C1

X

 

Released

PRX\_NO\_RETRY

\-

\-

C1

X

 

Released

PRX\_WORKFLOW\_TRIGGERED

\-

\-

C1

X

 

Released

R3STATE

\-

\-

C1

 

X

Released

RAP\_CP\_ODATA\_V2\_EDM\_DATETIME

\-

\-

C1

X

 

Released

RAP\_CP\_ODATA\_V2\_EDM\_TIME

\-

\-

C1

X

 

Released

RAP\_CP\_ODATA\_V4\_EDM\_DATE

\-

\-

C1

X

 

Released

RAP\_CP\_ODATA\_V4\_EDM\_DURATION

\-

\-

C1

X

 

Released

RAP\_CP\_ODATA\_V4\_EDM\_TIMEOFDAY

\-

\-

C1

X

 

Released

RAP\_CP\_ODATA\_VALUE\_CONTROL

\-

\-

C1

X

 

Released

REGEX\_STANDARD

\-

\-

C1

X

X

Released

REGIO

\-

\-

C1

X

X

Released

RFCDEST

\-

\-

C1

X

 

Released

RFCSSYSID

\-

\-

C1

X

 

Released

RKZ\_DBNA

\-

\-

C1

X

 

Deprecated

DTEL TABNAME

SAEARCHIVI

\-

\-

C1

 

X

Released

SAEARDOID

\-

\-

C1

 

X

Released

SAEDOKTYP

\-

\-

C1

 

X

Released

SAENOTESH

\-

\-

C1

 

X

Released

SAEOBJART

\-

\-

C1

 

X

Released

SAP\_BOOL

\-

\-

C1

 

X

Released

SARCH\_ARCHIVE\_KEY

\-

\-

C1

X

 

Released

SARCH\_OBJECT

\-

\-

C1

X

 

Released

SARCH\_OFFSET

\-

\-

C1

X

 

Released

SARCH\_SESSION\_NUMBER

\-

\-

C1

X

 

Released

SCBO\_ACTION\_ID

\-

\-

C1

 

X

Released

SCBO\_BUSINESS\_OBJECT\_ID

\-

\-

C1

 

X

Released

SCBO\_NODE\_ID

\-

\-

C1

 

X

Released

SCX\_ATTRNAME

\-

\-

C1

X

X

Released

SCX\_ST\_TSTAMP

\-

\-

C1

X

X

Released

SDRAFT\_CONSISTENCY\_STATUS

\-

\-

C1

X

 

Released

SDRAFT\_UUID

\-

\-

C1

X

 

Released

SPRAS

\-

\-

C1

X

X

Released

SVC\_INSTANCE\_NAME

\-

\-

C1

X

 

Released

SWF\_ALL\_USERS

\-

\-

C1

X

X

Released

SWF\_CPWF\_CONSUMER

\-

\-

C1

X

 

Released

SWF\_CPWF\_HANDLE

\-

\-

C1

X

 

Released

SWF\_PBL\_ID\_FIELD\_1

\-

\-

C1

 

X

Released

SWF\_PBL\_ID\_FIELD\_2

\-

\-

C1

 

X

Released

SWF\_PBL\_ID\_FIELD\_3

\-

\-

C1

 

X

Released

SWF\_PBL\_ID\_FIELD\_4

\-

\-

C1

 

X

Released

SWF\_PBL\_ID\_FIELD\_5

\-

\-

C1

 

X

Released

SWF\_PBL\_ID\_FIELD\_6

\-

\-

C1

 

X

Released

SWF\_PBL\_SAP\_OBJECT\_TYPE

\-

\-

C1

 

X

Released

SXCO\_AD\_FIELD\_NAME

\-

\-

C1

X

 

Released

SXCO\_AD\_OBJECT\_NAME

\-

\-

C1

X

 

Released

SXCO\_AMDP\_DB\_ENTITY

\-

\-

C1

X

 

Released

SXCO\_AO\_COMPONENT\_NAME

\-

\-

C1

X

 

Released

SXCO\_AO\_FULL\_COMPONENT\_NAME

\-

\-

C1

X

 

Released

SXCO\_AO\_OBJECT\_NAME

\-

\-

C1

X

 

Released

SXCO\_AO\_SHORT\_DESCRIPTION

\-

\-

C1

X

 

Released

SXCO\_AO\_SUBCOMPONENT\_NAME

\-

\-

C1

X

 

Released

SXCO\_APLO\_OBJECT\_NAME

\-

\-

C1

X

 

Released

SXCO\_AR\_OBJECT\_NAME

\-

\-

C1

X

 

Released

SXCO\_AR\_OBJECT\_TYPE

\-

\-

C1

X

 

Released

SXCO\_AR\_SHORT\_DESCRIPTION

\-

\-

C1

X

 

Released

SXCO\_BAL\_LOG\_HANDLE

\-

\-

C1

X

 

Released

SXCO\_BCO\_NAME

\-

\-

C1

X

 

Released

SXCO\_BDEF\_ACTION\_NAME

\-

\-

C1

X

 

Released

SXCO\_BDEF\_ALIAS\_NAME

\-

\-

C1

X

 

Released

SXCO\_BDEF\_EVALUATION\_NAME

\-

\-

C1

X

 

Released

SXCO\_BDEF\_EVENT\_NAME

\-

\-

C1

X

 

Released

SXCO\_BDEF\_FUNCTION\_NAME

\-

\-

C1

X

 

Released

SXCO\_BDEF\_GROUP\_NAME

\-

\-

C1

X

 

Released

SXCO\_CDS\_ANN\_PROPERTY

\-

\-

C1

X

 

Released

SXCO\_CDS\_ASSOCIATION\_NAME

\-

\-

C1

X

 

Released

SXCO\_CDS\_FIELD\_NAME

\-

\-

C1

X

 

Released

SXCO\_CDS\_OBJECT\_NAME

\-

\-

C1

X

 

Released

SXCO\_CDS\_PARAMETER\_NAME

\-

\-

C1

X

 

Released

SXCO\_CLAS\_METHOD\_NAME

\-

\-

C1

X

 

Released

SXCO\_CTS\_OBJECT\_NAME

\-

\-

C1

X

 

Released

SXCO\_CTS\_OBJECT\_TYPE

\-

\-

C1

X

 

Released

SXCO\_DBT\_OBJECT\_NAME

\-

\-

C1

X

 

Released

SXCO\_DDEF\_ALIAS\_NAME

\-

\-

C1

X

 

Released

SXCO\_FG\_OBJECT\_NAME

\-

\-

C1

X

 

Released

SXCO\_FM\_EXCEPTION\_NAME

\-

\-

C1

X

 

Released

SXCO\_FM\_NAME

\-

\-

C1

X

 

Released

SXCO\_FM\_PARAMETER\_NAME

\-

\-

C1

X

 

Released

SXCO\_GTT\_OBJECT\_NAME

\-

\-

C1

X

 

Released

SXCO\_I18N\_TEXT\_ATTRIBUTE

\-

\-

C1

X

 

Released

SXCO\_MC\_OBJECT\_NAME

\-

\-

C1

X

 

Released

SXCO\_PACKAGE

\-

\-

C1

X

 

Released

SXCO\_SRVB\_OBJECT\_NAME

\-

\-

C1

X

 

Released

SXCO\_SRVB\_SERVICE\_NAME

\-

\-

C1

X

 

Released

SXCO\_SRVB\_SERVICE\_VERSION

\-

\-

C1

X

 

Released

SXCO\_SRVD\_OBJECT\_NAME

\-

\-

C1

X

 

Released

SXCO\_TF\_OBJECT\_NAME

\-

\-

C1

X

 

Released

SXCO\_TRANSPORT

\-

\-

C1

X

 

Released

SXCO\_USER\_NAME

\-

\-

C1

X

 

Released

SYABCDE

\-

\-

C1

 

X

Released

SYAPPLI

\-

\-

C1

 

X

Released

SYBATCH

\-

\-

C1

 

X

Released

SYBATZD

\-

\-

C1

 

X

Released

SYBATZM

\-

\-

C1

 

X

Released

SYBATZO

\-

\-

C1

 

X

Released

SYBATZS

\-

\-

C1

 

X

Released

SYBATZW

\-

\-

C1

 

X

Released

SYBIN1

\-

\-

C1

 

X

Released

SYBINPT

\-

\-

C1

 

X

Released

SYBREP4

\-

\-

C1

 

X

Released

SYBSPLD

\-

\-

C1

 

X

Released

SYCALLD

\-

\-

C1

 

X

Released

SYCALLR

\-

\-

C1

 

X

Released

SYCCURS

\-

\-

C1

 

X

Released

SYCCURT

\-

\-

C1

 

X

Released

SYCDATE

\-

\-

C1

 

X

Released

SYCFWAE

\-

\-

C1

 

X

Released

SYCHAR01

\-

\-

C1

X

X

Released

SYCHAR02

\-

\-

C1

 

X

Released

SYCHAR12K

\-

\-

C1

 

X

Released

SYCHAR30

\-

\-

C1

 

X

Released

SYCHWAE

\-

\-

C1

 

X

Released

SYCOLNO

\-

\-

C1

 

X

Released

SYCPAGE

\-

\-

C1

 

X

Released

SYCPROG

\-

\-

C1

 

X

Released

SYCTABL

\-

\-

C1

 

X

Released

SYCTYPE

\-

\-

C1

 

X

Released

SYCUCOL

\-

\-

C1

 

X

Released

SYCUROW

\-

\-

C1

 

X

Released

SYCURR

\-

\-

C1

X

X

Released

SYDATAR

\-

\-

C1

 

X

Released

SYDATE

\-

\-

C1

X

X

Released

SYDATUM

\-

\-

C1

 

X

Released

SYDAYST

\-

\-

C1

 

X

Released

SYDBCNT

\-

\-

C1

 

X

Released

SYDBNAM

\-

\-

C1

 

X

Released

SYDBSYS

\-

\-

C1

 

X

Released

SYDCSYS

\-

\-

C1

 

X

Released

SYDEBUG

\-

\-

C1

 

X

Released

SYDSNAM

\-

\-

C1

 

X

Released

SYDYNGR

\-

\-

C1

 

X

Released

SYDYNNR

\-

\-

C1

 

X

Released

SYENTRY

\-

\-

C1

 

X

Released

SYFDAYW

\-

\-

C1

 

X

Released

SYFDPOS

\-

\-

C1

 

X

Released

SYFFILE

\-

\-

C1

 

X

Released

SYFLENG

\-

\-

C1

 

X

Released

SYFMKEY

\-

\-

C1

 

X

Released

SYFODEC

\-

\-

C1

 

X

Released

SYFOLEN

\-

\-

C1

 

X

Released

SYFTYPE

\-

\-

C1

 

X

Released

SYGROUP

\-

\-

C1

 

X

Released

SYHEX02

\-

\-

C1

 

X

Released

SYHOST

\-

\-

C1

 

X

Released

SYINDEX

\-

\-

C1

 

X

Released

SYINPUT

\-

\-

C1

 

X

Released

SYLANGU

\-

\-

C1

X

X

Released

SYLDBPG

\-

\-

C1

 

X

Released

SYLILLI

\-

\-

C1

 

X

Released

SYLINCT

\-

\-

C1

 

X

Released

SYLINNO

\-

\-

C1

 

X

Released

SYLINSZ

\-

\-

C1

 

X

Released

SYLISEL

\-

\-

C1

 

X

Released

SYLISTI

\-

\-

C1

 

X

Released

SYLOOPC

\-

\-

C1

 

X

Released

SYLPASS

\-

\-

C1

 

X

Released

SYLSIND

\-

\-

C1

 

X

Released

SYLSTAT

\-

\-

C1

 

X

Released

SYMACDB

\-

\-

C1

 

X

Released

SYMACOL

\-

\-

C1

 

X

Released

SYMANDT

\-

\-

C1

 

X

Released

SYMARKY

\-

\-

C1

 

X

Released

SYMAROW

\-

\-

C1

 

X

Released

SYMODNO

\-

\-

C1

 

X

Released

SYMSGID

\-

\-

C1

X

X

Released

SYMSGLI

\-

\-

C1

 

X

Released

SYMSGNO

\-

\-

C1

X

X

Released

SYMSGTY

\-

\-

C1

X

X

Released

SYMSGV

\-

\-

C1

X

X

Released

SYNEWPA

\-

\-

C1

 

X

Released

SYNRPAG

\-

\-

C1

 

X

Released

SYONCOM

\-

\-

C1

 

X

Released

SYOPSYS

\-

\-

C1

 

X

Released

SYPAART

\-

\-

C1

 

X

Released

SYPAGCT

\-

\-

C1

 

X

Released

SYPAGNO

\-

\-

C1

 

X

Released

SYPAUTH

\-

\-

C1

 

X

Released

SYPDEST

\-

\-

C1

 

X

Released

SYPEXPI

\-

\-

C1

 

X

Released

SYPFKEY

\-

\-

C1

 

X

Released

SYPLAYO

\-

\-

C1

 

X

Released

SYPLAYP

\-

\-

C1

 

X

Released

SYPLIST

\-

\-

C1

 

X

Released

SYPNWPA

\-

\-

C1

 

X

Released

SYPRABT

\-

\-

C1

 

X

Released

SYPRBIG

\-

\-

C1

 

X

Released

SYPRCOP

\-

\-

C1

 

X

Released

SYPRDSN

\-

\-

C1

 

X

Released

SYPREFX

\-

\-

C1

 

X

Released

SYPRI40

\-

\-

C1

 

X

Released

SYPRIMM

\-

\-

C1

 

X

Released

SYPRINI

\-

\-

C1

 

X

Released

SYPRLOG

\-

\-

C1

 

X

Released

SYPRNEW

\-

\-

C1

 

X

Released

SYPRREC

\-

\-

C1

 

X

Released

SYPRREL

\-

\-

C1

 

X

Released

SYPRTXT

\-

\-

C1

 

X

Released

SYREPI2

\-

\-

C1

 

X

Released

SYREPID

\-

\-

C1

X

X

Released

SYRSTRT

\-

\-

C1

 

X

Released

SYRTITL

\-

\-

C1

 

X

Released

SYSCOLS

\-

\-

C1

 

X

Released

SYSFNAM

\-

\-

C1

 

X

Released

SYSFOFF

\-

\-

C1

 

X

Released

SYSLSET

\-

\-

C1

 

X

Released

SYSPONO

\-

\-

C1

 

X

Released

SYSPONR

\-

\-

C1

 

X

Released

SYSROWS

\-

\-

C1

 

X

Released

SYSTACO

\-

\-

C1

 

X

Released

SYSTARO

\-

\-

C1

 

X

Released

SYSTDATLO

\-

\-

C1

 

X

Released

SYSTEPL

\-

\-

C1

 

X

Released

SYSTLOCDB

\-

\-

C1

 

X

Released

SYSTLOCOP

\-

\-

C1

 

X

Released

SYSTTIMLO

\-

\-

C1

 

X

Released

SYSTZONLO

\-

\-

C1

X

X

Released

SYST\_LANGU

\-

\-

C1

 

X

Released

SYSUBCS

\-

\-

C1

 

X

Released

SYSUBRC

\-

\-

C1

X

X

Released

SYSUBTY

\-

\-

C1

 

X

Released

SYSUUID\_C22

\-

\-

C1

X

X

Released

SYSUUID\_C26

\-

\-

C1

X

X

Released

SYSUUID\_C32

\-

\-

C1

X

X

Released

SYSUUID\_C36

\-

\-

C1

X

X

Released

SYSUUID\_X16

\-

\-

C1

X

X

Released

SYSYSID

\-

\-

C1

X

X

Released

SYTABID

\-

\-

C1

 

X

Released

SYTABIX

\-

\-

C1

 

X

Released

SYTCODE

\-

\-

C1

 

X

Released

SYTFDSN

\-

\-

C1

 

X

Released

SYTFILL

\-

\-

C1

 

X

Released

SYTITLE

\-

\-

C1

 

X

Released

SYTLENG

\-

\-

C1

 

X

Released

SYTLOPC

\-

\-

C1

 

X

Released

SYTMAXL

\-

\-

C1

 

X

Released

SYTNAME

\-

\-

C1

 

X

Released

SYTOCCU

\-

\-

C1

 

X

Released

SYTPAGI

\-

\-

C1

 

X

Released

SYTSTIS

\-

\-

C1

 

X

Released

SYTTABC

\-

\-

C1

 

X

Released

SYTTABI

\-

\-

C1

 

X

Released

SYTVAR

\-

\-

C1

 

X

Released

SYTZONE

\-

\-

C1

 

X

Released

SYUCOMM

\-

\-

C1

 

X

Released

SYULINE

\-

\-

C1

 

X

Released

SYUNAME

\-

\-

C1

X

X

Released

SYUZEIT

\-

\-

C1

X

X

Released

SYVLINE

\-

\-

C1

 

X

Released

SYWAERS

\-

\-

C1

 

X

Released

SYWILLI

\-

\-

C1

 

X

Released

SYWINCO

\-

\-

C1

 

X

Released

SYWINDI

\-

\-

C1

 

X

Released

SYWINRO

\-

\-

C1

 

X

Released

SYWINSL

\-

\-

C1

 

X

Released

SYWINX1

\-

\-

C1

 

X

Released

SYWINX2

\-

\-

C1

 

X

Released

SYWINY1

\-

\-

C1

 

X

Released

SYWINY2

\-

\-

C1

 

X

Released

SYWTITL

\-

\-

C1

 

X

Released

SYXCODE

\-

\-

C1

 

X

Released

SYXFORM

\-

\-

C1

 

X

Released

SYXPROG

\-

\-

C1

 

X

Released

TABNAME

\-

\-

C1

X

 

Released

TCODE

\-

\-

C1

X

X

Released

TCURR\_CURR

\-

\-

C1

X

X

Released

TEXT12

\-

\-

C1

X

 

Deprecated

TEXT128

\-

\-

C1

X

 

Deprecated

TEXT132

\-

\-

C1

X

 

Deprecated

TEXT15

\-

\-

C1

X

 

Deprecated

TEXT180

\-

\-

C1

X

 

Deprecated

TEXT20

\-

\-

C1

X

 

Deprecated

TEXT200

\-

\-

C1

X

 

Deprecated

TEXT240

\-

\-

C1

X

 

Deprecated

TEXT25

\-

\-

C1

X

 

Deprecated

TEXT255

\-

\-

C1

X

 

Deprecated

TEXT256

\-

\-

C1

X

 

Deprecated

TEXT30

\-

\-

C1

X

 

Deprecated

TEXT35

\-

\-

C1

X

 

Deprecated

TEXT40

\-

\-

C1

X

 

Deprecated

TEXT50

\-

\-

C1

X

 

Deprecated

TEXT6

\-

\-

C1

X

 

Deprecated

TEXT60

\-

\-

C1

X

 

Deprecated

TEXT70

\-

\-

C1

X

 

Deprecated

TEXT8

\-

\-

C1

X

 

Deprecated

TEXT80

\-

\-

C1

X

 

Deprecated

TEXT9

\-

\-

C1

X

 

Deprecated

TEXT90

\-

\-

C1

X

 

Deprecated

TE\_STRUC

\-

\-

C1

X

 

Released

TFACT\_CURR

\-

\-

C1

X

 

Released

TIMESTAMP

\-

\-

C1

X

X

Released

TIMESTAMPL

\-

\-

C1

X

X

Released

TIMEZONE

\-

\-

C1

X

X

Released

TIMN

\-

\-

C1

X

X

Released

TVARV\_NUMB

\-

\-

C1

X

 

Released

TVARV\_OPTI

\-

\-

C1

X

 

Released

TVARV\_SIGN

\-

\-

C1

X

 

Released

TVARV\_VAL

\-

\-

C1

X

 

Released

TZNTSTMPL

\-

\-

C1

X

X

Released

TZNTSTMPS

\-

\-

C1

X

X

Released

TZNZONE

\-

\-

C1

X

X

Released

UCCHECK

\-

\-

C1

 

X

Released

UKURS\_CURR

\-

\-

C1

X

 

Released

UNAME

\-

\-

C1

X

 

Deprecated

DTEL SYUNAME

USNAM

\-

\-

C1

X

X

Released

UTCL

\-

\-

C1

X

X

Released

UTF8STR\_FL

\-

\-

C1

 

X

Released

UTF8STR\_N

\-

\-

C1

 

X

Released

UTF8STR\_X

\-

\-

C1

 

X

Released

UZEIT

\-

\-

C1

X

 

Released

VALUEPART

\-

\-

C1

X

 

Released

VDM\_CREATEDBYUSERDESCRIPTION

\-

\-

C1

X

X

Released

VDM\_CREATEDBYUSERID

\-

\-

C1

X

X

Released

VDM\_LASTCHANGEDBYUSERDESCRIPTI

\-

\-

C1

X

X

Released

VDM\_LASTCHANGEDBYUSERID

\-

\-

C1

X

X

Released

WAERS\_CURC

\-

\-

C1

X

 

Released

WF\_RESULT

\-

\-

C1

X

X

Released

XFELD

\-

\-

C1

X

 

Deprecated

DTEL ABAP\_BOOLEAN

XSDANY

\-

\-

C1

X

 

Released

XSDBOOLEAN

\-

\-

C1

X

X

Released

XSDCURRCODE

\-

\-

C1

X

 

Released

XSDDATETIME\_ISO

\-

\-

C1

X

 

Released

XSDDATETIME\_LOCAL

\-

\-

C1

X

 

Released

XSDDATETIME\_LOCAL\_DT

\-

\-

C1

X

 

Released

XSDDATETIME\_LONG\_Z

\-

\-

C1

X

 

Released

XSDDATETIME\_OFFSET

\-

\-

C1

X

 

Released

XSDDATETIME\_Z

\-

\-

C1

X

 

Released

XSDDATE\_D

\-

\-

C1

X

 

Released

XSDDATE\_ISO

\-

\-

C1

X

 

Released

XSDDURATION\_ISO

\-

\-

C1

X

 

Released

XSDLANGUAGE

\-

\-

C1

X

 

Released

XSDQNAME

\-

\-

C1

X

 

Released

XSDTIME\_ISO

\-

\-

C1

X

 

Released

XSDTIME\_T

\-

\-

C1

X

 

Released

XSDUNITCODE

\-

\-

C1

X

 

Released

XSDUUID\_BASE32

\-

\-

C1

X

 

Released

XSDUUID\_BASE64

\-

\-

C1

X

 

Released

XSDUUID\_CHAR

\-

\-

C1

X

 

Released

XSDUUID\_RAW

\-

\-

C1

X

 

Released

ENHS - Enhancement Spot   

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

State

Successor

/AIF/CHANGEABLE\_FIELDS

BADI\_DEF

/AIF/CHANGEABLE\_FIELDS

C1

 

X

Released

CFD\_DPP

BADI\_DEF

CFD\_DPP\_VALUE\_MAPPING

C1

 

X

Released

RSM\_ES\_RESPONSIBILITY\_RULE

BADI\_DEF

RSM\_BADI\_RESPONSIBILITY\_RULE

C1

 

X

Released

SLIN\_SEC\_BADIS

BADI\_DEF

SLIN\_BADI\_DBTAB\_ACCESS

C1

X

 

Released

SLIN\_SEC\_BADIS

BADI\_DEF

SLIN\_BADI\_SEC\_BACKDOOR

C1

X

 

Released

SLIN\_SEC\_BADIS

BADI\_DEF

SLIN\_BADI\_SEC\_PROCEDURES

C1

X

 

Released

SLIN\_SEC\_BADIS

BADI\_DEF

SLIN\_BADI\_TRUSTED\_SOURCES

C1

X

 

Released

SLIN\_SEC\_BADIS

BADI\_DEF

SLIN\_BADI\_VULN\_PROCEDURES

C1

X

 

Released

SWF\_PROCESS\_WORKFLOW\_CONDITION

BADI\_DEF

SWF\_WORKFLOW\_CONDITION\_DEF

C1

X

X

Released

SWF\_PROCESS\_WORKFLOW\_CONDITION

BADI\_DEF

SWF\_WORKFLOW\_CONDITION\_EVAL

C1

X

X

Released

SWF\_WI\_FORWARD\_AGENTS\_GET

BADI\_DEF

SWF\_FORWARD\_AGENTS\_GET\_CUSTOM

C1

X

X

Released

FDT0 - FDT/BRFplus: System Application   

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

State

Successor

FDT\_SYSTEM

\-

\-

C1

X

X

Released

FUGR - Function Group   

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

State

Successor

BACV

FUNC

BAPI\_CONVERSION\_EXT2INT1

C1

X

 

Released

BACV

FUNC

BAPI\_CONVERSION\_INT2EXT

C1

X

 

Released

BACV

FUNC

BAPI\_CONVERSION\_EXT2INT

C1

X

 

Released

BACV

FUNC

BAPI\_CONVERSION\_INT2EXT1

C1

X

 

Released

BAPT

FUNC

BUFFER\_REFRESH\_ALL

C1

X

 

Released

BAPT

FUNC

BAPI\_TRANSACTION\_ROLLBACK

C1

X

 

Released

BAPT

FUNC

TRANSACTION\_STATUS

C1

X

 

Released

BAPT

FUNC

TRANSACTION\_END

C1

X

 

Released

BAPT

FUNC

TRANSACTION\_ABORT

C1

X

 

Released

BAPT

FUNC

TRANSACTION\_BEGIN

C1

X

 

Released

BAPT

FUNC

BAPI\_TRANSACTION\_COMMIT

C1

X

 

Released

BAPT

FUNC

BUFFER\_SUBSCRIBE\_FOR\_REFRESH

C1

X

 

Released

BASR

FUNC

BAPI\_MONITOR\_CHECKDOCU

C1

X

 

Released

BATG

FUNC

BAPI\_INTERFACE\_GETDOCU

C1

X

 

Released

BATG

FUNC

BAPI\_MESSAGE\_GETDETAIL

C1

X

 

Released

BATG

FUNC

BALW\_CONVERT\_DOCU\_LINKS

C1

X

 

Released

BATG

FUNC

BAPI\_APPLICATIONLOG\_GETDETAIL

C1

X

 

Released

BATG

FUNC

BAPI\_HYPERLINK\_GETTEXT

C1

X

 

Released

BATG

FUNC

BAPI\_FIELDHELP\_GETDOCU

C1

X

 

Released

BFHV

FUNC

BAPI\_HELPVALUES\_GET\_SEARCHHELP

C1

X

 

Released

BFHV

FUNC

BAPI\_HELPVALUES\_GET

C1

X

 

Released

BFHV

FUNC

BF\_BAPI\_F4\_AUTHORITY

C1

X

 

Released

BFRT

FUNC

BALW\_RANGES\_CHECK

C1

X

 

Released

BFRT

FUNC

BALW\_RET1\_TO\_RET2

C1

X

 

Released

BFRT

FUNC

BALW\_BAPIRETURN\_GET2

C1

X

 

Released

BFRT

FUNC

BALW\_BAPIRETURN\_GET1

C1

X

 

Released

BFRT

FUNC

BALW\_RETURN\_TO\_RET2

C1

X

 

Released

BFRT

FUNC

BALW\_BAPIRETURN\_GET

C1

X

 

Released

G4BA - SAP Gateway OData V4 Backend Service Group & Assignments   

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

State

Successor

API\_CBC\_STA\_O4

G4S

SRVD\_A2X API\_CBC\_STA 0001

C2

 

Released

API\_CDR\_FILE\_PREPARE

G4S

SRVD\_A2X API\_CDR\_FILE\_PREPARE 0001

C2

 

Released

RSAU\_LOG\_API

G4S

SRVD\_A2X RSAU\_LOG\_API 0001

C2

 

Released

SATC\_CI\_CF\_API

G4S

SRVD\_A2X SATC\_CI\_CF\_SV\_API 0001

C2

 

Released

INTF - Interface (ABAP Objects)   

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

State

Successor

/AIF/IF\_CHANGEABLE\_FIELDS

\-

\-

C1

 

X

Released

/IWBEP/IF\_CP\_CLIENT\_PROXY

\-

\-

C1

X

 

Released

/IWBEP/IF\_CP\_DATA\_DESC\_NODE

\-

\-

C1

X

 

Released

/IWBEP/IF\_CP\_DATA\_DESC\_NODE\_L

\-

\-

C1

X

 

Released

/IWBEP/IF\_CP\_EXPAND\_NODE

\-

\-

C1

X

 

Released

/IWBEP/IF\_CP\_FILTER\_FACTORY

\-

\-

C1

X

 

Released

/IWBEP/IF\_CP\_FILTER\_NODE

\-

\-

C1

X

 

Released

/IWBEP/IF\_CP\_REQUEST\_ACTION

\-

\-

C1

X

 

Released

/IWBEP/IF\_CP\_REQUEST\_BATCH

\-

\-

C1

X

 

Released

/IWBEP/IF\_CP\_REQUEST\_BATCH\_OP

\-

\-

C1

X

 

Released

/IWBEP/IF\_CP\_REQUEST\_CHANGESET

\-

\-

C1

X

 

Released

/IWBEP/IF\_CP\_REQUEST\_CREATE

\-

\-

C1

X

 

Released

/IWBEP/IF\_CP\_REQUEST\_DELETE

\-

\-

C1

X

 

Released

/IWBEP/IF\_CP\_REQUEST\_FUNCTION

\-

\-

C1

X

 

Released

/IWBEP/IF\_CP\_REQUEST\_READ

\-

\-

C1

X

 

Released

/IWBEP/IF\_CP\_REQUEST\_READ\_01

\-

\-

C1

X

 

Released

/IWBEP/IF\_CP\_REQUEST\_READ\_DLTA

\-

\-

C1

X

 

Released

/IWBEP/IF\_CP\_REQUEST\_READ\_LIST

\-

\-

C1

X

 

Released

/IWBEP/IF\_CP\_REQUEST\_UPDATE

\-

\-

C1

X

 

Released

/IWBEP/IF\_CP\_REQUEST\_UPDATE\_L

\-

\-

C1

X

 

Released

/IWBEP/IF\_CP\_RESOURCE\_ACTION

\-

\-

C1

X

 

Released

/IWBEP/IF\_CP\_RESOURCE\_ENTITY

\-

\-

C1

X

 

Released

/IWBEP/IF\_CP\_RESOURCE\_ENTITY01

\-

\-

C1

X

 

Released

/IWBEP/IF\_CP\_RESOURCE\_FUNCTION

\-

\-

C1

X

 

Released

/IWBEP/IF\_CP\_RESOURCE\_LIST

\-

\-

C1

X

 

Released

/IWBEP/IF\_CP\_RESPONSE\_ACTION

\-

\-

C1

X

 

Released

/IWBEP/IF\_CP\_RESPONSE\_CREATE

\-

\-

C1

X

 

Released

/IWBEP/IF\_CP\_RESPONSE\_FUNCTION

\-

\-

C1

X

 

Released

/IWBEP/IF\_CP\_RESPONSE\_READ

\-

\-

C1

X

 

Released

/IWBEP/IF\_CP\_RESPONSE\_READ\_01

\-

\-

C1

X

 

Released

/IWBEP/IF\_CP\_RESPONSE\_READ\_LST

\-

\-

C1

X

 

Released

/IWBEP/IF\_CP\_RESPONSE\_UPDATE

\-

\-

C1

X

 

Released

/IWBEP/IF\_CP\_RESPONSE\_UPDATE\_L

\-

\-

C1

X

 

Released

/IWBEP/IF\_CP\_RUNTIME\_TYPES

\-

\-

C1

X

 

Released

/IWBEP/IF\_CP\_SEARCH\_NODE

\-

\-

C1

X

 

Released

/IWBEP/IF\_V4\_MP\_ADVANCED\_PM

\-

\-

C1

X

 

Released

/IWBEP/IF\_V4\_MP\_BASIC\_PM

\-

\-

C1

X

 

Released

/IWBEP/IF\_V4\_PM\_ACTION

\-

\-

C1

X

 

Released

/IWBEP/IF\_V4\_PM\_ACTION\_IMP

\-

\-

C1

X

 

Released

/IWBEP/IF\_V4\_PM\_ACT\_PARAM

\-

\-

C1

X

 

Released

/IWBEP/IF\_V4\_PM\_ACT\_RETURN

\-

\-

C1

X

 

Released

/IWBEP/IF\_V4\_PM\_CPLX\_PROP

\-

\-

C1

X

 

Released

/IWBEP/IF\_V4\_PM\_CPLX\_TYPE

\-

\-

C1

X

 

Released

/IWBEP/IF\_V4\_PM\_CT\_ADVANCED

\-

\-

C1

X

 

Released

/IWBEP/IF\_V4\_PM\_ENTITY\_SET

\-

\-

C1

X

 

Released

/IWBEP/IF\_V4\_PM\_ENTITY\_TYPE

\-

\-

C1

X

 

Released

/IWBEP/IF\_V4\_PM\_ET\_ADVANCED

\-

\-

C1

X

 

Released

/IWBEP/IF\_V4\_PM\_FUNCTION

\-

\-

C1

X

 

Released

/IWBEP/IF\_V4\_PM\_FUNC\_IMP

\-

\-

C1

X

 

Released

/IWBEP/IF\_V4\_PM\_FUNC\_PARAM

\-

\-

C1

X

 

Released

/IWBEP/IF\_V4\_PM\_FUNC\_RETURN

\-

\-

C1

X

 

Released

/IWBEP/IF\_V4\_PM\_MDL\_ADVANCED

\-

\-

C1

X

 

Released

/IWBEP/IF\_V4\_PM\_MODEL

\-

\-

C1

X

 

Released

/IWBEP/IF\_V4\_PM\_MODEL\_INFO

\-

\-

C1

X

 

Released

/IWBEP/IF\_V4\_PM\_NAV\_PROP

\-

\-

C1

X

 

Released

/IWBEP/IF\_V4\_PM\_PRIM\_PROP

\-

\-

C1

X

 

Released

/IWBEP/IF\_V4\_PM\_PRIM\_TYPE

\-

\-

C1

X

 

Released

/IWBEP/IF\_V4\_PM\_TYPES

\-

\-

C1

X

 

Released

/IWXBE/IF\_CONSUMER

\-

\-

C1

X

 

Released

/IWXBE/IF\_CONSUMER\_EVENT

\-

\-

C1

X

 

Released

/IWXBE/IF\_CONSUMER\_TOPIC

\-

\-

C1

X

 

Released

/IWXBE/IF\_DESCRIPTION\_TYPES

\-

\-

C1

X

 

Released

IF\_A4C\_CP\_SERVICE

\-

\-

C1

X

 

Released

IF\_ABAP\_API\_STATE

\-

\-

C1

X

 

Released

IF\_ABAP\_BEHAVIOR\_TESTDOUBLE

\-

\-

C1

X

 

Released

IF\_ABAP\_BEHV

\-

\-

C1

X

X

Released

IF\_ABAP\_BEHV\_MESSAGE

\-

\-

C1

X

X

Released

IF\_ABAP\_BEHV\_TEST\_ENVIRONMENT

\-

\-

C1

X

 

Released

IF\_ABAP\_CLOSE\_RESOURCE

\-

\-

C1

X

 

Released

IF\_ABAP\_CODEPAGE

\-

\-

C1

 

X

Released

IF\_ABAP\_CONV\_IN

\-

\-

C1

X

X

Released

IF\_ABAP\_CONV\_OUT

\-

\-

C1

X

X

Released

IF\_ABAP\_C\_READER

\-

\-

C1

X

 

Released

IF\_ABAP\_C\_WRITER

\-

\-

C1

X

 

Released

IF\_ABAP\_DATA\_TYPE\_HANDLE

\-

\-

C1

X

 

Released

IF\_ABAP\_DB\_BLOB\_HANDLE

\-

\-

C1

X

 

Released

IF\_ABAP\_DB\_CLOB\_HANDLE

\-

\-

C1

X

 

Released

IF\_ABAP\_DB\_LOB\_HANDLE

\-

\-

C1

X

 

Released

IF\_ABAP\_DB\_READER

\-

\-

C1

X

 

Released

IF\_ABAP\_DB\_WRITER

\-

\-

C1

X

 

Released

IF\_ABAP\_GZIP\_BINARY\_HANDLER

\-

\-

C1

X

X

Released

IF\_ABAP\_GZIP\_TEXT\_HANDLER

\-

\-

C1

X

X

Released

IF\_ABAP\_LOCK\_OBJECT

\-

\-

C1

X

 

Released

IF\_ABAP\_MATCHER\_CALLOUT

\-

\-

C1

X

X

Released

IF\_ABAP\_PARALLEL

\-

\-

C1

X

 

Released

IF\_ABAP\_READER

\-

\-

C1

X

 

Released

IF\_ABAP\_RUNTIME

\-

\-

C1

 

X

Released

IF\_ABAP\_RUNTIME\_MEASUREMENT

\-

\-

C1

 

X

Released

IF\_ABAP\_RUNTIME\_RESULT

\-

\-

C1

 

X

Released

IF\_ABAP\_RUNTIME\_RESULT\_METRIC

\-

\-

C1

 

X

Released

IF\_ABAP\_RUNTIME\_SAMPLE

\-

\-

C1

 

X

Released

IF\_ABAP\_RUNTIME\_TEST

\-

\-

C1

 

X

Released

IF\_ABAP\_RUNTIME\_TEST\_RESULT

\-

\-

C1

 

X

Released

IF\_ABAP\_RUNTIME\_TEST\_RUNNER

\-

\-

C1

 

X

Released

IF\_ABAP\_TESTDOUBLE\_ANSWER

\-

\-

C1

X

 

Released

IF\_ABAP\_TESTDOUBLE\_ARGUMENTS

\-

\-

C1

X

 

Released

IF\_ABAP\_TESTDOUBLE\_CONFIG

\-

\-

C1

X

 

Released

IF\_ABAP\_TESTDOUBLE\_HANDLE

\-

\-

C1

X

 

Released

IF\_ABAP\_TESTDOUBLE\_MATCHER

\-

\-

C1

X

 

Released

IF\_ABAP\_TESTDOUBLE\_RESULT

\-

\-

C1

X

 

Released

IF\_ABAP\_TESTDOUBLE\_VERIFY

\-

\-

C1

X

 

Released

IF\_ABAP\_TIMESTAMP\_UTIL

\-

\-

C1

 

X

Released

IF\_ABAP\_UNGZIP\_BINARY\_HANDLER

\-

\-

C1

X

X

Released

IF\_ABAP\_UNGZIP\_TEXT\_HANDLER

\-

\-

C1

X

X

Released

IF\_ABAP\_UNIT\_CONSTANT

\-

\-

C1

X

X

Released

IF\_ABAP\_WRITER

\-

\-

C1

X

 

Released

IF\_ABAP\_X\_READER

\-

\-

C1

X

 

Released

IF\_ABAP\_X\_WRITER

\-

\-

C1

X

 

Released

IF\_ACO\_PROXY

\-

\-

C1

X

 

Released

IF\_AI\_APPLICATION\_FAULT

\-

\-

C1

X

 

Released

IF\_AMDP\_MARKER\_HDB

\-

\-

C1

X

 

Released

IF\_APJ\_DT\_EXEC\_OBJECT

\-

\-

C1

X

 

Released

IF\_APJ\_JT\_CHECK

\-

\-

C1

X

 

Deprecated

INTF IF\_APJ\_JT\_CHECK\_20

IF\_APJ\_JT\_CHECK\_20

\-

\-

C1

X

 

Released

IF\_APJ\_RT\_EXEC\_OBJECT

\-

\-

C1

X

 

Released

IF\_APJ\_RT\_JOB\_NOTIF\_EXIT

\-

\-

C1

X

 

Released

IF\_APJ\_RT\_VALUE\_HELP\_EXIT

\-

\-

C1

X

 

Released

IF\_APJ\_TYPES

\-

\-

C1

X

 

Released

IF\_ARCH\_API\_TYPES

\-

\-

C1

X

 

Released

IF\_ARCH\_DELETE

\-

\-

C1

X

 

Released

IF\_ARCH\_DELETE\_API

\-

\-

C1

X

 

Released

IF\_ARCH\_READ\_API

\-

\-

C1

X

 

Released

IF\_ARCH\_RELOAD

\-

\-

C1

X

 

Released

IF\_ARCH\_RELOAD\_API

\-

\-

C1

X

 

Released

IF\_ARCH\_STORAGE\_MANAGER

\-

\-

C1

X

 

Released

IF\_ARCH\_WRITE

\-

\-

C1

X

 

Released

IF\_ARCH\_WRITE\_API

\-

\-

C1

X

 

Released

IF\_AUNIT\_AUTHORITY\_OBJSET

\-

\-

C1

X

 

Released

IF\_AUNIT\_AUTH\_CHECK\_CONTROLLER

\-

\-

C1

X

 

Released

IF\_AUNIT\_AUTH\_CHECK\_RESULT\_LOG

\-

\-

C1

X

 

Released

IF\_AUNIT\_CONSTANTS

\-

\-

C1

X

 

Deprecated

INTF IF\_ABAP\_UNIT\_CONSTANT

IF\_BADI\_CONTEXT

\-

\-

C1

X

 

Released

IF\_BADI\_INTERFACE

\-

\-

C1

X

X

Released

IF\_BALI\_CONSTANTS

\-

\-

C1

X

 

Released

IF\_BALI\_EXCEPTION\_GETTER

\-

\-

C1

X

 

Released

IF\_BALI\_EXCEPTION\_SETTER

\-

\-

C1

X

 

Released

IF\_BALI\_FREE\_TEXT\_GETTER

\-

\-

C1

X

 

Released

IF\_BALI\_FREE\_TEXT\_SETTER

\-

\-

C1

X

 

Released

IF\_BALI\_HEADER\_GETTER

\-

\-

C1

X

 

Released

IF\_BALI\_HEADER\_SETTER

\-

\-

C1

X

 

Released

IF\_BALI\_ITEM\_FILTER

\-

\-

C1

X

 

Released

IF\_BALI\_ITEM\_GETTER

\-

\-

C1

X

 

Released

IF\_BALI\_ITEM\_SETTER

\-

\-

C1

X

 

Released

IF\_BALI\_LOG

\-

\-

C1

X

 

Released

IF\_BALI\_LOG\_DB

\-

\-

C1

X

 

Released

IF\_BALI\_LOG\_FILTER

\-

\-

C1

X

 

Released

IF\_BALI\_MESSAGE\_GETTER

\-

\-

C1

X

 

Released

IF\_BALI\_MESSAGE\_SETTER

\-

\-

C1

X

 

Released

IF\_BALI\_OBJECT\_HANDLER

\-

\-

C1

X

 

Released

IF\_BAL\_LOGGER

\-

\-

C1

X

 

Deprecated

IF\_BCFG\_CD\_CUST\_OBJECT\_SERVICE

\-

\-

C1

X

 

Released

IF\_BCFG\_CD\_TRANSPORT\_MANAGER

\-

\-

C1

X

 

Released

IF\_BCFG\_CD\_TRANSPORT\_RECORDER

\-

\-

C1

X

 

Released

IF\_BCFG\_CD\_TRANSPORT\_SERVICE

\-

\-

C1

X

 

Released

IF\_BGMC\_OPERATION

\-

\-

C1

X

 

Released

IF\_BGMC\_OPERATION\_AIF

\-

\-

C1

X

 

Released

IF\_BGMC\_OPERATION\_AIF\_CONF

\-

\-

C1

X

 

Released

IF\_BGMC\_OPERATION\_FRAMEWORK

\-

\-

C1

X

 

Released

IF\_BGMC\_OP\_SINGLE

\-

\-

C1

X

 

Released

IF\_BGMC\_OP\_SINGLE\_TX\_UNCONTR

\-

\-

C1

X

 

Released

IF\_BGMC\_PROCESS

\-

\-

C1

X

 

Released

IF\_BGMC\_PROCESS\_FACTORY

\-

\-

C1

X

 

Released

IF\_BGMC\_PROCESS\_MONITOR

\-

\-

C1

X

 

Released

IF\_BGMC\_PROCESS\_SINGLE\_OP

\-

\-

C1

X

 

Released

IF\_BGMC\_PROCESS\_SPY

\-

\-

C1

X

 

Released

IF\_BGMC\_TEST\_ENVIRONMENT

\-

\-

C1

X

 

Released

IF\_BGMC\_TEST\_ENVIR\_SPY

\-

\-

C1

X

 

Released

IF\_BLE\_API\_MT\_TENANT

\-

\-

C1

X

 

Released

IF\_BLE\_BADI\_MARKER\_INTERFACE

\-

\-

C1

 

X

Released

IF\_BLE\_BADI\_RUNTIME

\-

\-

C1

 

X

Released

IF\_BLE\_DT\_ROW\_ITERATOR

\-

\-

C1

X

X

Released

IF\_BLE\_DYNAMIC\_TABLE

\-

\-

C1

X

X

Released

IF\_BOTD\_BUFDBL\_ACTIONS\_HANDLER

\-

\-

C1

X

 

Released

IF\_BOTD\_BUFDBL\_ADD\_BEHV\_CONFIG

\-

\-

C1

X

 

Released

IF\_BOTD\_BUFDBL\_FIELDS\_HANDLER

\-

\-

C1

X

 

Released

IF\_BOTD\_BUFDBL\_IN\_CFG\_MOD

\-

\-

C1

X

 

Released

IF\_BOTD\_BUFDBL\_IN\_CFG\_READ

\-

\-

C1

X

 

Released

IF\_BOTD\_BUFDBL\_IN\_SET\_MOD

\-

\-

C1

X

 

Released

IF\_BOTD\_BUFDBL\_IN\_SET\_READ

\-

\-

C1

X

 

Released

IF\_BOTD\_BUFDBL\_OUT\_CFG\_MOD

\-

\-

C1

X

 

Released

IF\_BOTD\_BUFDBL\_OUT\_CFG\_READ

\-

\-

C1

X

 

Released

IF\_BOTD\_BUFDBL\_OUT\_SET\_MOD

\-

\-

C1

X

 

Released

IF\_BOTD\_BUFDBL\_OUT\_SET\_READ

\-

\-

C1

X

 

Released

IF\_BOTD\_BUFDBL\_SET\_ACTION\_IMPL

\-

\-

C1

X

 

Released

IF\_BOTD\_MOCKEMLAPI\_BO\_TEST\_ENV

\-

\-

C1

X

 

Released

IF\_BOTD\_MOCKEMLAPI\_TEST\_DOUBLE

\-

\-

C1

X

 

Released

IF\_BOTD\_MOCKEMLAPI\_TEST\_ENVCFG

\-

\-

C1

X

 

Released

IF\_BOTD\_MOCKEML\_CALL\_CONFIG

\-

\-

C1

X

 

Released

IF\_BOTD\_MOCKEML\_ENTPART\_MOD

\-

\-

C1

X

 

Released

IF\_BOTD\_MOCKEML\_ENTPART\_READ

\-

\-

C1

X

 

Released

IF\_BOTD\_MOCKEML\_INBLDR\_MOD

\-

\-

C1

X

 

Released

IF\_BOTD\_MOCKEML\_INBLDR\_READ

\-

\-

C1

X

 

Released

IF\_BOTD\_MOCKEML\_IN\_CFGBLDR

\-

\-

C1

X

 

Released

IF\_BOTD\_MOCKEML\_IN\_CFG\_MOD

\-

\-

C1

X

 

Released

IF\_BOTD\_MOCKEML\_IN\_CFG\_READ

\-

\-

C1

X

 

Released

IF\_BOTD\_MOCKEML\_IN\_SET\_MOD

\-

\-

C1

X

 

Released

IF\_BOTD\_MOCKEML\_IN\_SET\_READ

\-

\-

C1

X

 

Released

IF\_BOTD\_MOCKEML\_OUTBLDR\_MOD

\-

\-

C1

X

 

Released

IF\_BOTD\_MOCKEML\_OUTBLDR\_READ

\-

\-

C1

X

 

Released

IF\_BOTD\_MOCKEML\_OUT\_CFGBLDR

\-

\-

C1

X

 

Released

IF\_BOTD\_MOCKEML\_OUT\_CFG\_MOD

\-

\-

C1

X

 

Released

IF\_BOTD\_MOCKEML\_OUT\_CFG\_READ

\-

\-

C1

X

 

Released

IF\_BOTD\_MOCKEML\_OUT\_SET\_MOD

\-

\-

C1

X

 

Released

IF\_BOTD\_MOCKEML\_OUT\_SET\_READ

\-

\-

C1

X

 

Released

IF\_BOTD\_MOCKEML\_VERIFICATION

\-

\-

C1

X

 

Released

IF\_BOTD\_MOCKEML\_VERIFY\_MODIFY

\-

\-

C1

X

 

Released

IF\_BOTD\_MOCKEML\_VERIFY\_READ

\-

\-

C1

X

 

Released

IF\_BOTD\_TXBUFDBL\_BO\_TEST\_ENV

\-

\-

C1

X

 

Released

IF\_BOTD\_TXBUFDBL\_TEST\_DOUBLE

\-

\-

C1

X

 

Released

IF\_BOTD\_TXBUFDBL\_TEST\_ENVCFG

\-

\-

C1

X

 

Released

IF\_BOTD\_TYPES\_DEF

\-

\-

C1

X

 

Released

IF\_CBE\_BDEF\_RUNTIME

\-

\-

C1

X

X

Released

IF\_CBO\_DEV\_BO\_NODE

\-

\-

C1

X

 

Released

IF\_CBO\_DEV\_BUSINESS\_OBJECT

\-

\-

C1

X

 

Released

IF\_CBO\_DEV\_DATA\_RETRIEVAL

\-

\-

C1

X

 

Released

IF\_CBO\_WRITE

\-

\-

C1

 

X

Released

IF\_CBO\_WRITE\_NODE

\-

\-

C1

 

X

Released

IF\_CDS\_ACCESS\_CONTROL\_DATA

\-

\-

C1

X

 

Released

IF\_CDS\_ACCESS\_CONTROL\_DOUBLE

\-

\-

C1

X

 

Released

IF\_CDS\_ENTITY\_INSPECTOR

\-

\-

C1

X

 

Released

IF\_CDS\_NULL\_VALUES\_CONFIG

\-

\-

C1

X

 

Released

IF\_CDS\_PARAMETER\_VALUES\_CONFIG

\-

\-

C1

X

 

Released

IF\_CDS\_STUB

\-

\-

C1

X

 

Released

IF\_CDS\_TEST\_DATA

\-

\-

C1

X

 

Released

IF\_CDS\_TEST\_ENVIRONMENT

\-

\-

C1

X

 

Released

IF\_CFD\_DPP\_VALUE\_MAPPING

\-

\-

C1

 

X

Released

IF\_CHANGEDOCU\_ARCHIVE

\-

\-

C1

X

 

Released

IF\_CHDO\_DELETE\_TOOLS

\-

\-

C1

X

 

Released

IF\_CHDO\_ENHANCEMENTS

\-

\-

C1

X

 

Released

IF\_CHDO\_OBJECT\_TOOLS\_REL

\-

\-

C1

X

 

Released

IF\_CI\_ATC\_CHECK

\-

\-

C1

X

 

Released

IF\_CI\_ATC\_CHECK\_META\_DATA

\-

\-

C1

X

 

Released

IF\_CI\_ATC\_FINDING\_STACK

\-

\-

C1

X

 

Released

IF\_CI\_ATC\_QUICKFIX

\-

\-

C1

X

 

Released

IF\_CI\_ATC\_SOURCE\_CODE\_PROVIDER

\-

\-

C1

X

 

Released

IF\_CI\_ATC\_UNIT\_ASSERTER

\-

\-

C1

X

 

Released

IF\_CMIS\_CLIENT

\-

\-

C1

X

 

Released

IF\_CONSTRAINT

\-

\-

C1

X

X

Released

IF\_CX\_DEV\_OBJECT\_INFO

\-

\-

C1

X

 

Released

IF\_DEMO\_OUTPUT

\-

\-

C1

X

 

Released

IF\_FDT\_CP\_ACTIONS

\-

\-

C1

X

 

Released

IF\_FDT\_CP\_ADMIN\_DATA

\-

\-

C1

X

 

Released

IF\_FDT\_CP\_AST\_FACTORY

\-

\-

C1

X

 

Released

IF\_FDT\_CP\_AST\_FUNCTION\_NODE

\-

\-

C1

X

 

Released

IF\_FDT\_CP\_AST\_LITERAL\_NODE

\-

\-

C1

X

 

Released

IF\_FDT\_CP\_AST\_NODE

\-

\-

C1

X

 

Released

IF\_FDT\_CP\_AST\_REFERENCE\_NODE

\-

\-

C1

X

 

Released

IF\_FDT\_CP\_DATA\_OBJECT

\-

\-

C1

X

 

Released

IF\_FDT\_CP\_DATA\_OBJ\_ELEMENT

\-

\-

C1

X

 

Released

IF\_FDT\_CP\_DATA\_OBJ\_STRUCTURE

\-

\-

C1

X

 

Released

IF\_FDT\_CP\_DATA\_OBJ\_TABLE

\-

\-

C1

X

 

Released

IF\_FDT\_CP\_DECISION\_TABLE

\-

\-

C1

X

 

Released

IF\_FDT\_CP\_EXTERNAL\_TYPES

\-

\-

C1

X

 

Released

IF\_FDT\_CP\_FACTORY

\-

\-

C1

X

 

Released

IF\_FDT\_CP\_OPERATION\_CHECK

\-

\-

C1

X

 

Released

IF\_FDT\_CP\_OPERATION\_DELETE

\-

\-

C1

X

 

Released

IF\_FDT\_CP\_OPERATION\_DEPLOY

\-

\-

C1

X

 

Released

IF\_FDT\_CP\_OP\_SAVE\_ACTIVATE

\-

\-

C1

X

 

Released

IF\_FDT\_CP\_PROJECT

\-

\-

C1

X

 

Released

IF\_FDT\_CP\_PROJECT\_SETTINGS

\-

\-

C1

X

 

Released

IF\_FDT\_CP\_RULE

\-

\-

C1

X

 

Released

IF\_FDT\_CP\_RULESERVICE

\-

\-

C1

X

 

Released

IF\_FDT\_CP\_RULESERVICE\_VERSION

\-

\-

C1

X

 

Released

IF\_FDT\_CP\_RULESET

\-

\-

C1

X

 

Released

IF\_FDT\_CP\_TEXT\_RULE

\-

\-

C1

X

 

Released

IF\_FDT\_CP\_VALIDATION\_OPERATION

\-

\-

C1

X

 

Released

IF\_FDT\_CP\_VERSION\_GENERIC

\-

\-

C1

X

 

Released

IF\_FDT\_RANGE

\-

\-

C1

 

X

Released

IF\_FDT\_RULE

\-

\-

C1

 

X

Released

IF\_FDT\_TYPES

\-

\-

C1

X

X

Released

IF\_FHC\_FCAL\_RUNTIME

\-

\-

C1

X

 

Released

IF\_FHC\_HCAL\_RUNTIME

\-

\-

C1

X

 

Released

IF\_FHC\_HOLIDAY\_RUNTIME

\-

\-

C1

X

 

Released

IF\_FHC\_ID\_MAPPER

\-

\-

C1

X

 

Released

IF\_FP\_FDP\_API

\-

\-

C1

X

 

Released

IF\_FTD\_ARGUMENTS\_ITERATOR

\-

\-

C1

X

 

Released

IF\_FTD\_ARGUMENT\_MATCHER

\-

\-

C1

X

 

Released

IF\_FTD\_BEHAVIOR\_VERIFICATION

\-

\-

C1

X

 

Released

IF\_FTD\_INPUT\_ARGUMENTS

\-

\-

C1

X

 

Released

IF\_FTD\_INPUT\_CONFIGURATION

\-

\-

C1

X

 

Released

IF\_FTD\_INPUT\_CONFIG\_SETTER

\-

\-

C1

X

 

Released

IF\_FTD\_INVOCATION\_ANSWER

\-

\-

C1

X

 

Released

IF\_FTD\_INVOCATION\_RESULT

\-

\-

C1

X

 

Released

IF\_FTD\_OUTPUT\_CONFIGURATION

\-

\-

C1

X

 

Released

IF\_FTD\_OUTPUT\_CONFIG\_SETTER

\-

\-

C1

X

 

Released

IF\_FTD\_TESTDOUBLE\_ARGUMENT

\-

\-

C1

X

 

Released

IF\_FUNCTION\_TESTDOUBLE

\-

\-

C1

X

 

Released

IF\_FUNCTION\_TEST\_ENVIRONMENT

\-

\-

C1

X

 

Released

IF\_GSM\_API\_CONSTANTS

\-

\-

C1

X

 

Released

IF\_GSM\_API\_METRIC

\-

\-

C1

X

 

Released

IF\_GSM\_API\_METRIC\_GROUP

\-

\-

C1

X

 

Released

IF\_GSM\_API\_MODEL

\-

\-

C1

X

 

Released

IF\_GSM\_API\_PROVIDER

\-

\-

C1

X

 

Released

IF\_GSM\_API\_TEST

\-

\-

C1

X

 

Released

IF\_GSM\_API\_TYPES

\-

\-

C1

X

 

Released

IF\_HTTP\_DESTINATION

\-

\-

C1

X

 

Released

IF\_HTTP\_SERVICE\_EXTENSION

\-

\-

C1

X

 

Released

IF\_IRM\_DESTRUCTION\_OBJECT\_EXEC

\-

\-

C1

X

 

Released

IF\_IRM\_RT\_DESTRUCTION\_OBJECT

\-

\-

C1

X

 

Released

IF\_IRM\_RT\_EXEC

\-

\-

C1

X

 

Released

IF\_IXML\_ATTRIBUTE

\-

\-

C1

X

 

Released

IF\_IXML\_ATTRIBUTE\_DECL

\-

\-

C1

X

 

Released

IF\_IXML\_ATT\_LIST\_DECL

\-

\-

C1

X

 

Released

IF\_IXML\_CDATA\_SECTION

\-

\-

C1

X

 

Released

IF\_IXML\_CHARACTER\_DATA

\-

\-

C1

X

 

Released

IF\_IXML\_COMMENT

\-

\-

C1

X

 

Released

IF\_IXML\_COND\_DTD\_SECTION

\-

\-

C1

X

 

Released

IF\_IXML\_CONTENT\_PARTICLE

\-

\-

C1

X

 

Released

IF\_IXML\_CORE

\-

\-

C1

X

 

Released

IF\_IXML\_DOCUMENT

\-

\-

C1

X

 

Released

IF\_IXML\_DOCUMENT\_FRAGMENT

\-

\-

C1

X

 

Released

IF\_IXML\_DOCUMENT\_TYPE

\-

\-

C1

X

 

Released

IF\_IXML\_ELEMENT

\-

\-

C1

X

 

Released

IF\_IXML\_ELEMENT\_DECL

\-

\-

C1

X

 

Released

IF\_IXML\_ENCODING

\-

\-

C1

X

 

Released

IF\_IXML\_ENTITY\_DECL

\-

\-

C1

X

 

Released

IF\_IXML\_ENTITY\_REF

\-

\-

C1

X

 

Released

IF\_IXML\_EVENT

\-

\-

C1

X

 

Released

IF\_IXML\_INLINE\_ITERATOR

\-

\-

C1

X

 

Released

IF\_IXML\_ISTREAM\_CORE

\-

\-

C1

X

 

Released

IF\_IXML\_NAMED\_NODE\_MAP

\-

\-

C1

X

 

Released

IF\_IXML\_NAMESPACE\_CONTEXT

\-

\-

C1

X

 

Released

IF\_IXML\_NAMESPACE\_DECL

\-

\-

C1

X

 

Released

IF\_IXML\_NODE

\-

\-

C1

X

 

Released

IF\_IXML\_NODE\_COLLECTION

\-

\-

C1

X

 

Released

IF\_IXML\_NODE\_FILTER

\-

\-

C1

X

 

Released

IF\_IXML\_NODE\_ITERATOR

\-

\-

C1

X

 

Released

IF\_IXML\_NODE\_LIST

\-

\-

C1

X

 

Released

IF\_IXML\_NOTATION\_DECL

\-

\-

C1

X

 

Released

IF\_IXML\_OSTREAM\_CORE

\-

\-

C1

X

 

Released

IF\_IXML\_PARSER\_CORE

\-

\-

C1

X

 

Released

IF\_IXML\_PARSE\_ERROR\_CORE

\-

\-

C1

X

 

Released

IF\_IXML\_PI

\-

\-

C1

X

 

Released

IF\_IXML\_PI\_PARSED

\-

\-

C1

X

 

Released

IF\_IXML\_PI\_UNPARSED

\-

\-

C1

X

 

Released

IF\_IXML\_RENDERER\_CORE

\-

\-

C1

X

 

Released

IF\_IXML\_STREAM\_CORE

\-

\-

C1

X

 

Released

IF\_IXML\_STREAM\_FACTORY\_CORE

\-

\-

C1

X

 

Released

IF\_IXML\_TEXT

\-

\-

C1

X

 

Released

IF\_IXML\_UNKNOWN

\-

\-

C1

X

 

Released

IF\_IXML\_XPATH

\-

\-

C1

X

 

Released

IF\_MAIL\_ADDRESS

\-

\-

C1

X

 

Released

IF\_MBC\_CP\_API\_BUSINESS\_CONFIG

\-

\-

C1

X

 

Released

IF\_MBC\_CP\_APP\_CONFIGURATION

\-

\-

C1

X

 

Released

IF\_MBC\_CP\_MESSAGE

\-

\-

C1

X

 

Released

IF\_MBC\_CP\_RAP\_TABLE\_CTS

\-

\-

C1

X

 

Released

IF\_MBC\_CP\_RAP\_TDAT\_CTS

\-

\-

C1

X

 

Released

IF\_MBC\_CP\_RECORDING\_RESULT

\-

\-

C1

X

 

Released

IF\_MESSAGE

\-

\-

C1

X

X

Released

IF\_NOTEBASIC\_EXIT

\-

\-

C1

X

 

Released

IF\_NUMBERRANGE\_BUFFER

\-

\-

C1

X

 

Released

IF\_OO\_ADT\_CLASSRUN

\-

\-

C1

X

X

Released

IF\_OO\_ADT\_CLASSRUN\_OUT

\-

\-

C1

X

X

Released

IF\_OSQL\_DOUBLE

\-

\-

C1

X

 

Released

IF\_OSQL\_NULL\_VALUES\_CONFIG

\-

\-

C1

X

 

Released

IF\_OSQL\_PARAM\_VALUES\_CONFIG

\-

\-

C1

X

 

Released

IF\_OSQL\_STUB

\-

\-

C1

X

 

Released

IF\_OSQL\_TEST\_DATA

\-

\-

C1

X

 

Released

IF\_OSQL\_TEST\_ENVIRONMENT

\-

\-

C1

X

 

Released

IF\_PROXY\_BASIS

\-

\-

C1

X

 

Released

IF\_PROXY\_CLIENT

\-

\-

C1

X

 

Released

IF\_PROXY\_DESTINATION

\-

\-

C1

X

 

Released

IF\_RAP\_EVENT\_DOUBLE\_MASS

\-

\-

C1

X

 

Released

IF\_RAP\_EVENT\_DOUBLE\_M\_VERIFY

\-

\-

C1

X

 

Released

IF\_RAP\_EVENT\_DOUBLE\_SINGLE

\-

\-

C1

X

 

Released

IF\_RAP\_EVENT\_DOUBLE\_S\_VERIFY

\-

\-

C1

X

 

Released

IF\_RAP\_EVENT\_TEST\_ENVIRONMENT

\-

\-

C1

X

 

Released

IF\_RAP\_QUERY\_AGGREGATION

\-

\-

C1

X

 

Released

IF\_RAP\_QUERY\_FILTER

\-

\-

C1

X

 

Released

IF\_RAP\_QUERY\_FILTER\_TREE

\-

\-

C1

X

 

Released

IF\_RAP\_QUERY\_FILTER\_TREE\_NODE

\-

\-

C1

X

 

Released

IF\_RAP\_QUERY\_FILTER\_TREE\_TYPES

\-

\-

C1

X

 

Released

IF\_RAP\_QUERY\_PAGING

\-

\-

C1

X

 

Released

IF\_RAP\_QUERY\_PROVIDER

\-

\-

C1

X

 

Released

IF\_RAP\_QUERY\_REQUEST

\-

\-

C1

X

 

Released

IF\_RAP\_QUERY\_RESPONSE

\-

\-

C1

X

 

Released

IF\_RFC\_DEST

\-

\-

C1

X

 

Released

IF\_RSM\_BADI\_RESPONSIBILITY\_RUL

\-

\-

C1

 

X

Released

IF\_RSPO\_PDF\_MERGER

\-

\-

C1

X

 

Released

IF\_SADL\_EXIT\_CALC\_ELEMENT\_READ

\-

\-

C1

X

 

Released

IF\_SADL\_EXIT\_SORT\_TRANSFORM

\-

\-

C1

X

 

Released

IF\_SATC\_API\_FACTORY

\-

\-

C1

X

 

Released

IF\_SATC\_API\_RESULT

\-

\-

C1

X

 

Released

IF\_SATC\_API\_RUN

\-

\-

C1

X

 

Released

IF\_SATC\_API\_RUN\_CONFIGURATION

\-

\-

C1

X

 

Released

IF\_SATC\_OBJECT\_SET

\-

\-

C1

X

 

Released

IF\_SERIALIZABLE\_OBJECT

\-

\-

C1

X

 

Released

IF\_SLIN\_BADI\_DBTAB\_ACCESS

\-

\-

C1

X

 

Released

IF\_SLIN\_BADI\_SEC\_BACKDOOR

\-

\-

C1

X

 

Released

IF\_SLIN\_BADI\_SEC\_PROCEDURES

\-

\-

C1

X

 

Released

IF\_SLIN\_BADI\_TRUSTED\_SOURCES

\-

\-

C1

X

 

Released

IF\_SLIN\_BADI\_VULN\_PROCEDURES

\-

\-

C1

X

 

Released

IF\_SLIN\_GOV\_DBTAB\_ACCESS

\-

\-

C1

X

 

Released

IF\_SLIN\_SEC\_PROCEDURES

\-

\-

C1

X

 

Released

IF\_SLIN\_SEC\_SY\_BACKDOOR

\-

\-

C1

X

 

Released

IF\_SLIN\_SEC\_TRUSTED\_SOURCES

\-

\-

C1

X

 

Released

IF\_SLIN\_VULN\_PROCEDURES

\-

\-

C1

X

 

Released

IF\_SMTG\_EMAIL\_TEMPL\_RENDERER

\-

\-

C1

X

 

Released

IF\_SSI\_RP\_SESSION\_MEMORY

\-

\-

C1

X

 

Released

IF\_SWF\_CPWF\_API

\-

\-

C1

X

 

Released

IF\_SWF\_CPWF\_CALLBACK

\-

\-

C1

X

 

Released

IF\_SWF\_CPWF\_CAPI

\-

\-

C1

X

 

Released

IF\_SWF\_CPWF\_CAPI\_ENTITY

\-

\-

C1

X

 

Released

IF\_SWF\_CPWF\_CAPI\_WF\_INSTS

\-

\-

C1

X

 

Released

IF\_SWF\_CPWF\_CAPI\_WF\_INST\_CTXT

\-

\-

C1

X

 

Released

IF\_SWF\_CP\_JSON

\-

\-

C1

X

 

Released

IF\_SWF\_FLEX\_IFS\_CONDITION\_DEF

\-

\-

C1

X

X

Released

IF\_SWF\_FLEX\_IFS\_CONDITION\_EVAL

\-

\-

C1

X

X

Released

IF\_SWF\_FLEX\_IFS\_WI\_FORWARD\_CUS

\-

\-

C1

X

X

Released

IF\_SXML

\-

\-

C1

X

 

Released

IF\_SXML\_ATTRIBUTE

\-

\-

C1

X

 

Released

IF\_SXML\_CLOSE\_ELEMENT

\-

\-

C1

X

 

Released

IF\_SXML\_NAMED

\-

\-

C1

X

 

Released

IF\_SXML\_NODE

\-

\-

C1

X

 

Released

IF\_SXML\_NSURI\_HELPER

\-

\-

C1

X

 

Released

IF\_SXML\_OPEN\_ELEMENT

\-

\-

C1

X

 

Released

IF\_SXML\_READER

\-

\-

C1

X

 

Released

IF\_SXML\_VALUE

\-

\-

C1

X

 

Released

IF\_SXML\_VALUE\_NODE

\-

\-

C1

X

 

Released

IF\_SXML\_WRITER

\-

\-

C1

X

 

Released

IF\_SYSTEM\_UUID

\-

\-

C1

X

X

Released

IF\_SYSTEM\_UUID\_RFC4122\_STATIC

\-

\-

C1

X

X

Released

IF\_SYSTEM\_UUID\_STATIC

\-

\-

C1

X

X

Released

IF\_T100\_DYN\_MSG

\-

\-

C1

X

X

Released

IF\_T100\_MESSAGE

\-

\-

C1

X

X

Released

IF\_TEST\_DOUBLE\_CONSTANTS

\-

\-

C1

 

X

Released

IF\_TPDA\_SP\_VISIBILITY\_TEST1

\-

\-

C1

X

 

Released

IF\_WEB\_HTTP\_CLIENT

\-

\-

C1

X

 

Released

IF\_WEB\_HTTP\_HEADER

\-

\-

C1

X

 

Released

IF\_WEB\_HTTP\_REQUEST

\-

\-

C1

X

 

Released

IF\_WEB\_HTTP\_RESPONSE

\-

\-

C1

X

 

Released

IF\_WEB\_HTTP\_STATUS

\-

\-

C1

X

 

Released

IF\_WSPROTOCOL

\-

\-

C1

X

 

Released

IF\_WS\_HTTP\_HEADER\_FACADE

\-

\-

C1

X

 

Released

IF\_WS\_SEQUENCE\_FACADE

\-

\-

C1

X

 

Released

IF\_WS\_SERVER\_CONTEXT

\-

\-

C1

X

 

Released

IF\_WS\_SOAP\_HEADER\_FACADE

\-

\-

C1

X

 

Released

IF\_WS\_TRANSPORT\_BINDING

\-

\-

C1

X

 

Released

IF\_XCO\_ABAP\_REPOSITORY

\-

\-

C1

X

 

Released

IF\_XCO\_ABAP\_TOKEN

\-

\-

C1

X

 

Released

IF\_XCO\_ACCESS\_CONTROL

\-

\-

C1

X

 

Released

IF\_XCO\_ACCESS\_CONTROLS

\-

\-

C1

X

 

Released

IF\_XCO\_ADT\_CLASSRUN\_OUT

\-

\-

C1

X

 

Released

IF\_XCO\_AD\_BUILT\_IN\_TYPE\_RFRNC

\-

\-

C1

X

 

Released

IF\_XCO\_AD\_DATA\_ELEMENT

\-

\-

C1

X

 

Released

IF\_XCO\_AD\_DATA\_ELEMENTS

\-

\-

C1

X

 

Released

IF\_XCO\_AD\_DATA\_TYPE

\-

\-

C1

X

 

Released

IF\_XCO\_AD\_DATA\_TYPE\_REFERENCE

\-

\-

C1

X

 

Released

IF\_XCO\_AD\_OBJECT

\-

\-

C1

X

 

Released

IF\_XCO\_AD\_REFERENCE\_TYPE\_FCTRY

\-

\-

C1

X

 

Released

IF\_XCO\_AD\_STRUCTURE

\-

\-

C1

X

 

Released

IF\_XCO\_AD\_STRUCTURES

\-

\-

C1

X

 

Released

IF\_XCO\_AD\_TABLE

\-

\-

C1

X

 

Released

IF\_XCO\_AD\_TABLES

\-

\-

C1

X

 

Released

IF\_XCO\_AD\_TABLE\_TYPE

\-

\-

C1

X

 

Released

IF\_XCO\_AD\_TABLE\_TYPES

\-

\-

C1

X

 

Released

IF\_XCO\_AMDP\_DATABASE\_ENTITY

\-

\-

C1

X

 

Released

IF\_XCO\_AMDP\_OPTION

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_CACHEABLE\_ORIGIN

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_CLASS

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_CLASSES

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_C\_ALIAS

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_C\_ALIASES

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_C\_ALIAS\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_C\_ALIAS\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_C\_CLASS\_DATA

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_C\_CLASS\_DATAS

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_C\_CLASS\_DATA\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_C\_CLASS\_DATA\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_C\_CONSTANT

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_C\_CONSTANTS

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_C\_CONSTANT\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_C\_CONSTANT\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_C\_DATA

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_C\_DATAS

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_C\_DATA\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_C\_DATA\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_C\_METHOD

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_C\_TYPE

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_C\_TYPES

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_C\_TYPE\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_C\_TYPE\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_INTERFACE

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_INTERFACES

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_OBJECT

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_S\_EXCEPTION

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_S\_EXCEPTIONS

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_S\_EXCEPTIONS\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_S\_EXCEPTION\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_S\_PARAMETER

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_S\_PARAMETERS

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_S\_PARAMETERS\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_S\_PARAMETER\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_S\_P\_CHANGING

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_S\_P\_CHANGINGS

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_S\_P\_CHANGINGS\_FCTRY

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_S\_P\_CHANGING\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_S\_P\_EXPORTING

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_S\_P\_EXPORTINGS

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_S\_P\_EXPORTINGS\_FCTRY

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_S\_P\_EXPORTING\_CONTNT

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_S\_P\_IMPORTING

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_S\_P\_IMPORTINGS

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_S\_P\_IMPORTINGS\_FCTRY

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_S\_P\_IMPORTING\_CONTNT

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_S\_P\_RETURNING

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_S\_P\_RETURNINGS

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_S\_P\_RETURNINGS\_FCTRY

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_S\_P\_RETURNING\_CONTNT

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_TYPE

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_TYPE\_REFERENCE

\-

\-

C1

X

 

Released

IF\_XCO\_AO\_TYPING\_DEFINITION

\-

\-

C1

X

 

Released

IF\_XCO\_APLO\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_APLO\_SUBOBJECT

\-

\-

C1

X

 

Released

IF\_XCO\_APLO\_SUBOBJECTS

\-

\-

C1

X

 

Released

IF\_XCO\_APLO\_SUBOBJECTS\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_APLO\_SUBOBJECT\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_APPEND\_STRUCTURE

\-

\-

C1

X

 

Released

IF\_XCO\_APPEND\_STRUCTURES

\-

\-

C1

X

 

Released

IF\_XCO\_APPLICATION\_COMPONENT

\-

\-

C1

X

 

Released

IF\_XCO\_APPLICATION\_LOG\_OBJECT

\-

\-

C1

X

 

Released

IF\_XCO\_APPLICATION\_LOG\_OBJECTS

\-

\-

C1

X

 

Released

IF\_XCO\_APS\_COMPONENT

\-

\-

C1

X

 

Released

IF\_XCO\_APS\_COMPONENTS

\-

\-

C1

X

 

Released

IF\_XCO\_APS\_COMPONENTS\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_APS\_COMPONENT\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_APS\_COMPONENT\_TYPE

\-

\-

C1

X

 

Released

IF\_XCO\_APS\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_APS\_FOREIGN\_KEY

\-

\-

C1

X

 

Released

IF\_XCO\_APS\_FOREIGN\_KEY\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_APS\_SEARCH\_HELP

\-

\-

C1

X

 

Released

IF\_XCO\_APS\_SEARCH\_HELP\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_APLO\_OBJECT\_CLASS

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_APLO\_OBJECT\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_BDEF\_OBJECT\_CLASS

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_BDEF\_OBJECT\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_CLAS\_OBJECT\_CLASS

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_CLAS\_OBJECT\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_DCLS\_OBJECT\_CLASS

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_DCLS\_OBJECT\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_DDLS\_OBJECT\_CLASS

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_DDLS\_OBJECT\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_DDLX\_OBJECT\_CLASS

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_DDLX\_OBJECT\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_DEVC\_OBJECT\_CLASS

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_DEVC\_OBJECT\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_DOMA\_OBJECT\_CLASS

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_DOMA\_OBJECT\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_DRTY\_OBJECT\_CLASS

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_DRTY\_OBJECT\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_DTEL\_OBJECT\_CLASS

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_DTEL\_OBJECT\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_EVTB\_OBJECT\_CLASS

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_EVTB\_OBJECT\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_FILTER

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_FUGR\_OBJECT\_CLASS

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_FUGR\_OBJECT\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_INTF\_OBJECT\_CLASS

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_INTF\_OBJECT\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_MSAG\_OBJECT\_CLASS

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_MSAG\_OBJECT\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_NONT\_OBJECT\_CLASS

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_NONT\_OBJECT\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_NROB\_OBJECT\_CLASS

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_NROB\_OBJECT\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_OBJECT

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_OBJECTS

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_OBJECT\_CLASS

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_OBJECT\_NAME

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_OBJECT\_SOURCE

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_OBJECT\_TYPE

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_RONT\_OBJECT\_CLASS

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_RONT\_OBJECT\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_SMBC\_OBJECT\_CLASS

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_SMBC\_OBJECT\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_SRVB\_OBJECT\_CLASS

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_SRVB\_OBJECT\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_SRVC\_OBJECT\_CLASS

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_SRVC\_OBJECT\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_SRVD\_OBJECT\_CLASS

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_SRVD\_OBJECT\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_STOB\_OBJECT\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_TABL\_API\_OBJECT

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_TABL\_APS\_OBJ\_CLASS

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_TABL\_APS\_OBJ\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_TABL\_DBT\_OBJ\_CLASS

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_TABL\_DBT\_OBJ\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_TABL\_GTT\_OBJ\_CLASS

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_TABL\_GTT\_OBJ\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_TABL\_OBJECT\_CLASS

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_TABL\_STR\_OBJ\_CLASS

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_TABL\_STR\_OBJ\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_TTYP\_OBJECT\_CLASS

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_TTYP\_OBJECT\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_XSLT\_OBJECT\_CLASS

\-

\-

C1

X

 

Released

IF\_XCO\_AR\_XSLT\_OBJECT\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_BAL\_LOG\_FILTER

\-

\-

C1

X

 

Released

IF\_XCO\_BEHAVIOR\_DEFINITION

\-

\-

C1

X

 

Released

IF\_XCO\_BEHAVIOR\_DEFINITIONS

\-

\-

C1

X

 

Released

IF\_XCO\_BEHAVIOR\_DEFINITION\_CO

\-

\-

C1

X

 

Released

IF\_XCO\_BIMP\_TD\_REQUEST

\-

\-

C1

X

 

Released

IF\_XCO\_BIMP\_TD\_REQUEST\_F

\-

\-

C1

X

 

Released

IF\_XCO\_BIMP\_TD\_RESPONSE

\-

\-

C1

X

 

Released

IF\_XCO\_BIMP\_TD\_RESPONSE\_F

\-

\-

C1

X

 

Released

IF\_XCO\_BIMP\_TD\_STRUCTURE

\-

\-

C1

X

 

Released

IF\_XCO\_BIMP\_TD\_STRUCTURE\_F

\-

\-

C1

X

 

Released

IF\_XCO\_BIMP\_TD\_TABLE

\-

\-

C1

X

 

Released

IF\_XCO\_BIMP\_TD\_TABLE\_F

\-

\-

C1

X

 

Released

IF\_XCO\_BIMP\_TYPE\_DECLARATION\_F

\-

\-

C1

X

 

Released

IF\_XCO\_BINARY\_TEXT\_ENCODING

\-

\-

C1

X

X

Released

IF\_XCO\_BUSINESS\_CNFGRTN\_OBJCT

\-

\-

C1

X

 

Released

IF\_XCO\_BUSINESS\_CNFGRTN\_OBJCTS

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_ABSTRACT\_ENTITY

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_ABSTRACT\_ENTITY\_CON

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_ANNOTATION

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_ANNOTATIONS

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_ANN\_FILTER

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_ANN\_TARGET

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_ANN\_VALUE

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_ANN\_VALUE\_BUILDER

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_ANN\_VALUE\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_ANN\_VAL\_PRIMITIVE

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_ANN\_VAL\_P\_BOOLEAN

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_ANN\_VAL\_P\_ENUM

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_ANN\_VAL\_P\_NULL

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_ANN\_VAL\_P\_NUMBER

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_ANN\_VAL\_P\_STRING

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_ANN\_VT\_VISITOR

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_ASSOCIATION

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_ASSOCIATIONS

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_ASSOCIATIONS\_FCTRY

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_ASSOCIATION\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_COMPOSITION

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_COMPOSITIONS

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_COMPOSITIONS\_FCTRY

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_COMPOSITION\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_CUSTOM\_ENTITY

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_CUSTOM\_ENTITY\_CONT

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_ENTITIES

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_ENTITY

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_FIELD

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_FIELDS

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_FIELDS\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_FIELD\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_FIELD\_TYPE

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_PARAMETER

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_PARAMETERS

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_PARAMETERS\_FCTRY

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_PARAMETER\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_PARAMETER\_DATA\_TYPE

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_PROJECTION\_VIEW

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_PROJECTION\_VIEW\_CO

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_TABLE\_FUNCTION

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_TABLE\_FUNCTION\_CONT

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_TYPE\_DEFINITION

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_TYPE\_DEFINITIONS

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_UNION

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_UNION\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_VIEW

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_VIEW\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_VIEW\_ENTITY

\-

\-

C1

X

 

Released

IF\_XCO\_CDS\_VIEW\_ENTITY\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_CHAR\_CODE\_PAGE

\-

\-

C1

X

 

Released

IF\_XCO\_CHAR\_CP\_CONVERSION

\-

\-

C1

X

 

Released

IF\_XCO\_CLAS\_CACHEABLE\_ORIGIN

\-

\-

C1

X

 

Released

IF\_XCO\_CLAS\_CLASS\_METHOD

\-

\-

C1

X

 

Released

IF\_XCO\_CLAS\_COMPONENTS\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CLAS\_COMPONENT\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CLAS\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_CLAS\_C\_METHOD

\-

\-

C1

X

 

Released

IF\_XCO\_CLAS\_C\_METHODS

\-

\-

C1

X

 

Released

IF\_XCO\_CLAS\_C\_METHODS\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CLAS\_C\_METHOD\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_CLAS\_DEFINITION

\-

\-

C1

X

 

Released

IF\_XCO\_CLAS\_DEFINITION\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_CLAS\_DEFINITION\_SECTION

\-

\-

C1

X

 

Released

IF\_XCO\_CLAS\_IMPLEMENTATION

\-

\-

C1

X

 

Released

IF\_XCO\_CLAS\_I\_METHOD

\-

\-

C1

X

 

Released

IF\_XCO\_CLAS\_I\_METHOD\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_CLAS\_SUBCLASSES

\-

\-

C1

X

 

Released

IF\_XCO\_CLAS\_SUBCLASSES\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_APPLICATION\_CPNT\_FCT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_AR\_API\_OBJECT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_AR\_API\_OBJECTS

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_AR\_API\_OBJECT\_NAME

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_AR\_API\_OBJECT\_TYPE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_AR\_APLO\_OC\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_AR\_BDEF\_OC\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_AR\_CLAS\_OC\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_AR\_DCLS\_OC\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_AR\_DDLS\_OC\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_AR\_DDLX\_OC\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_AR\_DEVC\_OC\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_AR\_DOMA\_OC\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_AR\_DRTY\_OC\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_AR\_DTEL\_OC\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_AR\_EVTB\_OC\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_AR\_FILTER\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_AR\_FUGR\_OC\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_AR\_INTF\_OC\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_AR\_MSAG\_OC\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_AR\_NONT\_OC\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_AR\_NROB\_OC\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_AR\_RONT\_OC\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_AR\_SMBC\_OC\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_AR\_SRVB\_OC\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_AR\_SRVC\_OC\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_AR\_SRVD\_OC\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_AR\_STOB\_OBJECT\_CLASS

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_AR\_STOB\_OC\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_AR\_TABL\_APS\_OC\_FCTRY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_AR\_TABL\_DBT\_OC\_FCTRY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_AR\_TABL\_GTT\_OC\_FCTRY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_AR\_TABL\_OC\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_AR\_TABL\_STR\_OC\_FCTRY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_AR\_TTYP\_OC\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_AR\_XSLT\_OC\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_BAL\_EXC\_ADDITION

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_BAL\_EXC\_ADDITION\_FCT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_BAL\_EXC\_DESCENT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_BAL\_EXC\_DESCENT\_FCT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_BAL\_LOG

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_BAL\_LOGS

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_BAL\_LOGS\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_BAL\_LOG\_EXCEPTION

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_BAL\_LOG\_EXCEPTIONS

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_BAL\_LOG\_EXCEPTIONS\_F

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_BAL\_LOG\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_BAL\_LOG\_FILTER\_FCTRY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_BAL\_LOG\_HEADER

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_BAL\_LOG\_MESSAGE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_BAL\_LOG\_MESSAGES

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_BAL\_LOG\_MESSAGES\_FCT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_BAL\_PERSISTENCE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_BAL\_PERSISTENCE\_FCT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_BAL\_PROFILE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_BAL\_PROFILE\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_BAL\_SOURCE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_BAL\_SOURCE\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_BINARY\_TXT\_ENC\_FCTRY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_CALL\_STACK

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_CDS\_API\_ANNOTATIONS

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_CHAR\_CODE\_PAGE\_FCTRY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_CS\_EXTR\_API\_FROM

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_CS\_EXTR\_API\_TO

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_CS\_FORMAT\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_CS\_LINE\_NMBR\_FLV\_FCT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_CS\_LINE\_PATTERN\_FCT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_CTS\_ATTRIBUTE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_CTS\_CHANGE\_SCNR\_FCT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_DATA\_OBJECT\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_BDEF\_D\_API

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_BDEF\_D\_O\_DELETE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_BDEF\_D\_O\_PUT\_OBJ

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_BDEF\_D\_O\_PUT\_SCT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_BDEF\_S\_FORM

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_CLAS\_D\_API

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_CLAS\_D\_O\_DELETE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_CLAS\_D\_O\_PATCH

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_CLAS\_D\_O\_PAT\_OBJ

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_CLAS\_D\_O\_PUT\_OBJ

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_CLAS\_D\_O\_PUT\_SCT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_CLAS\_O\_PAT\_OBJ\_D

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_CLAS\_O\_PAT\_O\_D\_S

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_CLAS\_S\_DELETE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_CLAS\_S\_DE\_D\_SECT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_CLAS\_S\_FORM

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_CLAS\_S\_INSERT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_CLAS\_S\_IN\_D\_SECT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_CLAS\_S\_UPDATE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DCLS\_D\_API

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DCLS\_D\_O\_DELETE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DCLS\_D\_O\_PUT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DCLS\_D\_O\_PUT\_OBJ

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DCLS\_D\_O\_PUT\_SCT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DCLS\_S\_FORM

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DDLS\_D\_API

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DDLS\_D\_O\_DELETE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DDLS\_D\_O\_PUT\_OBJ

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DDLS\_D\_O\_PUT\_SCT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DDLS\_S\_FORM

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DDLS\_TPL\_SOURCE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DDLX\_D\_API

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DDLX\_D\_O\_DELETE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DDLX\_D\_O\_PUT\_OBJ

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DDLX\_D\_O\_PUT\_SCT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DDLX\_S\_FORM

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DEVC\_D\_API

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DEVC\_D\_O\_DELETE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DEVC\_D\_O\_PUT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DEVC\_D\_O\_PUT\_OBJ

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DEVC\_S\_FORM

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DEVC\_S\_FO\_PROPER

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DOMA\_D\_API

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DOMA\_D\_O\_DELETE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DOMA\_D\_O\_PATCH

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DOMA\_D\_O\_PATCH\_O

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DOMA\_D\_O\_PUT\_OBJ

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DOMA\_D\_O\_PUT\_SCT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DOMA\_O\_PATCH\_SCT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DOMA\_S\_CHANGE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DOMA\_S\_CH\_DELETE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DOMA\_S\_CH\_INSERT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DOMA\_S\_CH\_UPDATE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DOMA\_S\_FORM

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DOMA\_TEMPLATE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DOMA\_TEMPLATE\_FY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DRTY\_O\_DELETE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DRTY\_O\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DRTY\_O\_PUT\_OBJCT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DRTY\_O\_PUT\_SCTN

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DRTY\_S\_FORM

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DTEL\_D\_API

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DTEL\_D\_O\_DELETE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DTEL\_D\_O\_PATCH

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DTEL\_D\_O\_PATCH\_O

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DTEL\_D\_O\_PUT\_OBJ

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DTEL\_D\_O\_PUT\_SCT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DTEL\_O\_PATCH\_SCT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DTEL\_S\_CHANGE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DTEL\_S\_CH\_UPDATE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DTEL\_S\_FORM

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DTEL\_TEMPLATE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_DTEL\_TEMPLATE\_FY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_D\_O\_PUT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_D\_O\_PUT\_OPTION

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_ENV\_DEV\_SYSTEM

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_ENV\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_EVTB\_O\_DELETE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_EVTB\_O\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_EVTB\_O\_PATCH\_OBJ

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_EVTB\_O\_PATCH\_SCT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_EVTB\_O\_PUT\_OBJCT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_EVTB\_O\_PUT\_SCTN

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_EVTB\_S\_CHANGE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_EVTB\_S\_CH\_DELETE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_EVTB\_S\_CH\_INSERT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_EVTB\_S\_CH\_UPDATE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_EVTB\_S\_FORM

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_FUGR\_D\_API

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_FUGR\_D\_O\_DELETE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_FUGR\_D\_O\_PATCH

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_FUGR\_D\_O\_PATCH\_O

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_FUGR\_D\_O\_POST

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_FUGR\_D\_O\_POST\_O

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_FUGR\_S\_DELETE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_FUGR\_S\_FORM

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_FUGR\_S\_INSERT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_FUGR\_S\_UPDATE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_INTF\_D\_API

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_INTF\_D\_O\_DELETE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_INTF\_D\_O\_PATCH

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_INTF\_D\_O\_PATCH\_O

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_INTF\_D\_O\_PUT\_OBJ

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_INTF\_D\_O\_PUT\_SCT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_INTF\_S\_DELETE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_INTF\_S\_FORM

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_INTF\_S\_INSERT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_INTF\_S\_UPDATE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_MSAG\_D\_API

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_MSAG\_D\_O\_DELETE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_MSAG\_D\_O\_PATCH

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_MSAG\_D\_O\_PATCH\_O

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_MSAG\_D\_O\_PUT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_MSAG\_D\_O\_PUT\_OBJ

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_MSAG\_S\_DELETE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_MSAG\_S\_FORM

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_MSAG\_S\_FO\_MSG

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_MSAG\_S\_INSERT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_MSAG\_S\_IN\_MSG

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_MSAG\_S\_MODIFY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_MSAG\_S\_MO\_MSG

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_MSAG\_S\_UPDATE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_MSAG\_S\_UP\_MSG

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_NONT\_O\_DELETE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_NONT\_O\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_NONT\_O\_PATCH\_OBJ

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_NONT\_O\_PATCH\_SCT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_NONT\_O\_PUT\_OBJCT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_NONT\_O\_PUT\_SCTN

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_NONT\_S\_CHANGE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_NONT\_S\_CH\_UPDATE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_NONT\_S\_FORM

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_O\_DELETE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_O\_PATCH

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_O\_PATCH\_MASS

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_O\_POST

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_O\_PUT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_O\_PUT\_OPTION\_FCT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_RONT\_O\_DELETE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_RONT\_O\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_RONT\_O\_PATCH\_OBJ

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_RONT\_O\_PATCH\_SCT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_RONT\_O\_PUT\_OBJCT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_RONT\_O\_PUT\_SCTN

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_RONT\_S\_CHANGE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_RONT\_S\_CH\_UPDATE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_RONT\_S\_FORM

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_SRVB\_D\_API

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_SRVB\_D\_O\_DELETE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_SRVB\_D\_O\_PUT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_SRVB\_D\_O\_PUT\_OBJ

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_SRVB\_D\_O\_PUT\_SCT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_SRVB\_S\_FORM

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_SRVD\_D\_API

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_SRVD\_D\_O\_DELETE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_SRVD\_D\_O\_PUT\_OBJ

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_SRVD\_D\_O\_PUT\_SCT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_SRVD\_S\_FORM

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TABL\_APS\_O\_DEL

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TABL\_APS\_O\_FCTRY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TABL\_APS\_O\_PUT\_O

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TABL\_APS\_O\_PUT\_S

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TABL\_APS\_S\_FORM

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TABL\_DBT\_API

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TABL\_DBT\_DOPU\_SC

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TABL\_DBT\_D\_API

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TABL\_DBT\_D\_O\_DEL

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TABL\_DBT\_D\_O\_P\_O

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TABL\_DBT\_O\_PAT\_O

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TABL\_DBT\_O\_PAT\_S

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TABL\_DBT\_S\_CHNG

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TABL\_DBT\_S\_CH\_UP

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TABL\_DBT\_S\_CU\_TD

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TABL\_DBT\_S\_FORM

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TABL\_DBT\_S\_FO\_TD

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TABL\_DBT\_TMPLT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TABL\_DBT\_TMPLT\_F

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TABL\_GTT\_DOPU\_SC

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TABL\_GTT\_D\_API

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TABL\_GTT\_D\_O\_DEL

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TABL\_GTT\_D\_O\_P\_O

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TABL\_GTT\_S\_FORM

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TABL\_STR\_API

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TABL\_STR\_DOPU\_SC

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TABL\_STR\_D\_API

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TABL\_STR\_D\_O\_DEL

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TABL\_STR\_D\_O\_P\_O

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TABL\_STR\_O\_PAT\_O

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TABL\_STR\_O\_PAT\_S

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TABL\_STR\_S\_CHNG

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TABL\_STR\_S\_CH\_UP

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TABL\_STR\_S\_FORM

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TABL\_STR\_TMPLT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TABL\_STR\_TMPLT\_F

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TTYP\_D\_API

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TTYP\_D\_O\_DELETE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TTYP\_D\_O\_PUT\_OBJ

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TTYP\_D\_O\_PUT\_SCT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TTYP\_S\_FORM

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TTYP\_TEMPLATE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_TTYP\_TEMPLATE\_FY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_XSLT\_D\_API

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_XSLT\_D\_O\_DELETE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_XSLT\_D\_O\_PUT\_OBJ

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_XSLT\_D\_O\_PUT\_SCT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_GEN\_XSLT\_S\_FORM

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_HASH\_ALGORITHM\_FCTRY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_I18N\_ALO\_TARGT\_FCTRY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_I18N\_BCO\_TARGT\_FCTRY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_I18N\_DD\_TARGET\_FCTRY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_I18N\_DE\_TARGET\_FCTRY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_I18N\_DM\_TARGET\_FCTRY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_I18N\_MC\_TARGET\_FCTRY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_I18N\_ME\_TARGET\_FCTRY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_I18N\_TARGET\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_I18N\_TP\_TARGET\_FCTRY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_I18N\_TT\_TARGET\_FCTRY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_JSON\_DATA

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_JSON\_DATA\_BUILDER

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_JSON\_DATA\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_JSON\_TRNSFRMTN\_FCTRY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_LANG\_FORMAT\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_NAMESPACE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_NAMESPACE\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_NAME\_CHOICE\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_PACKAGE\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_PKG\_FILTER\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_REGEX\_ENGINE\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_SOFTWARE\_COMPONENT\_F

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_SRVB\_API\_LCL\_SRVC\_EP

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_SRVB\_API\_LSE\_ODV2

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_SRVB\_API\_LSE\_ODV2\_OP

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_SRVB\_API\_LSE\_ODV4

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_SRVB\_API\_LSE\_ODV4\_OP

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_STD\_CURRENT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_STD\_CUR\_API\_CLL\_STCK

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_STD\_SY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_STRING\_CMP\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_STRING\_DCMP\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_SYS\_API\_LANGUAGES

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TAB\_PSL\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TENANT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TEN\_GLOBL\_ACCOUNT\_ID

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TEN\_SUBACCOUNT\_ID

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TM\_DATE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TM\_DATE\_FORMAT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TM\_FORMAT\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TM\_MOMENT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TM\_MOMENT\_FORMAT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TM\_MOMENT\_INTERVAL

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TM\_TIME

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TM\_TIME\_FORMAT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TM\_TIME\_ZONE\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TM\_UNIX\_TIMESTAMP

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TRANSPORT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TRANSPORTS

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TRANSPORTS\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TRANSPORT\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TR\_API\_ENTRIES

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TR\_API\_KEY\_ENTRIES

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TR\_API\_OBJ\_ENTRIES

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TR\_ATTRIBUTE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TR\_ATTRIBUTES

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TR\_ENTRIES

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TR\_ENTRY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TR\_ENTRY\_CLASS

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TR\_ENTRY\_FILTER\_FCT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TR\_FILTER\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TR\_KEY\_ENTRIES

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TR\_KEY\_ENTRY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TR\_KE\_CLASS

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TR\_KE\_TABLE\_KEY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TR\_KE\_TK\_COMPONENT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TR\_KE\_TK\_CPNT\_VALUE

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TR\_OBJECT\_ENTRIES

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TR\_OBJECT\_ENTRY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TR\_OE\_CLASS

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TR\_OE\_FILTER\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TR\_R3TR\_API\_OBJ\_ENTS

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TR\_R3TR\_OBJECT\_ENTRS

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TR\_R3TR\_OBJECT\_ENTRY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TR\_R3TR\_OE\_CLASS

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TR\_R3TR\_TABU\_API\_OES

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TR\_R3TR\_TABU\_OBJ\_ENS

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TR\_R3TR\_TABU\_OBJ\_ENT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TR\_R3TR\_TABU\_OE\_CLSS

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TR\_REQUEST

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TR\_REQUEST\_ATTRBTS\_F

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TR\_REQUEST\_PROPRTIES

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TR\_SELECTION

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TR\_TASK

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_TR\_TASK\_PROPERTIES

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_URL

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_USER

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_UUID\_FORMAT\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_XLSX\_DOCUMENT\_FCTRY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_XLSX\_DOC\_EMPTY

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_XLSX\_DOC\_FILE\_CONTNT

\-

\-

C1

X

 

Released

IF\_XCO\_CP\_XLSX\_SLC\_PB\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_CS\_FORMAT

\-

\-

C1

X

 

Released

IF\_XCO\_CS\_LINE\_NUMBER\_FLAVOR

\-

\-

C1

X

 

Released

IF\_XCO\_CS\_LINE\_PATTERN

\-

\-

C1

X

 

Released

IF\_XCO\_CTS\_CHANGEABLE

\-

\-

C1

X

 

Released

IF\_XCO\_CTS\_CHANGE\_CARRIER

\-

\-

C1

X

 

Released

IF\_XCO\_CTS\_CHANGE\_SCENARIO

\-

\-

C1

X

 

Released

IF\_XCO\_CTS\_CHANGE\_TARGET

\-

\-

C1

X

 

Released

IF\_XCO\_CTS\_OBJECT

\-

\-

C1

X

 

Released

IF\_XCO\_CTS\_OBJECT\_LOCK

\-

\-

C1

X

 

Released

IF\_XCO\_DATABASE\_TABLE

\-

\-

C1

X

 

Released

IF\_XCO\_DATABASE\_TABLES

\-

\-

C1

X

 

Released

IF\_XCO\_DATA\_DEFINITION

\-

\-

C1

X

 

Released

IF\_XCO\_DATA\_DEFINITIONS

\-

\-

C1

X

 

Released

IF\_XCO\_DATA\_OBJECT

\-

\-

C1

X

 

Released

IF\_XCO\_DATE\_CALCULATION

\-

\-

C1

X

 

Released

IF\_XCO\_DBT\_CACHEABLE\_ORIGIN

\-

\-

C1

X

 

Released

IF\_XCO\_DBT\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_DBT\_FIELD

\-

\-

C1

X

 

Released

IF\_XCO\_DBT\_FIELDS

\-

\-

C1

X

 

Released

IF\_XCO\_DBT\_FIELDS\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_DBT\_FIELDS\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_DBT\_FIELD\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_DBT\_FIELD\_PROPOSAL\_FCT

\-

\-

C1

X

 

Released

IF\_XCO\_DBT\_FIELD\_PRP\_FKFA

\-

\-

C1

X

 

Released

IF\_XCO\_DBT\_FIELD\_PRP\_FKFA\_RSLT

\-

\-

C1

X

 

Released

IF\_XCO\_DBT\_FIELD\_TYPE

\-

\-

C1

X

 

Released

IF\_XCO\_DBT\_FOREIGN\_KEY

\-

\-

C1

X

 

Released

IF\_XCO\_DBT\_FOREIGN\_KEY\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_DBT\_SEARCH\_HELP

\-

\-

C1

X

 

Released

IF\_XCO\_DBT\_SEARCH\_HELP\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_DBT\_TEXT\_TABLE

\-

\-

C1

X

 

Released

IF\_XCO\_DCL\_CB\_ASPECT

\-

\-

C1

X

 

Released

IF\_XCO\_DCL\_CB\_ASPECT\_OPERATOR

\-

\-

C1

X

 

Released

IF\_XCO\_DCL\_CB\_INHERIT

\-

\-

C1

X

 

Released

IF\_XCO\_DCL\_CB\_INHERIT\_ENTITY

\-

\-

C1

X

 

Released

IF\_XCO\_DCL\_CB\_INHERIT\_ROLE

\-

\-

C1

X

 

Released

IF\_XCO\_DCL\_CB\_INHERIT\_SUPER

\-

\-

C1

X

 

Released

IF\_XCO\_DCL\_CB\_INH\_DEFAULT

\-

\-

C1

X

 

Released

IF\_XCO\_DCL\_CB\_INH\_REPLACING

\-

\-

C1

X

 

Released

IF\_XCO\_DCL\_CB\_INH\_R\_CONDS

\-

\-

C1

X

 

Released

IF\_XCO\_DCL\_CB\_INH\_R\_ELEMENT

\-

\-

C1

X

 

Released

IF\_XCO\_DCL\_CB\_INH\_R\_PARAMETRS

\-

\-

C1

X

 

Released

IF\_XCO\_DCL\_CB\_INH\_R\_PFCG\_FLR

\-

\-

C1

X

 

Released

IF\_XCO\_DCL\_CB\_INH\_R\_PREFIX

\-

\-

C1

X

 

Released

IF\_XCO\_DCL\_CB\_INH\_R\_ROOT

\-

\-

C1

X

 

Released

IF\_XCO\_DCL\_CB\_INH\_R\_V\_CONDS

\-

\-

C1

X

 

Released

IF\_XCO\_DCL\_CB\_PFCG

\-

\-

C1

X

 

Released

IF\_XCO\_DCL\_CB\_PFCG\_LEFT\_SIDE

\-

\-

C1

X

 

Released

IF\_XCO\_DCL\_CB\_PFCG\_LS\_FIELD

\-

\-

C1

X

 

Released

IF\_XCO\_DCL\_CB\_PFCG\_OPERATOR

\-

\-

C1

X

 

Released

IF\_XCO\_DCL\_CB\_PFCG\_RIGHT\_SIDE

\-

\-

C1

X

 

Released

IF\_XCO\_DCL\_CB\_USER

\-

\-

C1

X

 

Released

IF\_XCO\_DCL\_CB\_USER\_OPERATOR

\-

\-

C1

X

 

Released

IF\_XCO\_DCL\_CONDITION\_BUILDER

\-

\-

C1

X

 

Released

IF\_XCO\_DCL\_COND\_ASPECT\_F

\-

\-

C1

X

 

Released

IF\_XCO\_DCL\_COND\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_DCL\_COND\_INHERT\_ENTTY\_F

\-

\-

C1

X

 

Released

IF\_XCO\_DCL\_COND\_INHERT\_ROLE\_F

\-

\-

C1

X

 

Released

IF\_XCO\_DCL\_COND\_INHERT\_SUPER\_F

\-

\-

C1

X

 

Released

IF\_XCO\_DCL\_COND\_PFCG\_F

\-

\-

C1

X

 

Released

IF\_XCO\_DCL\_COND\_USER\_F

\-

\-

C1

X

 

Released

IF\_XCO\_DCL\_EXPRESSION

\-

\-

C1

X

 

Released

IF\_XCO\_DCL\_EXPRESSION\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_DCL\_EXPR\_CONDITION

\-

\-

C1

X

 

Released

IF\_XCO\_DCL\_EXPR\_FIELD

\-

\-

C1

X

 

Released

IF\_XCO\_DCL\_LITERAL

\-

\-

C1

X

 

Released

IF\_XCO\_DCL\_LITERAL\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_DDA\_RECORD

\-

\-

C1

X

 

Released

IF\_XCO\_DDA\_RECORDS

\-

\-

C1

X

 

Released

IF\_XCO\_DDA\_RECORD\_FIELD

\-

\-

C1

X

 

Released

IF\_XCO\_DDA\_RECORD\_FIELD\_VALUE

\-

\-

C1

X

 

Released

IF\_XCO\_DDA\_RECORD\_PROCESSOR

\-

\-

C1

X

 

Released

IF\_XCO\_DDL\_EB\_CASE

\-

\-

C1

X

 

Released

IF\_XCO\_DDL\_EB\_CAST

\-

\-

C1

X

 

Released

IF\_XCO\_DDL\_EXPRESSION

\-

\-

C1

X

 

Released

IF\_XCO\_DDL\_EXPR\_CASE\_F

\-

\-

C1

X

 

Released

IF\_XCO\_DDL\_EXPR\_CAST\_DTYPE

\-

\-

C1

X

 

Released

IF\_XCO\_DDL\_EXPR\_CAST\_F

\-

\-

C1

X

 

Released

IF\_XCO\_DDL\_EXPR\_CONDITION

\-

\-

C1

X

 

Released

IF\_XCO\_DDL\_EXPR\_DATA\_SOURCE

\-

\-

C1

X

 

Released

IF\_XCO\_DDL\_EXPR\_DATA\_SOURCE\_F

\-

\-

C1

X

 

Released

IF\_XCO\_DDL\_EXPR\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_DDL\_EXPR\_FIELD

\-

\-

C1

X

 

Released

IF\_XCO\_DDL\_LITERAL\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_DOMAIN

\-

\-

C1

X

 

Released

IF\_XCO\_DOMAINS

\-

\-

C1

X

 

Released

IF\_XCO\_DOMAIN\_CACHEABLE\_ORIGIN

\-

\-

C1

X

 

Released

IF\_XCO\_DOMAIN\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_DOMAIN\_FIXED\_VALUE

\-

\-

C1

X

 

Released

IF\_XCO\_DOMAIN\_FIXED\_VALUES

\-

\-

C1

X

 

Released

IF\_XCO\_DOMAIN\_FIXED\_VALUES\_FCT

\-

\-

C1

X

 

Released

IF\_XCO\_DOMAIN\_FIXED\_VALUE\_CNT

\-

\-

C1

X

 

Released

IF\_XCO\_DOMAIN\_FORMAT

\-

\-

C1

X

 

Released

IF\_XCO\_DP\_ACTION

\-

\-

C1

X

 

Released

IF\_XCO\_DP\_ACTION\_DECORATOR

\-

\-

C1

X

 

Released

IF\_XCO\_DP\_ACTION\_RESULT

\-

\-

C1

X

 

Released

IF\_XCO\_DP\_ADDITION

\-

\-

C1

X

 

Released

IF\_XCO\_DP\_CHECK

\-

\-

C1

X

 

Released

IF\_XCO\_DP\_CHECK\_RESULT

\-

\-

C1

X

 

Released

IF\_XCO\_DP\_LOCK

\-

\-

C1

X

 

Released

IF\_XCO\_DP\_ONGOING\_ACTION

\-

\-

C1

X

 

Released

IF\_XCO\_DRTY\_CACHEABLE\_ORIGIN

\-

\-

C1

X

 

Released

IF\_XCO\_DRTY\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_DTEL\_CACHEABLE\_ORIGIN

\-

\-

C1

X

 

Released

IF\_XCO\_DTEL\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_DTEL\_DATA\_TYPE

\-

\-

C1

X

 

Released

IF\_XCO\_EB\_CACHEABLE\_ORIGIN

\-

\-

C1

X

 

Released

IF\_XCO\_EB\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_EB\_EVENT\_VERSION

\-

\-

C1

X

 

Released

IF\_XCO\_EB\_EVENT\_VERSIONS

\-

\-

C1

X

 

Released

IF\_XCO\_EB\_EVENT\_VERSIONS\_FCTRY

\-

\-

C1

X

 

Released

IF\_XCO\_EB\_EVENT\_VERSION\_CNT

\-

\-

C1

X

 

Released

IF\_XCO\_EVENT\_BINDING

\-

\-

C1

X

 

Released

IF\_XCO\_EVENT\_BINDINGS

\-

\-

C1

X

 

Released

IF\_XCO\_FG\_CACHEABLE\_ORIGIN

\-

\-

C1

X

 

Released

IF\_XCO\_FG\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_FG\_FUNCTION\_MODULES

\-

\-

C1

X

 

Released

IF\_XCO\_FG\_FUNCTION\_MODULES\_FCT

\-

\-

C1

X

 

Released

IF\_XCO\_FM\_CACHEABLE\_ORIGIN

\-

\-

C1

X

 

Released

IF\_XCO\_FM\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_FM\_EXCEPTION

\-

\-

C1

X

 

Released

IF\_XCO\_FM\_EXCEPTIONS

\-

\-

C1

X

 

Released

IF\_XCO\_FM\_EXCEPTIONS\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_FM\_EXCEPTION\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_FM\_PARAMETER

\-

\-

C1

X

 

Released

IF\_XCO\_FM\_PARAMETERS

\-

\-

C1

X

 

Released

IF\_XCO\_FM\_PRMS\_CHANGING

\-

\-

C1

X

 

Released

IF\_XCO\_FM\_PRMS\_CHANGING\_FCTRY

\-

\-

C1

X

 

Released

IF\_XCO\_FM\_PRMS\_EXPORTING

\-

\-

C1

X

 

Released

IF\_XCO\_FM\_PRMS\_EXPORTING\_FCTRY

\-

\-

C1

X

 

Released

IF\_XCO\_FM\_PRMS\_IMPORTING

\-

\-

C1

X

 

Released

IF\_XCO\_FM\_PRMS\_IMPORTING\_FCTRY

\-

\-

C1

X

 

Released

IF\_XCO\_FM\_PRM\_CHANGING

\-

\-

C1

X

 

Released

IF\_XCO\_FM\_PRM\_CHA\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_FM\_PRM\_CHA\_TYPE

\-

\-

C1

X

 

Released

IF\_XCO\_FM\_PRM\_EXPORTING

\-

\-

C1

X

 

Released

IF\_XCO\_FM\_PRM\_EXP\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_FM\_PRM\_EXP\_TYPE

\-

\-

C1

X

 

Released

IF\_XCO\_FM\_PRM\_IMPORTING

\-

\-

C1

X

 

Released

IF\_XCO\_FM\_PRM\_IMP\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_FM\_PRM\_IMP\_TYPE

\-

\-

C1

X

 

Released

IF\_XCO\_FM\_SOURCE\_CODE

\-

\-

C1

X

 

Released

IF\_XCO\_FUNCTION\_GROUP

\-

\-

C1

X

 

Released

IF\_XCO\_FUNCTION\_GROUPS

\-

\-

C1

X

 

Released

IF\_XCO\_FUNCTION\_MODULE

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_AO\_S\_FO\_COMPONENT

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_AO\_S\_FO\_C\_ALIAS

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_AO\_S\_FO\_C\_CONSTANT

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_AO\_S\_FO\_C\_DATA

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_AO\_S\_FO\_C\_METHOD

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_AO\_S\_FO\_C\_TYPE

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_AO\_S\_FO\_PRODUCT

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_AO\_S\_FO\_S\_EXCEPTION

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_AO\_S\_FO\_S\_P\_CHNGNG

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_AO\_S\_FO\_S\_P\_EXPRTNG

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_AO\_S\_FO\_S\_P\_IMPRTNG

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_AO\_S\_FO\_S\_P\_RETRNG

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_AO\_S\_UP\_COMPONENT

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_AO\_S\_UP\_C\_ALIAS

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_AO\_S\_UP\_C\_CONSTANT

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_AO\_S\_UP\_C\_DATA

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_AO\_S\_UP\_C\_METHOD

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_AO\_S\_UP\_METHD\_DELET

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_AO\_S\_UP\_METHD\_INSRT

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_AO\_S\_UP\_METHD\_UPDAT

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_AO\_S\_UP\_SUBCOMPNT

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_AO\_S\_UP\_S\_EXCEPTION

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_AO\_S\_UP\_S\_P\_CHNGNG

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_AO\_S\_UP\_S\_P\_EXPRTNG

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_AO\_S\_UP\_S\_P\_IMPRTNG

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_AO\_S\_UP\_S\_P\_RETRNG

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_AO\_TYPE\_ATTRIBUTE

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_AO\_TYPE\_DECLARATION

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_AO\_TYPE\_D\_STR\_CPNT

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_AO\_TYPE\_D\_TAB\_ROW

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_AO\_TYPE\_PARAMETER

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_AO\_TYPE\_P\_CHANGING

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_AO\_TYPE\_P\_EXPORTING

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_AO\_TYPE\_P\_IMPORTING

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_AO\_TYPE\_P\_RETURNING

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_BDEF\_RSLT\_CARDNALTY

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_BDEF\_S\_FO\_BEHAVIOR

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_BDEF\_S\_FO\_B\_ACTION

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_BDEF\_S\_FO\_B\_ASC\_CRT

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_BDEF\_S\_FO\_B\_ASSOCTN

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_BDEF\_S\_FO\_B\_AUTH

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_BDEF\_S\_FO\_B\_A\_DE\_RF

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_BDEF\_S\_FO\_B\_A\_PARAM

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_BDEF\_S\_FO\_B\_A\_RSULT

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_BDEF\_S\_FO\_B\_A\_VA\_RF

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_BDEF\_S\_FO\_B\_CHARA

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_BDEF\_S\_FO\_B\_DETRMTN

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_BDEF\_S\_FO\_B\_ETAG

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_BDEF\_S\_FO\_B\_EVENT

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_BDEF\_S\_FO\_B\_E\_PARAM

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_BDEF\_S\_FO\_B\_FIELD

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_BDEF\_S\_FO\_B\_LOCK

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_BDEF\_S\_FO\_B\_MAPPING

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_BDEF\_S\_FO\_B\_STD\_OP

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_BDEF\_S\_FO\_B\_VALIDTN

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_BDEF\_S\_FO\_PRAGMA\_T

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_BDEF\_S\_FO\_SCLR\_ENTY

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_BDEF\_S\_FO\_SD\_EFFCTS

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_BDEF\_S\_FO\_SE\_ACTION

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_BDEF\_S\_FO\_SE\_AFFCTS

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_BDEF\_S\_FO\_SE\_DT\_ACT

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_BDEF\_S\_FO\_SE\_EXE\_ON

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_BDEF\_S\_FO\_SE\_FIELD

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_CDS\_CARDINALITY

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_CDS\_S\_FO\_ANNOTATION

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_CDS\_S\_FO\_ANN\_TARGET

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_CDS\_S\_FO\_ANN\_VALUE

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_CDS\_S\_FO\_ANN\_V\_BLDR

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_CLAS\_AMDP\_DB\_ENTITY

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_CLAS\_S\_DE\_DEFINITN

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_CLAS\_S\_DE\_D\_SECTION

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_CLAS\_S\_FO\_DEFNTN

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_CLAS\_S\_FO\_D\_C\_MTHD

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_CLAS\_S\_FO\_D\_C\_M\_AMD

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_CLAS\_S\_FO\_D\_C\_M\_BI

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_CLAS\_S\_FO\_D\_INTRFCE

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_CLAS\_S\_FO\_D\_SECTION

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_CLAS\_S\_FO\_IMPLMTN

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_CLAS\_S\_FO\_I\_METHOD

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_CLAS\_S\_FO\_I\_M\_AMDP

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_CLAS\_S\_FO\_LCL\_CLASS

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_CLAS\_S\_FO\_S\_P\_IMP

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_CLAS\_S\_FO\_S\_P\_I\_BI

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_CLAS\_S\_FO\_TST\_CLASS

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_CLAS\_S\_IN\_DEFINITN

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_CLAS\_S\_IN\_D\_SECTION

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_CLAS\_S\_UPDATE\_IMP

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_CLAS\_S\_UP\_DEFINITN

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_CLAS\_S\_UP\_D\_SC\_C\_MD

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_CLAS\_S\_UP\_D\_SECTION

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_CLAS\_S\_UP\_IMPL\_MTHD

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DCLS\_S\_FO\_ROLE

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DCLS\_S\_FO\_R\_A\_RULE

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DDLS\_DDL\_EXPRESSION

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DDLS\_FIELD\_TYPE

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DDLS\_PARAM\_DTYPE

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DDLS\_PRVDR\_CNTRCT

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DDLS\_S\_FO\_ASSOC

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DDLS\_S\_FO\_A\_E

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DDLS\_S\_FO\_A\_E\_E

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DDLS\_S\_FO\_A\_E\_E\_DS

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DDLS\_S\_FO\_COMPOS

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DDLS\_S\_FO\_C\_E

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DDLS\_S\_FO\_FIELD

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DDLS\_S\_FO\_JOIN\_T

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DDLS\_S\_FO\_J\_INNER

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DDLS\_S\_FO\_J\_LEFT\_O

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DDLS\_S\_FO\_J\_RIGHT\_O

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DDLS\_S\_FO\_PARAM

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DDLS\_S\_FO\_P\_VIEW

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DDLS\_S\_FO\_P\_VIEW\_DS

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DDLS\_S\_FO\_TABLE\_F

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DDLS\_S\_FO\_UNION

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DDLS\_S\_FO\_VIEW

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DDLS\_S\_FO\_VIEW\_DS

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DDLS\_S\_FO\_VIEW\_E

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DDLS\_S\_FO\_VIEW\_EXT

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DDLS\_S\_FO\_VIEW\_E\_DS

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DDLS\_S\_FO\_VIEW\_E\_E

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DDLS\_S\_FO\_V\_EXT\_DS

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DDLS\_S\_FO\_V\_E\_E\_DS

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DDLS\_TEMPLATE

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DDLX\_S\_FO\_FIELD

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DDLX\_S\_FO\_PARAMETER

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DOMA\_FORMAT

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DOMA\_ORIGIN

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DOMA\_S\_CH\_UP\_FXD\_VL

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DOMA\_S\_FO\_FXD\_VALS

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DOMA\_S\_FO\_FXD\_VALUE

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DOMA\_S\_FO\_OUTPT\_CHR

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DRTY\_STD\_TYPE

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DRTY\_S\_FO\_SPL\_TP\_DF

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DTEL\_DATA\_TYPE

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DTEL\_ORIGIN

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DTEL\_S\_CH\_UP\_FLD\_LB

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_DTEL\_S\_FO\_FLD\_LBL

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_EVTB\_S\_CH\_UP\_EV\_VN

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_EVTB\_S\_FO\_EVNT\_VRSN

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_FUGR\_FM\_PT\_CHANGNG

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_FUGR\_FM\_PT\_EXPRTNG

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_FUGR\_FM\_PT\_IMPRTNG

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_FUGR\_S\_FO\_FM\_EXCPTN

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_FUGR\_S\_FO\_FM\_P\_CHA

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_FUGR\_S\_FO\_FM\_P\_EXP

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_FUGR\_S\_FO\_FM\_P\_IMP

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_FUGR\_S\_FO\_FNCTN\_MDL

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_FUGR\_S\_UP\_FNCTN\_MDL

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_INTF\_S\_FO\_C\_METHOD

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_INTF\_S\_UP\_C\_METHOD

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_O\_DELETE\_RESULT

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_O\_FINDING

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_O\_FINDINGS

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_O\_F\_OBJECT

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_O\_F\_SECTION

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_O\_F\_SECTION\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_O\_PATCH\_RESULT

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_O\_POST\_RESULT

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_O\_PUT\_RESULT

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_SRVB\_S\_FO\_SERVICE

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_SRVB\_S\_FO\_SRV\_VERSN

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_SRVD\_PRVDR\_CNTRCT

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_SRVD\_S\_FO\_EXPOSURE

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_TABL\_APS\_ENH\_CAT

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_TABL\_APS\_S\_FO\_CMPNT

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_TABL\_DBT\_ENH\_CAT

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_TABL\_DBT\_S\_CH\_UP\_FL

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_TABL\_DBT\_S\_CH\_UP\_IC

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_TABL\_DBT\_S\_CH\_U\_F\_U

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_TABL\_DBT\_S\_FO\_FIELD

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_TABL\_DBT\_S\_FO\_INCL

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_TABL\_DBT\_S\_FO\_TS\_GP

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_TABL\_FIELD\_TYPE\_APS

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_TABL\_FIELD\_TYPE\_DBT

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_TABL\_FIELD\_TYPE\_GTT

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_TABL\_FIELD\_TYPE\_STR

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_TABL\_FKEY\_CARDNALTY

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_TABL\_FKEY\_CARD\_LEFT

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_TABL\_FKEY\_CARD\_RGHT

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_TABL\_GTT\_S\_FO\_FIELD

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_TABL\_ORIGIN

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_TABL\_STR\_ENH\_CAT

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_TABL\_STR\_S\_CH\_U\_CMP

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_TABL\_STR\_S\_CH\_U\_C\_U

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_TABL\_STR\_S\_CH\_U\_INC

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_TABL\_STR\_S\_FO\_CMPNT

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_TABL\_STR\_S\_FO\_INCL

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_TABL\_S\_CH\_U\_CUR\_QUN

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_TABL\_S\_CH\_U\_FRG\_KEY

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_TABL\_S\_CH\_U\_SCH\_HLP

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_TABL\_S\_FO\_CURR\_QUAN

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_TABL\_S\_FO\_FIELD

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_TABL\_S\_FO\_FKEY

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_TABL\_S\_FO\_SHELP

\-

\-

C1

X

 

Released

IF\_XCO\_GEN\_TTYP\_ROW\_TYPE

\-

\-

C1

X

 

Released

IF\_XCO\_GLOBAL\_TEMPORARY\_TABLE

\-

\-

C1

X

 

Released

IF\_XCO\_GLOBAL\_TEMPORARY\_TABLES

\-

\-

C1

X

 

Released

IF\_XCO\_GTT\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_GTT\_FIELD

\-

\-

C1

X

 

Released

IF\_XCO\_GTT\_FIELDS

\-

\-

C1

X

 

Released

IF\_XCO\_GTT\_FIELDS\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_GTT\_FIELD\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_GTT\_FIELD\_TYPE

\-

\-

C1

X

 

Released

IF\_XCO\_GTT\_FOREIGN\_KEY

\-

\-

C1

X

 

Released

IF\_XCO\_GTT\_FOREIGN\_KEY\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_GTT\_SEARCH\_HELP

\-

\-

C1

X

 

Released

IF\_XCO\_GTT\_SEARCH\_HELP\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_HASH\_ALGORITHM

\-

\-

C1

X

 

Released

IF\_XCO\_I18N\_ALO\_TARGET\_OBJECT

\-

\-

C1

X

 

Released

IF\_XCO\_I18N\_ALO\_TARGET\_SUBOBJ

\-

\-

C1

X

 

Released

IF\_XCO\_I18N\_BCO\_TARGET\_OBJECT

\-

\-

C1

X

 

Released

IF\_XCO\_I18N\_DD\_ENT\_TARGET

\-

\-

C1

X

 

Released

IF\_XCO\_I18N\_DD\_FLD\_TARGET

\-

\-

C1

X

 

Released

IF\_XCO\_I18N\_DD\_PRM\_TARGET

\-

\-

C1

X

 

Released

IF\_XCO\_I18N\_DE\_TARGET\_OBJECT

\-

\-

C1

X

 

Released

IF\_XCO\_I18N\_DM\_TARGET\_FIXED\_VA

\-

\-

C1

X

 

Released

IF\_XCO\_I18N\_MC\_TARGET\_MESSAGE

\-

\-

C1

X

 

Released

IF\_XCO\_I18N\_ME\_ENT\_TARGET

\-

\-

C1

X

 

Released

IF\_XCO\_I18N\_ME\_FLD\_TARGET

\-

\-

C1

X

 

Released

IF\_XCO\_I18N\_ME\_PRM\_TARGET

\-

\-

C1

X

 

Released

IF\_XCO\_I18N\_TEXT

\-

\-

C1

X

 

Released

IF\_XCO\_I18N\_TEXT\_ATTRIBUTE

\-

\-

C1

X

 

Released

IF\_XCO\_I18N\_TP\_TARGET\_TXT\_ELEM

\-

\-

C1

X

 

Released

IF\_XCO\_I18N\_TRANSLATION

\-

\-

C1

X

 

Released

IF\_XCO\_I18N\_TT\_TARGET\_RECORD

\-

\-

C1

X

 

Released

IF\_XCO\_INTF\_CACHEABLE\_ORIGIN

\-

\-

C1

X

 

Released

IF\_XCO\_INTF\_COMPONENTS\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_INTF\_COMPONENT\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_INTF\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_INTF\_C\_METHOD

\-

\-

C1

X

 

Released

IF\_XCO\_INTF\_C\_METHODS

\-

\-

C1

X

 

Released

IF\_XCO\_INTF\_C\_METHODS\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_INTF\_C\_METHOD\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_INTF\_IMPLEMENTATIONS

\-

\-

C1

X

 

Released

IF\_XCO\_INTF\_IMPLEMENTATIONS\_FC

\-

\-

C1

X

 

Released

IF\_XCO\_ITERATOR

\-

\-

C1

X

 

Released

IF\_XCO\_JSON\_TRANSFORMATION

\-

\-

C1

X

X

Released

IF\_XCO\_JSON\_TREE\_BUILDER

\-

\-

C1

X

X

Released

IF\_XCO\_JSON\_TREE\_VISITOR

\-

\-

C1

X

X

Released

IF\_XCO\_KU\_BINARY\_TXT\_ENC\_FCTRY

\-

\-

C1

 

X

Released

IF\_XCO\_KU\_JSON\_DATA

\-

\-

C1

 

X

Released

IF\_XCO\_KU\_JSON\_DATA\_BUILDER

\-

\-

C1

 

X

Released

IF\_XCO\_KU\_JSON\_DATA\_FACTORY

\-

\-

C1

 

X

Released

IF\_XCO\_KU\_JSON\_TRNSFRMTN\_FCTRY

\-

\-

C1

 

X

Released

IF\_XCO\_KU\_REGEX\_ENGINE\_FACTORY

\-

\-

C1

 

X

Released

IF\_XCO\_KU\_STD\_CURRENT

\-

\-

C1

 

X

Released

IF\_XCO\_KU\_STD\_SY

\-

\-

C1

 

X

Released

IF\_XCO\_KU\_STRING\_COMPOSITION\_F

\-

\-

C1

 

X

Released

IF\_XCO\_KU\_STRING\_DECOMPOSTN\_F

\-

\-

C1

 

X

Released

IF\_XCO\_KU\_TENANT

\-

\-

C1

 

X

Released

IF\_XCO\_KU\_TM\_DATE

\-

\-

C1

 

X

Released

IF\_XCO\_KU\_TM\_DATE\_FORMAT

\-

\-

C1

 

X

Released

IF\_XCO\_KU\_TM\_FORMAT\_FACTORY

\-

\-

C1

 

X

Released

IF\_XCO\_KU\_TM\_MOMENT

\-

\-

C1

 

X

Released

IF\_XCO\_KU\_TM\_MOMENT\_FORMAT

\-

\-

C1

 

X

Released

IF\_XCO\_KU\_TM\_TIME

\-

\-

C1

 

X

Released

IF\_XCO\_KU\_TM\_TIME\_FORMAT

\-

\-

C1

 

X

Released

IF\_XCO\_KU\_TM\_TIME\_ZONE\_FACTORY

\-

\-

C1

 

X

Released

IF\_XCO\_KU\_TM\_UNIX\_TIMESTAMP

\-

\-

C1

 

X

Released

IF\_XCO\_KU\_URL

\-

\-

C1

 

X

Released

IF\_XCO\_KU\_UUID\_FORMAT\_FACTORY

\-

\-

C1

 

X

Released

IF\_XCO\_LANGUAGE

\-

\-

C1

X

 

Released

IF\_XCO\_LANGUAGES

\-

\-

C1

X

 

Released

IF\_XCO\_LANG\_FORMAT

\-

\-

C1

X

 

Released

IF\_XCO\_MC\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_MC\_MESSAGE

\-

\-

C1

X

 

Released

IF\_XCO\_MC\_MESSAGES

\-

\-

C1

X

 

Released

IF\_XCO\_MC\_MESSAGES\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_MC\_MESSAGE\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_MESSAGE

\-

\-

C1

X

X

Released

IF\_XCO\_MESSAGES

\-

\-

C1

X

 

Released

IF\_XCO\_MESSAGE\_CLASS

\-

\-

C1

X

 

Released

IF\_XCO\_MESSAGE\_CLASSES

\-

\-

C1

X

 

Released

IF\_XCO\_MESSAGE\_SHORT\_TEXT

\-

\-

C1

X

X

Released

IF\_XCO\_METADATA\_EXTENSION

\-

\-

C1

X

 

Released

IF\_XCO\_METADATA\_EXTENSIONS

\-

\-

C1

X

 

Released

IF\_XCO\_NAME\_CHOICE

\-

\-

C1

X

 

Released

IF\_XCO\_NEWS

\-

\-

C1

X

X

Released

IF\_XCO\_NONT\_CACHEABLE\_ORIGIN

\-

\-

C1

X

 

Released

IF\_XCO\_NONT\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_NUMBER\_RANGE\_OBJECT

\-

\-

C1

X

 

Released

IF\_XCO\_NUMBER\_RANGE\_OBJECTS

\-

\-

C1

X

 

Released

IF\_XCO\_PACKAGE

\-

\-

C1

X

 

Released

IF\_XCO\_PACKAGES

\-

\-

C1

X

 

Released

IF\_XCO\_PAYLOAD

\-

\-

C1

X

 

Released

IF\_XCO\_PKG\_FILTER

\-

\-

C1

X

 

Released

IF\_XCO\_PRINTABLE

\-

\-

C1

X

 

Released

IF\_XCO\_RAP\_BEHAVIOR\_MESSAGE

\-

\-

C1

X

 

Released

IF\_XCO\_REGEX\_APPLICATION

\-

\-

C1

X

X

Released

IF\_XCO\_REGEX\_ENGINE

\-

\-

C1

X

X

Released

IF\_XCO\_REGULAR\_EXPRESSION

\-

\-

C1

X

X

Released

IF\_XCO\_RONT\_CACHEABLE\_ORIGIN

\-

\-

C1

X

 

Released

IF\_XCO\_RONT\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_SAP\_OBJECT\_NODE\_TYPE

\-

\-

C1

X

 

Released

IF\_XCO\_SAP\_OBJECT\_NODE\_TYPES

\-

\-

C1

X

 

Released

IF\_XCO\_SAP\_OBJECT\_TYPE

\-

\-

C1

X

 

Released

IF\_XCO\_SAP\_OBJECT\_TYPES

\-

\-

C1

X

 

Released

IF\_XCO\_SERVICE\_BINDING

\-

\-

C1

X

 

Released

IF\_XCO\_SERVICE\_BINDINGS

\-

\-

C1

X

 

Released

IF\_XCO\_SERVICE\_BINDING\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_SERVICE\_CONSUMPTION\_MDL

\-

\-

C1

X

 

Released

IF\_XCO\_SERVICE\_CONSUMPTN\_MDLS

\-

\-

C1

X

 

Released

IF\_XCO\_SERVICE\_DEFINITION

\-

\-

C1

X

 

Released

IF\_XCO\_SERVICE\_DEFINITIONS

\-

\-

C1

X

 

Released

IF\_XCO\_SOFTWARE\_COMPONENT

\-

\-

C1

X

 

Released

IF\_XCO\_SRVB\_CACHEABLE\_ORIGIN

\-

\-

C1

X

 

Released

IF\_XCO\_SRVB\_OPERATION

\-

\-

C1

X

 

Released

IF\_XCO\_SRVB\_SERVICE

\-

\-

C1

X

 

Released

IF\_XCO\_SRVB\_SERVICES

\-

\-

C1

X

 

Released

IF\_XCO\_SRVB\_SERVICES\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_SRVB\_SERVICE\_VERSION

\-

\-

C1

X

 

Released

IF\_XCO\_SRVB\_SERVICE\_VERSIONS

\-

\-

C1

X

 

Released

IF\_XCO\_SRVB\_SERVICE\_VERSIONS\_F

\-

\-

C1

X

 

Released

IF\_XCO\_SRVB\_SERVICE\_VERSION\_CO

\-

\-

C1

X

 

Released

IF\_XCO\_SRVC\_CACHEABLE\_ORIGIN

\-

\-

C1

X

 

Released

IF\_XCO\_SRVC\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_SRVC\_REMOTE\_FUNCTION

\-

\-

C1

X

 

Released

IF\_XCO\_SRVC\_REMOTE\_FUNCTIONS

\-

\-

C1

X

 

Released

IF\_XCO\_SRVC\_REMOTE\_FUNCTIONS\_F

\-

\-

C1

X

 

Released

IF\_XCO\_SRVC\_SERVICE\_OPERATION

\-

\-

C1

X

 

Released

IF\_XCO\_SRVC\_SERVICE\_OPERATIONS

\-

\-

C1

X

 

Released

IF\_XCO\_SRVC\_SERVICE\_OPERATNS\_F

\-

\-

C1

X

 

Released

IF\_XCO\_SRVC\_SVC\_ENTITY\_SET

\-

\-

C1

X

 

Released

IF\_XCO\_SRVC\_SVC\_ENTITY\_SETS

\-

\-

C1

X

 

Released

IF\_XCO\_SRVC\_SVC\_ENTITY\_SETS\_F

\-

\-

C1

X

 

Released

IF\_XCO\_SRVC\_SVC\_ENTITY\_SET\_CO

\-

\-

C1

X

 

Released

IF\_XCO\_SRVD\_CACHEABLE\_ORIGIN

\-

\-

C1

X

 

Released

IF\_XCO\_SRVD\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_SRVD\_EXPOSURE

\-

\-

C1

X

 

Released

IF\_XCO\_SRVD\_EXPOSURES

\-

\-

C1

X

 

Released

IF\_XCO\_SRVD\_EXPOSURES\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_SRVD\_EXPOSURE\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_STRING

\-

\-

C1

X

X

Released

IF\_XCO\_STRINGS

\-

\-

C1

X

X

Released

IF\_XCO\_STRING\_BUILDER

\-

\-

C1

X

X

Released

IF\_XCO\_STRING\_COMPOSITION

\-

\-

C1

X

X

Released

IF\_XCO\_STRING\_DECOMPOSITION

\-

\-

C1

X

X

Released

IF\_XCO\_STRING\_ITERABLE

\-

\-

C1

X

 

Released

IF\_XCO\_STRING\_ITERATOR

\-

\-

C1

X

 

Released

IF\_XCO\_STRING\_XSTRING\_CNVRSN

\-

\-

C1

X

X

Released

IF\_XCO\_STR\_COMPONENT

\-

\-

C1

X

 

Released

IF\_XCO\_STR\_COMPONENTS

\-

\-

C1

X

 

Released

IF\_XCO\_STR\_COMPONENTS\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_STR\_COMPONENT\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_STR\_COMPONENT\_PR\_FCTRY

\-

\-

C1

X

 

Released

IF\_XCO\_STR\_COMPONENT\_PR\_FKFA

\-

\-

C1

X

 

Released

IF\_XCO\_STR\_COMPONENT\_PR\_FKFA\_R

\-

\-

C1

X

 

Released

IF\_XCO\_STR\_COMPONENT\_TYPE

\-

\-

C1

X

 

Released

IF\_XCO\_STR\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_STR\_FOREIGN\_KEY

\-

\-

C1

X

 

Released

IF\_XCO\_STR\_FOREIGN\_KEY\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_STR\_SEARCH\_HELP

\-

\-

C1

X

 

Released

IF\_XCO\_STR\_SEARCH\_HELP\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_TAB\_CACHEABLE\_ORIGIN

\-

\-

C1

X

 

Released

IF\_XCO\_TAB\_FIELD

\-

\-

C1

X

 

Released

IF\_XCO\_TAB\_FIELD\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_TAB\_FOREIGN\_KEY

\-

\-

C1

X

 

Released

IF\_XCO\_TAB\_FOREIGN\_KEY\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_TAB\_PSL\_FKFA

\-

\-

C1

X

 

Released

IF\_XCO\_TAB\_PSL\_FKFA\_RESULT

\-

\-

C1

X

 

Released

IF\_XCO\_TAB\_PSL\_FKFA\_SCENARIO

\-

\-

C1

X

 

Released

IF\_XCO\_TAB\_SEARCH\_HELP

\-

\-

C1

X

 

Released

IF\_XCO\_TAB\_SEARCH\_HELP\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_TEXT

\-

\-

C1

X

 

Released

IF\_XCO\_TF\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_TF\_SOURCE\_CODE

\-

\-

C1

X

 

Released

IF\_XCO\_TM\_TIME\_ZONE

\-

\-

C1

X

X

Released

IF\_XCO\_TRANSFORMATION

\-

\-

C1

X

 

Released

IF\_XCO\_TRANSFORMATIONS

\-

\-

C1

X

 

Released

IF\_XCO\_TRANSPORT\_LAYER

\-

\-

C1

X

 

Released

IF\_XCO\_TRANSPORT\_TARGET

\-

\-

C1

X

 

Released

IF\_XCO\_TR\_ENTRY\_FILTER

\-

\-

C1

X

 

Released

IF\_XCO\_TR\_ENTRY\_SOURCE

\-

\-

C1

X

 

Released

IF\_XCO\_TR\_FILTER

\-

\-

C1

X

 

Released

IF\_XCO\_TR\_RELEASE\_OPTION

\-

\-

C1

X

 

Released

IF\_XCO\_TTYP\_CONTENT

\-

\-

C1

X

 

Released

IF\_XCO\_TTYP\_ROW\_TYPE

\-

\-

C1

X

 

Released

IF\_XCO\_TT\_PRIMARY\_KEY

\-

\-

C1

X

 

Released

IF\_XCO\_TT\_PRIMARY\_KEY\_FACTORY

\-

\-

C1

X

 

Released

IF\_XCO\_TT\_SECONDARY\_KEY

\-

\-

C1

X

 

Released

IF\_XCO\_TT\_SECONDARY\_KEY\_FACTRY

\-

\-

C1

X

 

Released

IF\_XCO\_UUID

\-

\-

C1

X

X

Released

IF\_XCO\_UUID\_FORMAT

\-

\-

C1

X

X

Released

IF\_XCO\_XLSX\_RA\_CELL

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_RA\_CELL\_STREAM

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_RA\_CELL\_VALUE

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_RA\_CS\_OPERATION\_FC

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_RA\_CS\_OP\_VISIT

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_RA\_CS\_VISITOR

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_RA\_CURSOR

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_RA\_CURSOR\_POSITION

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_RA\_DOCUMENT

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_RA\_HL\_LOCATION

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_RA\_HL\_TARGET

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_RA\_HYPERLINK

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_RA\_OPERATION

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_RA\_ROW\_STREAM

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_RA\_RS\_OPERATION\_FC

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_RA\_RS\_OP\_WRITE\_TO

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_RA\_SELECTION

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_RA\_VT\_BEST\_EFFORT

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_RA\_VT\_CELL\_VALUE

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_RA\_VT\_IDENTITY

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_RA\_VT\_ROW\_VALUE

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_RA\_VT\_STRING\_VALUE

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_RA\_WORKBOOK

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_RA\_WORKSHEET

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_RA\_WORKSHEET\_FCTRY

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_SLC\_PATTERN

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_SLC\_PATTERN\_BLDR

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_SLC\_PB\_SPL\_FROM\_TO

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_WA\_CELL

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_WA\_CELL\_VALUE

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_WA\_CURSOR

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_WA\_CURSOR\_POSITION

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_WA\_CURSOR\_WIRING

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_WA\_DOCUMENT

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_WA\_OPERATION

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_WA\_ROW\_STREAM

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_WA\_RS\_OPERATION\_FC

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_WA\_RS\_OP\_WRITE\_FRM

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_WA\_SELECTION

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_WA\_VT\_BEST\_EFFORT

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_WA\_VT\_CELL\_VALUE

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_WA\_VT\_ROW\_VALUE

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_WA\_WORKBOOK

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_WA\_WORKSHEET

\-

\-

C1

X

 

Released

IF\_XCO\_XLSX\_WA\_WORKSHEET\_FCTRY

\-

\-

C1

X

 

Released

IF\_XCO\_XSTRING

\-

\-

C1

X

X

Released

IF\_XCO\_XSTRING\_STRING\_CNVRSN

\-

\-

C1

X

X

Released

IWSV - SAP Gateway Business Suite Enablement - Service   

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

State

Successor

API\_CDR\_FILE\_DOWNLOAD\_SRV 0001

\-

\-

C2

 

Released

API\_CLOUD\_PRINT\_PULL\_SRV 0001

\-

\-

C2

 

Released

BC\_EXT\_APPJOB\_MANAGEMENT 0002

\-

\-

C2

 

Released

MSAG - Message Class   

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

State

Successor

ABAP\_TIMEFM

\-

\-

C1

 

X

Released

SQL1 - SQL Service Binding (SQL1)   

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

State

Successor

DBC2ABAPTEST

\-

\-

C2

 

Released

SUSO - Authorization object   

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

State

Successor

B\_BUPA\_ADR

\-

\-

C1

X

 

Released

B\_BUPA\_BNK

\-

\-

C1

X

 

Released

B\_BUPA\_GRP

\-

\-

C1

X

 

Released

B\_BUPA\_RLT

\-

\-

C1

X

 

Released

B\_BUPR\_BZT

\-

\-

C1

X

 

Released

B\_BUP\_DCPA

\-

\-

C1

X

 

Released

B\_BUP\_DCPD

\-

\-

C1

X

 

Released

B\_BUP\_PCPT

\-

\-

C1

X

 

Released

PLOG

\-

\-

C1

X

 

Released

SDDLVIEW

\-

\-

C1

X

 

Released

S\_APPL\_LOG

\-

\-

C1

X

 

Released

S\_NUMBER

\-

\-

C1

X

 

Released

S\_SQL\_VIEW

\-

\-

C1

X

 

Released

S\_TABU\_NAM

\-

\-

C1

X

 

Released

TABL - Table   

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

State

Successor

/AIF/CHANGEABLE\_FIELD\_ST

\-

\-

C1

 

X

Released

ABAPOFFLEN

\-

\-

C1

 

X

Released

ABAP\_SORTORDER

\-

\-

C1

X

X

Released

ABP\_BEHV\_AUTHORIZATION

\-

\-

C1

X

 

Released

ABP\_BEHV\_CHANGES

\-

\-

C1

X

 

Released

ABP\_BEHV\_FEATURES

\-

\-

C1

X

 

Released

ABP\_BEHV\_GLOBAL\_PERMISSIONS

\-

\-

C1

X

 

Released

ABP\_BEHV\_LOCKS

\-

\-

C1

X

 

Released

ABP\_BEHV\_PAR\_EDIT

\-

\-

C1

X

 

Released

ABP\_BEHV\_PERMISSIONS

\-

\-

C1

X

 

Released

ABP\_BEHV\_RESPONSE

\-

\-

C1

X

 

Released

ABP\_BEHV\_RETRIEVALS

\-

\-

C1

X

 

Released

ACO\_PROXY\_TEXTID\_TYPE

\-

\-

C1

X

 

Released

ADDRESSPOST

\-

\-

C1

X

X

Released

ADDRESS\_1

\-

\-

C1

X

X

Released

ADDRESS\_2

\-

\-

C1

X

X

Released

ADDRESS\_3

\-

\-

C1

X

X

Released

ADDRESS\_DATA\_S

\-

\-

C1

X

X

Released

ADDRESS\_PRINTFORM\_LINE

\-

\-

C1

X

X

Released

ARCH\_STAT

\-

\-

C1

X

 

Released

ARFCTID

\-

\-

C1

X

 

Released

AUTHFIELD\_VALS

\-

\-

C1

X

 

Released

AUTHORIZATION\_FOR\_OBJECT

\-

\-

C1

X

 

Released

AUTHVALINTERVAL

\-

\-

C1

X

 

Released

BADI\_FILTER\_BINDING

\-

\-

C1

X

 

Released

BAL\_S\_LGNM

\-

\-

C1

X

 

Released

BAPIALA

\-

\-

C1

X

X

Released

BAPIALB

\-

\-

C1

X

X

Released

BAPIALC

\-

\-

C1

X

X

Released

BAPIALD

\-

\-

C1

X

X

Released

BAPIALF

\-

\-

C1

X

X

Released

BAPIALG

\-

\-

C1

X

X

Released

BAPIALT

\-

\-

C1

X

X

Released

BAPICONVRS

\-

\-

C1

X

X

Released

BAPICURR

\-

\-

C1

X

X

Released

BAPICURX

\-

\-

C1

X

X

Released

BAPICURX31

\-

\-

C1

X

X

Released

BAPIEXT

\-

\-

C1

X

X

Released

BAPIEXTA

\-

\-

C1

X

X

Released

BAPIEXTC

\-

\-

C1

X

X

Released

BAPIF4A

\-

\-

C1

X

X

Released

BAPIF4B

\-

\-

C1

X

X

Released

BAPIF4C

\-

\-

C1

X

X

Released

BAPIF4D

\-

\-

C1

X

X

Released

BAPIF4E

\-

\-

C1

X

X

Released

BAPIF4F

\-

\-

C1

X

X

Released

BAPIF4M

\-

\-

C1

X

X

Released

BAPIFLAG

\-

\-

C1

X

X

Released

BAPIHTML

\-

\-

C1

X

X

Released

BAPIINFO

\-

\-

C1

X

X

Released

BAPIMONCOM

\-

\-

C1

X

X

Released

BAPIMONIT

\-

\-

C1

X

X

Released

BAPIMONSTR

\-

\-

C1

X

X

Released

BAPIOBJID

\-

\-

C1

X

X

Released

BAPIPAREX

\-

\-

C1

X

X

Released

BAPIPAREX\_HELP

\-

\-

C1

X

X

Released

BAPIRANGES

\-

\-

C1

X

X

Released

BAPIRET1

\-

\-

C1

X

X

Deprecated

BAPIRET2

\-

\-

C1

X

X

Released

BAPIRETC

\-

\-

C1

X

X

Released

BAPIRETI

\-

\-

C1

X

X

Released

BAPIRETS

\-

\-

C1

X

X

Released

BAPIRETURN

\-

\-

C1

X

X

Deprecated

BAPIRETURN1

\-

\-

C1

X

X

Deprecated

BAPISHLP

\-

\-

C1

X

X

Released

BAPISRCSYS

\-

\-

C1

X

X

Released

BAPITA

\-

\-

C1

X

X

Released

BAPITGA

\-

\-

C1

X

X

Released

BAPITGB

\-

\-

C1

X

X

Released

BAPI\_STAND

\-

\-

C1

X

X

Released

BDWFAP\_PAR

\-

\-

C1

X

X

Released

CFD\_S\_CALC\_FIELDS\_DRAFT\_INFO

\-

\-

C1

 

X

Released

CMIS\_S\_ACE

\-

\-

C1

X

 

Released

CMIS\_S\_ACL

\-

\-

C1

X

 

Released

CMIS\_S\_ACL\_CAPABILITIES

\-

\-

C1

X

 

Released

CMIS\_S\_ALLOWABLE\_ACTIONS

\-

\-

C1

X

 

Released

CMIS\_S\_CAPABILITIES

\-

\-

C1

X

 

Released

CMIS\_S\_CHANGE\_EVENT

\-

\-

C1

X

 

Released

CMIS\_S\_CHOICE

\-

\-

C1

X

 

Released

CMIS\_S\_CLIENT\_PROPERTY

\-

\-

C1

X

 

Released

CMIS\_S\_CNT\_DLVRY\_NFO

\-

\-

C1

X

 

Released

CMIS\_S\_CONTENT\_RAW

\-

\-

C1

X

 

Released

CMIS\_S\_CONTENT\_STREAM

\-

\-

C1

X

 

Released

CMIS\_S\_DATE\_TIME

\-

\-

C1

X

 

Released

CMIS\_S\_EXTENDED\_FEATURES

\-

\-

C1

X

 

Released

CMIS\_S\_EXTENSION

\-

\-

C1

X

 

Released

CMIS\_S\_ID\_AND\_CHANGE\_TOKEN

\-

\-

C1

X

 

Released

CMIS\_S\_IMPL\_CAP

\-

\-

C1

X

 

Released

CMIS\_S\_KEY\_VALUE

\-

\-

C1

X

 

Released

CMIS\_S\_KEY\_VALUES

\-

\-

C1

X

 

Released

CMIS\_S\_OBJECT

\-

\-

C1

X

 

Released

CMIS\_S\_OBJECT\_CONTAINER

\-

\-

C1

X

 

Released

CMIS\_S\_OBJECT\_IN\_FOLDER

\-

\-

C1

X

 

Released

CMIS\_S\_OBJECT\_IN\_FOLDER\_LIST

\-

\-

C1

X

 

Released

CMIS\_S\_OBJECT\_LIST

\-

\-

C1

X

 

Released

CMIS\_S\_OBJECT\_PARENT

\-

\-

C1

X

 

Released

CMIS\_S\_PERMISSION\_DEFINITION

\-

\-

C1

X

 

Released

CMIS\_S\_PERMISSION\_MAPPING

\-

\-

C1

X

 

Released

CMIS\_S\_PRINCIPAL

\-

\-

C1

X

 

Released

CMIS\_S\_PROPERTIES

\-

\-

C1

X

 

Released

CMIS\_S\_PROPERTY

\-

\-

C1

X

 

Released

CMIS\_S\_PROPERTY\_DEFINITION

\-

\-

C1

X

 

Released

CMIS\_S\_PROPERTY\_VALUE

\-

\-

C1

X

 

Released

CMIS\_S\_QUERY\_RESULT

\-

\-

C1

X

 

Released

CMIS\_S\_QUERY\_RESULT\_LIST

\-

\-

C1

X

 

Released

CMIS\_S\_RELATIONSHIP

\-

\-

C1

X

 

Released

CMIS\_S\_RENDITION

\-

\-

C1

X

 

Released

CMIS\_S\_REPOSITORY\_INFO

\-

\-

C1

X

 

Released

CMIS\_S\_TYPE\_CONTAINER

\-

\-

C1

X

 

Released

CMIS\_S\_TYPE\_DEFINITION

\-

\-

C1

X

 

Released

CMIS\_S\_TYPE\_LIST

\-

\-

C1

X

 

Released

CMIS\_S\_TYPE\_MUTABILITY

\-

\-

C1

X

 

Released

CMIS\_S\_TYPE\_SET\_ATTR

\-

\-

C1

X

 

Released

FDT\_BRS\_S\_TRACE\_HEADER

\-

\-

C1

X

X

Released

FDT\_BRS\_S\_TRACE\_RECORD

\-

\-

C1

X

X

Released

IHTTPNVP

\-

\-

C1

 

X

Released

LDBCB

\-

\-

C1

X

 

Deprecated

MATCH\_RESULT

\-

\-

C1

X

X

Released

PRXCTRL

\-

\-

C1

X

X

Released

QNAME

\-

\-

C1

X

 

Released

RCONT

\-

\-

C1

 

X

Released

REPL\_RESULT

\-

\-

C1

X

X

Released

RHEAD

\-

\-

C1

 

X

Released

RSM\_S\_MESSAGE\_CONTAINER

\-

\-

C1

 

X

Released

SCRL\_S\_AMOUNT

\-

\-

C1

 

X

Released

SCRL\_S\_QUANTITY

\-

\-

C1

 

X

Released

SCX\_SRCPOS

\-

\-

C1

X

X

Deprecated

SCX\_T100KEY

\-

\-

C1

X

X

Released

SUBMATCH\_RESULT

\-

\-

C1

X

X

Released

SWF\_PBL\_AGENT

\-

\-

C1

X

X

Released

SWF\_PBL\_SAP\_OBJECT

\-

\-

C1

 

X

Released

SWW\_SONT\_KEY

\-

\-

C1

X

X

Released

SXCO\_S\_AR\_OBJECT\_KEY

\-

\-

C1

X

 

Released

SXCO\_S\_CDS\_ANN\_VAL\_MEMBER

\-

\-

C1

X

 

Released

SXCO\_S\_CDS\_DS\_PARAMETER

\-

\-

C1

X

 

Released

SXCO\_S\_JSON\_NAME\_MAPPING

\-

\-

C1

X

X

Released

SXCO\_S\_TAB\_INCLUDE

\-

\-

C1

X

 

Released

SXSDDURATION

\-

\-

C1

X

X

Released

SXSLTEPAR

\-

\-

C1

X

 

Released

SYCH\_BDL\_DRAFT\_ADMIN\_INC

\-

\-

C1

X

 

Released

SYMSG

\-

\-

C1

X

X

Released

SYST

\-

\-

C1

 

X

Released

T005N

\-

\-

C3

 

Released

T006

\-

\-

C3

 

Released

T006A

\-

\-

C3

 

Released

T006B

\-

\-

C3

 

Released

T006C

\-

\-

C3

 

Released

T006D

\-

\-

C3

 

Released

T006I

\-

\-

C3

 

Released

T006J

\-

\-

C3

 

Released

T006T

\-

\-

C3

 

Released

T006\_OIB

\-

\-

C3

 

Released

TB009

\-

\-

C3

 

Released

TB019

\-

\-

C3

 

Released

TB025

\-

\-

C3

 

Released

TB027

\-

\-

C3

 

Released

TB028

\-

\-

C3

 

Released

TB032

\-

\-

C3

 

Released

TB910

\-

\-

C3

 

Released

TB912

\-

\-

C3

 

Released

TB914

\-

\-

C3

 

Released

TB916

\-

\-

C3

 

Released

TOASP

\-

\-

C1

 

X

Deprecated

TSA4C\_CP\_SVC\_CONN\_DETAILS

\-

\-

C1

X

 

Released

TSAD12

\-

\-

C3

 

Released

TSAD9

\-

\-

C3

 

Released

UT8STRLIN

\-

\-

C1

 

X

Released

UTF8STR\_RC

\-

\-

C1

 

X

Released

TTYP - Table Type   

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

State

Successor

/AIF/CHANGEABLE\_FIELD\_TT

\-

\-

C1

 

X

Released

ABAPOFFLENTAB

\-

\-

C1

 

X

Released

ABAP\_SORTORDER\_TAB

\-

\-

C1

X

X

Released

ABP\_BEHV\_AUTHORIZATION\_TAB

\-

\-

C1

X

 

Released

ABP\_BEHV\_CHANGES\_TAB

\-

\-

C1

X

 

Released

ABP\_BEHV\_FEATURES\_TAB

\-

\-

C1

X

 

Released

ABP\_BEHV\_GLOBAL\_PERMISSION\_TAB

\-

\-

C1

X

 

Released

ABP\_BEHV\_LOCKS\_TAB

\-

\-

C1

X

 

Released

ABP\_BEHV\_PERMISSIONS\_TAB

\-

\-

C1

X

 

Released

ABP\_BEHV\_RELATING\_TAB

\-

\-

C1

X

 

Released

ABP\_BEHV\_RESPONSE\_TAB

\-

\-

C1

X

 

Released

ABP\_BEHV\_RETRIEVALS\_TAB

\-

\-

C1

X

 

Released

ABP\_ENTITY\_NAME\_TAB

\-

\-

C1

X

 

Released

ABP\_FIELD\_NAME\_TAB

\-

\-

C1

X

 

Released

AUTHORIZATION

\-

\-

C1

X

 

Released

AUTHORIZATION\_TAB

\-

\-

C1

X

 

Released

AUTHVALINTERVAL\_TAB

\-

\-

C1

X

 

Released

BADI\_FILTER\_BINDINGS

\-

\-

C1

X

 

Released

BAL\_T\_LGNM

\-

\-

C1

X

 

Released

BAPIMONLST

\-

\-

C1

X

X

Released

BAPIPAREXTAB

\-

\-

C1

X

X

Released

BAPIRETCT

\-

\-

C1

X

X

Released

BAPIRETM

\-

\-

C1

X

X

Released

BAPIRETTAB

\-

\-

C1

X

X

Released

CFD\_T\_CALC\_FIELDS\_DRAFT\_INFO

\-

\-

C1

 

X

Released

CMIS\_T\_ACE

\-

\-

C1

X

 

Released

CMIS\_T\_BOOLEAN

\-

\-

C1

X

 

Released

CMIS\_T\_CHOICE

\-

\-

C1

X

 

Released

CMIS\_T\_CLIENT\_PROPERTY

\-

\-

C1

X

 

Released

CMIS\_T\_DATE\_TIME

\-

\-

C1

X

 

Released

CMIS\_T\_DECIMAL

\-

\-

C1

X

 

Released

CMIS\_T\_ENUM

\-

\-

C1

X

 

Released

CMIS\_T\_EXTENDED\_FEATURES

\-

\-

C1

X

 

Released

CMIS\_T\_EXTENSION

\-

\-

C1

X

 

Released

CMIS\_T\_ID

\-

\-

C1

X

 

Released

CMIS\_T\_ID\_AND\_CHANGE\_TOKEN

\-

\-

C1

X

 

Released

CMIS\_T\_KEY\_VALUES

\-

\-

C1

X

 

Released

CMIS\_T\_LONG

\-

\-

C1

X

 

Released

CMIS\_T\_MAP

\-

\-

C1

X

 

Released

CMIS\_T\_OBJECT

\-

\-

C1

X

 

Released

CMIS\_T\_OBJECT\_CONTAINER

\-

\-

C1

X

 

Released

CMIS\_T\_OBJECT\_IN\_FOLDER

\-

\-

C1

X

 

Released

CMIS\_T\_OBJECT\_PARENT

\-

\-

C1

X

 

Released

CMIS\_T\_PERMISSION\_DEFINITION

\-

\-

C1

X

 

Released

CMIS\_T\_PERMISSION\_MAPPING

\-

\-

C1

X

 

Released

CMIS\_T\_PROPERTY

\-

\-

C1

X

 

Released

CMIS\_T\_PROPERTY\_DEFINITION

\-

\-

C1

X

 

Released

CMIS\_T\_PROPERTY\_VALUE

\-

\-

C1

X

 

Released

CMIS\_T\_QUERY\_RESULT

\-

\-

C1

X

 

Released

CMIS\_T\_RELATIONSHIP

\-

\-

C1

X

 

Released

CMIS\_T\_RENDITION

\-

\-

C1

X

 

Released

CMIS\_T\_REPOSITORY\_INFO

\-

\-

C1

X

 

Released

CMIS\_T\_STRING

\-

\-

C1

X

 

Released

CMIS\_T\_TYPE\_CONTAINER

\-

\-

C1

X

 

Released

CMIS\_T\_TYPE\_DEFINITION

\-

\-

C1

X

 

Released

FDT\_BRS\_T\_TRACE\_HEADER

\-

\-

C1

X

X

Released

FDT\_BRS\_T\_TRACE\_RECORD

\-

\-

C1

X

X

Released

HTTP\_STATUS\_CODES

\-

\-

C1

X

 

Released

LDBCB\_TT

\-

\-

C1

X

 

Deprecated

MATCH\_RESULT\_TAB

\-

\-

C1

X

X

Released

PRXCTRLTAB

\-

\-

C1

X

X

Released

REPL\_RESULT\_TAB

\-

\-

C1

X

X

Released

ROLE\_AUTHORIZATIONS

\-

\-

C1

X

 

Released

RSM\_T\_MESSAGE\_CONTAINER

\-

\-

C1

 

X

Released

STRINGTAB

\-

\-

C1

X

 

Deprecated

TTYP STRING\_TABLE

STRING\_HASHED\_TABLE

\-

\-

C1

X

X

Released

STRING\_TABLE

\-

\-

C1

X

X

Released

SUBMATCH\_RESULT\_TAB

\-

\-

C1

X

X

Released

SXCO\_T\_ACCESS\_CONTROLS

\-

\-

C1

X

 

Released

SXCO\_T\_AD\_DATA\_ELEMENTS

\-

\-

C1

X

 

Released

SXCO\_T\_AD\_FIELD\_NAMES

\-

\-

C1

X

 

Released

SXCO\_T\_AD\_STRUCTURES

\-

\-

C1

X

 

Released

SXCO\_T\_AD\_TABLES

\-

\-

C1

X

 

Released

SXCO\_T\_AD\_TABLE\_TYPES

\-

\-

C1

X

 

Released

SXCO\_T\_AMDP\_DB\_ENTITIES

\-

\-

C1

X

 

Released

SXCO\_T\_AMDP\_DB\_OPTIONS

\-

\-

C1

X

 

Released

SXCO\_T\_AO\_CLASSES

\-

\-

C1

X

 

Released

SXCO\_T\_AO\_C\_ALIASES

\-

\-

C1

X

 

Released

SXCO\_T\_AO\_C\_CLASS\_DATAS

\-

\-

C1

X

 

Released

SXCO\_T\_AO\_C\_CONSTANTS

\-

\-

C1

X

 

Released

SXCO\_T\_AO\_C\_DATAS

\-

\-

C1

X

 

Released

SXCO\_T\_AO\_C\_TYPES

\-

\-

C1

X

 

Released

SXCO\_T\_AO\_INTERFACES

\-

\-

C1

X

 

Released

SXCO\_T\_AO\_OBJECT\_NAMES

\-

\-

C1

X

 

Released

SXCO\_T\_AO\_SUBCOMPONENT\_NAMES

\-

\-

C1

X

 

Released

SXCO\_T\_AO\_S\_EXCEPTIONS

\-

\-

C1

X

 

Released

SXCO\_T\_AO\_S\_PARAMETERS

\-

\-

C1

X

 

Released

SXCO\_T\_AO\_S\_P\_CHANGINGS

\-

\-

C1

X

 

Released

SXCO\_T\_AO\_S\_P\_EXPORTINGS

\-

\-

C1

X

 

Released

SXCO\_T\_AO\_S\_P\_IMPORTINGS

\-

\-

C1

X

 

Released

SXCO\_T\_AO\_S\_P\_RETURNINGS

\-

\-

C1

X

 

Released

SXCO\_T\_APLO\_OBJ\_TEXTS

\-

\-

C1

X

 

Released

SXCO\_T\_APLO\_OBJ\_TEXT\_ATTRIBTS

\-

\-

C1

X

 

Released

SXCO\_T\_APLO\_SUBOBJECTS

\-

\-

C1

X

 

Released

SXCO\_T\_APLO\_SUBOBJ\_TEXTS

\-

\-

C1

X

 

Released

SXCO\_T\_APLO\_SUBOBJ\_TXT\_ATTRBTS

\-

\-

C1

X

 

Released

SXCO\_T\_APPEND\_STRUCTURES

\-

\-

C1

X

 

Released

SXCO\_T\_APPLICATION\_LOG\_OBJECTS

\-

\-

C1

X

 

Released

SXCO\_T\_APS\_COMPONENTS

\-

\-

C1

X

 

Released

SXCO\_T\_ARS\_VISIBILITIES

\-

\-

C1

X

 

Released

SXCO\_T\_AR\_FILTERS

\-

\-

C1

X

 

Released

SXCO\_T\_AR\_OBJECTS

\-

\-

C1

X

 

Released

SXCO\_T\_AR\_OBJECT\_KEY

\-

\-

C1

X

 

Released

SXCO\_T\_ASQL\_CONSTRAINTS

\-

\-

C1

X

 

Released

SXCO\_T\_BAL\_LOG\_FILTERS

\-

\-

C1

X

 

Released

SXCO\_T\_BAL\_LOG\_HANDLES

\-

\-

C1

X

 

Released

SXCO\_T\_BCO\_TEXTS

\-

\-

C1

X

 

Released

SXCO\_T\_BCO\_TEXT\_ATTRIBUTES

\-

\-

C1

X

 

Released

SXCO\_T\_BDEF\_TRIGGER\_OPERATIONS

\-

\-

C1

X

 

Released

SXCO\_T\_BEHAVIOR\_DEFINITIONS

\-

\-

C1

X

 

Released

SXCO\_T\_BUSINESS\_CNFGRTN\_OBJCTS

\-

\-

C1

X

 

Released

SXCO\_T\_CDS\_ANNOTATIONS

\-

\-

C1

X

 

Released

SXCO\_T\_CDS\_ANN\_FILTERS

\-

\-

C1

X

 

Released

SXCO\_T\_CDS\_ANN\_VALUES

\-

\-

C1

X

 

Released

SXCO\_T\_CDS\_ANN\_VAL\_MEMBER

\-

\-

C1

X

 

Released

SXCO\_T\_CDS\_ASSOCIATIONS

\-

\-

C1

X

 

Released

SXCO\_T\_CDS\_COMPOSITIONS

\-

\-

C1

X

 

Released

SXCO\_T\_CDS\_DS\_PARAMETER

\-

\-

C1

X

 

Released

SXCO\_T\_CDS\_ENTITIES

\-

\-

C1

X

 

Released

SXCO\_T\_CDS\_FIELDS

\-

\-

C1

X

 

Released

SXCO\_T\_CDS\_FIELD\_NAMES

\-

\-

C1

X

 

Released

SXCO\_T\_CDS\_OBJECT\_NAMES

\-

\-

C1

X

 

Released

SXCO\_T\_CDS\_PARAMETERS

\-

\-

C1

X

 

Released

SXCO\_T\_CDS\_PARAMETER\_NAMES

\-

\-

C1

X

 

Released

SXCO\_T\_CDS\_UNIONS

\-

\-

C1

X

 

Released

SXCO\_T\_CLAS\_C\_METHODS

\-

\-

C1

X

 

Released

SXCO\_T\_CLAS\_METHOD\_NAMES

\-

\-

C1

X

 

Released

SXCO\_T\_CP\_BAL\_EXC\_ADDITIONS

\-

\-

C1

X

 

Released

SXCO\_T\_CP\_BAL\_LOGS

\-

\-

C1

X

 

Released

SXCO\_T\_CP\_BAL\_LOG\_EXCEPTIONS

\-

\-

C1

X

 

Released

SXCO\_T\_CP\_BAL\_LOG\_MESSAGES

\-

\-

C1

X

 

Released

SXCO\_T\_CP\_GEN\_D\_O\_PUT\_OPTIONS

\-

\-

C1

X

 

Released

SXCO\_T\_CP\_TRANSPORTS

\-

\-

C1

X

 

Released

SXCO\_T\_CP\_TR\_ENTRIES

\-

\-

C1

X

 

Released

SXCO\_T\_CP\_TR\_KEY\_ENTRIES

\-

\-

C1

X

 

Released

SXCO\_T\_CP\_TR\_KE\_TK\_COMPONENTS

\-

\-

C1

X

 

Released

SXCO\_T\_CP\_TR\_OBJECT\_ENTRIES

\-

\-

C1

X

 

Released

SXCO\_T\_CP\_TR\_R3TR\_OBJECT\_ENTRS

\-

\-

C1

X

 

Released

SXCO\_T\_CP\_TR\_R3TR\_TABU\_OBJ\_ENS

\-

\-

C1

X

 

Released

SXCO\_T\_CP\_TR\_TASKS

\-

\-

C1

X

 

Released

SXCO\_T\_DATABASE\_TABLES

\-

\-

C1

X

 

Released

SXCO\_T\_DATA\_DEFINITIONS

\-

\-

C1

X

 

Released

SXCO\_T\_DBT\_FIELDS

\-

\-

C1

X

 

Released

SXCO\_T\_DCL\_EXPRESSIONS

\-

\-

C1

X

 

Released

SXCO\_T\_DDEF\_ENT\_TEXTS

\-

\-

C1

X

 

Released

SXCO\_T\_DDEF\_ENT\_TEXT\_ATTRIBUTS

\-

\-

C1

X

 

Released

SXCO\_T\_DDEF\_FLD\_TEXTS

\-

\-

C1

X

 

Released

SXCO\_T\_DDEF\_FLD\_TEXT\_ATTRIBUTS

\-

\-

C1

X

 

Released

SXCO\_T\_DDEF\_PRM\_TEXTS

\-

\-

C1

X

 

Released

SXCO\_T\_DDEF\_PRM\_TEXT\_ATTRIBUTS

\-

\-

C1

X

 

Released

SXCO\_T\_DOMAINS

\-

\-

C1

X

 

Released

SXCO\_T\_DOMAIN\_FIXED\_VALUES

\-

\-

C1

X

 

Released

SXCO\_T\_DOMAIN\_TEXTS

\-

\-

C1

X

 

Released

SXCO\_T\_DOMAIN\_TEXT\_ATTRIBUTES

\-

\-

C1

X

 

Released

SXCO\_T\_DTEL\_TEXTS

\-

\-

C1

X

 

Released

SXCO\_T\_DTEL\_TEXT\_ATTRIBUTES

\-

\-

C1

X

 

Released

SXCO\_T\_FM\_EXCEPTIONS

\-

\-

C1

X

 

Released

SXCO\_T\_FM\_EXCEPTION\_NAMES

\-

\-

C1

X

 

Released

SXCO\_T\_FM\_NAMES

\-

\-

C1

X

 

Released

SXCO\_T\_FM\_PARAMETER\_NAMES

\-

\-

C1

X

 

Released

SXCO\_T\_FM\_PRMS\_CHANGING

\-

\-

C1

X

 

Released

SXCO\_T\_FM\_PRMS\_EXPORTING

\-

\-

C1

X

 

Released

SXCO\_T\_FM\_PRMS\_IMPORTING

\-

\-

C1

X

 

Released

SXCO\_T\_FUNCTION\_GROUPS

\-

\-

C1

X

 

Released

SXCO\_T\_FUNCTION\_MODULES

\-

\-

C1

X

 

Released

SXCO\_T\_GEN\_CLAS\_AMDP\_DB\_ENTS

\-

\-

C1

X

 

Released

SXCO\_T\_GEN\_DDLS\_DDL\_EXPRS

\-

\-

C1

X

 

Released

SXCO\_T\_GEN\_O\_FINDINGS

\-

\-

C1

X

 

Released

SXCO\_T\_GLOBAL\_TEMPORARY\_TABLES

\-

\-

C1

X

 

Released

SXCO\_T\_GTT\_FIELDS

\-

\-

C1

X

 

Released

SXCO\_T\_I18N\_TEXTS

\-

\-

C1

X

 

Released

SXCO\_T\_I18N\_TRANSLATIONS

\-

\-

C1

X

 

Released

SXCO\_T\_INTF\_C\_METHODS

\-

\-

C1

X

 

Released

SXCO\_T\_JSON\_NAME\_MAPPING

\-

\-

C1

X

X

Released

SXCO\_T\_JSON\_TRANSFORMATIONS

\-

\-

C1

X

X

Released

SXCO\_T\_LANGUAGES

\-

\-

C1

X

 

Released

SXCO\_T\_MC\_MESSAGES

\-

\-

C1

X

 

Released

SXCO\_T\_MC\_TEXTS

\-

\-

C1

X

 

Released

SXCO\_T\_MC\_TEXT\_ATTRIBUTES

\-

\-

C1

X

 

Released

SXCO\_T\_MESSAGES

\-

\-

C1

X

X

Released

SXCO\_T\_MESSAGE\_CLASSES

\-

\-

C1

X

 

Released

SXCO\_T\_METADATA\_EXTENSIONS

\-

\-

C1

X

 

Released

SXCO\_T\_ME\_ENT\_TEXTS

\-

\-

C1

X

 

Released

SXCO\_T\_ME\_ENT\_TEXT\_ATTRIBUTES

\-

\-

C1

X

 

Released

SXCO\_T\_ME\_FLD\_TEXTS

\-

\-

C1

X

 

Released

SXCO\_T\_ME\_FLD\_TEXT\_ATTRIBUTES

\-

\-

C1

X

 

Released

SXCO\_T\_ME\_PRM\_TEXTS

\-

\-

C1

X

 

Released

SXCO\_T\_ME\_PRM\_TEXT\_ATTRIBUTES

\-

\-

C1

X

 

Released

SXCO\_T\_PACKAGES

\-

\-

C1

X

 

Released

SXCO\_T\_SERVICE\_BINDINGS

\-

\-

C1

X

 

Released

SXCO\_T\_SERVICE\_DEFINITIONS

\-

\-

C1

X

 

Released

SXCO\_T\_SRVB\_SERVICES

\-

\-

C1

X

 

Released

SXCO\_T\_SRVB\_SERVICE\_VERSIONS

\-

\-

C1

X

 

Released

SXCO\_T\_SRVD\_EXPOSURES

\-

\-

C1

X

 

Released

SXCO\_T\_SRVD\_OBJECT\_NAMES

\-

\-

C1

X

 

Released

SXCO\_T\_STR\_COMPONENTS

\-

\-

C1

X

 

Released

SXCO\_T\_TAB\_FIELDS

\-

\-

C1

X

 

Released

SXCO\_T\_TAB\_INCLUDE

\-

\-

C1

X

 

Released

SXCO\_T\_TP\_TEXTS

\-

\-

C1

X

 

Released

SXCO\_T\_TP\_TEXT\_ATTRIBUTES

\-

\-

C1

X

 

Released

SXCO\_T\_TRANSFORMATIONS

\-

\-

C1

X

 

Released

SXCO\_T\_TR\_ENTRY\_FILTERS

\-

\-

C1

X

 

Released

SXCO\_T\_TR\_FILTERS

\-

\-

C1

X

 

Released

SXCO\_T\_TT\_KEY\_COMPONENTS

\-

\-

C1

X

 

Released

SXCO\_T\_TT\_SECONDARY\_KEYS

\-

\-

C1

X

 

Released

SXSLTEPARS

\-

\-

C1

X

 

Released

SYMSG\_TAB

\-

\-

C1

X

X

Released

TIHTTPNVP

\-

\-

C1

X

X

Released

TIHTTPURLS2

\-

\-

C1

X

X

Released

UTF8STRTAB

\-

\-

C1

 

X

Released

XSTRINGTAB

\-

\-

C1

X

 

Deprecated

TTYP XSTRING\_TABLE

XSTRING\_TABLE

\-

\-

C1

X

X

Released

TYPE - Type Group   

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

State

Successor

ABAP

\-

\-

C1

X

X

Released

VIEW - View   

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

State

Successor

V\_T005O

\-

\-

C3

 

Released

V\_T005S

\-

\-

C3

 

Released

V\_T005\_BAS

\-

\-

C3

 

Released

V\_TB001

\-

\-

C3

 

Released

V\_TB004

\-

\-

C3

 

Released

V\_TB005

\-

\-

C3

 

Released

V\_TB008S

\-

\-

C3

 

Released

V\_TB008U

\-

\-

C3

 

Released

V\_TB037

\-

\-

C3

 

Released

V\_TCURF

\-

\-

C3

 

Released

V\_TCURN

\-

\-

C3

 

Released

V\_TCURR

\-

\-

C3

 

Released

V\_TCURV

\-

\-

C3

 

Released

V\_TSAD2

\-

\-

C3

 

Released

V\_TSAD3

\-

\-

C3

 

Released

V\_TSAD4

\-

\-

C3

 

Released

V\_TSAD5

\-

\-

C3

 

Released

V\_TSADVC\_CLIDEP

\-

\-

C3

 

Released

V\_TZONEBAS

\-

\-

C3

 

Released

WDCA - Web Dynpro Application Configuration   

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

State

Successor

S\_EPM\_FPM\_PO\_ATO 02

\-

\-

C0

 

X

Released

S\_EPM\_FPM\_PO\_ATO\_MOBILE 02

\-

\-

C0

 

X

Released

XSLT - Transformation   

Object

Subobject Type

Subobject

Release Contract

ABAP for Cloud Development

ABAP for Key Users

State

Successor

ID

\-

\-

C1

X

X

Released

ID\_INDENT

\-

\-

C1

X

X

Released