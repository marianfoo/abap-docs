  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Security Notes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_security.htm) →  [Security Risks Caused by Input from Outside](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynamic_programming_scrty.htm) →  [SQL Injections](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_injections_scrty.htm) → 

SQL Injections Using AMDP

When [AMDP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_glosry.htm "Glossary Entry") is used, database procedures are created and called that are currently usually implemented in [SQLScript](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_script_glosry.htm "Glossary Entry") for the [SAP HANA database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhana_database_glosry.htm "Glossary Entry"). The implementation of the database procedures in AMDP methods is managed by ABAP, but their content and security is not ABAP's responsibility. Risks are incurred whenever a database procedure contains dynamic parts or whenever it calls further database procedures whose functions are unknown in ABAP and cannot be checked there.

There are currently no test tools available for checking the security of the implementation of a AMDP methods. Developers of AMDP methods are themselves responsible for their security, with dual control (Code Inspections) being a useful principle here. This is partly why the use of dynamic programming techniques is strongly [discouraged](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp.htm). In cases where AMDP methods do contain dynamic parts that could produce SQL injections when combined with input from outside, they must be flagged accordingly to allow the caller to implement any checks needed.

Implementations of [AMDP methods](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_method_glosry.htm "Glossary Entry") are not currently supported by ABAP test tools, which means the caller of a method is responsible for ensuring that only non-malicious content is passed to it. If the implementation of an AMDP method contains dynamic parts into which formal parameters are injected, no input from outside can be passed to these parameters that is not checked or escaped appropriately, to avoid SQL injections.

Hint

The statements about AMDP made here apply in principle to all places in which implementations made in other programming languages are called from ABAP.

Example

An AMDP method is implemented as follows:

CLASS cl\_dyn\_amdp IMPLEMENTATION.
  METHOD increase\_seatsocc BY DATABASE PROCEDURE FOR HDB
                           LANGUAGE SQLSCRIPT.
    EXEC 'UPDATE sflight SET seatsocc = seatsocc + ' || :seats;
  ENDMETHOD.
ENDCLASS.

This method uses the SQLScript statement EXEC in the [SAP HANA database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhana_database_glosry.htm "Glossary Entry") to execute an SQL statement specified as a character string into which the input parameter seats is merged. A method like this should be classified as a potential risk, since the input parameter is not checked. If possible, an input check should be implemented in SQLScript directly before the statement EXEC is executed.

If the method is delivered without an appropriate check and the caller wants to pass value entered outside to it, the validity of the value must be checked first. In the case in question, only integers can be passed, which can be verified using the method CHECK\_INT\_VALUE of the class CL\_ABAP\_DYN\_PRG in calls from ABAP. If not, input such as 2, seatsmax = seatsmax + 10 would be possible, which would change the column SEATSMAX and not just the column SEATSOCC.

DATA seats TYPE string.
cl\_demo\_input=>request( CHANGING field = seats ).
TRY.
    NEW cl\_dyn\_amdp( )->increase\_seatsocc(
      seats = |{ cl\_abap\_dyn\_prg=>check\_int\_value( seats ) }| ).
  CATCH cx\_abap\_not\_an\_integer INTO DATA(exc).
    cl\_demo\_output=>display( exc->get\_text( ) ).
ENDTRY.

Example

An AMDP method is implemented as follows:

CLASS cl\_dyn\_amdp IMPLEMENTATION.
  METHOD get\_flights BY DATABASE PROCEDURE FOR HDB
                        LANGUAGE SQLSCRIPT
                        USING spfli.
    flights = SELECT \* FROM SPFLI WHERE mandt = :mandt;
    flights = APPLY\_FILTER(:flights, :filter);
  ENDMETHOD.
ENDCLASS.

This method uses the SQLScript statement APPLY\_FILTER in the [SAP HANA database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhana_database_glosry.htm "Glossary Entry"), which sets a dynamic condition on a result set. This statement can also produce SQL injections when combined with input from outside if the input is not validated appropriately. As used in ABAP, methods of the class CL\_ABAP\_DYN\_PRG can validate this input..

DATA column TYPE string.
cl\_demo\_input=>add\_field( CHANGING field = column ).
DATA value TYPE string.
cl\_demo\_input=>request( CHANGING field = value ).
TRY.
    DATA(filter) = cl\_abap\_dyn\_prg=>check\_column\_name( column ) &&
                   \` = \` &&
                   cl\_abap\_dyn\_prg=>quote( value ).
    NEW cl\_dyn\_amdp( )->get\_flights( EXPORTING mandt = sy-mandt
                                              filter = filter
                                   IMPORTING flights = DATA(result) ).
  CATCH cx\_abap\_invalid\_name cx\_amdp\_execution\_failed INTO DATA(exc).
    cl\_demo\_output=>display( exc->get\_text( ) ).
ENDTRY.