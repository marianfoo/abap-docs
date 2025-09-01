  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP Managed Database Procedures (AMDP)](javascript:call_link\('abenamdp.htm'\)) →  [AMDP - Examples](javascript:call_link\('abenamdp_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20AMDP%20-%20Procedures%20and%20Functions%20in%20a%20Nutshell%2C%20ABENSHEET_AMDP_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20im
provement:)

AMDP - Procedures and Functions in a Nutshell

This example demonstrates AMDP procedures and functions.

Source Code   

\* Public class definition
CLASS cl\_demo\_cs\_amdp DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    INTERFACES if\_amdp\_marker\_hdb.
    METHODS main REDEFINITION.
    "Various internal table type specifications for the parameters of
    "AMDP methods
    "Note: Only table and elementary data types are possible for the
    "parameters.
    TYPES carr\_tab TYPE STANDARD TABLE OF demo\_cs\_scarr WITH EMPTY KEY.
    TYPES fli\_tab TYPE STANDARD TABLE OF demo\_cs\_spfli WITH EMPTY KEY.
    TYPES:
      "Structured data type as basis for the table type below
      BEGIN OF carr\_fli\_struc,
        carrname TYPE demo\_cs\_scarr-carrname,
        connid   TYPE demo\_cs\_spfli-connid,
        cityfrom TYPE demo\_cs\_spfli-cityfrom,
        cityto   TYPE demo\_cs\_spfli-cityto,
      END OF carr\_fli\_struc,
      "Internal table type
      carr\_fli\_tab TYPE STANDARD TABLE OF carr\_fli\_struc
        WITH EMPTY KEY,
      "Structured data type as basis for the table type below
      BEGIN OF fli\_struc,
        carrid   TYPE demo\_cs\_spfli-carrid,
        connid   TYPE demo\_cs\_spfli-connid,
        cityfrom TYPE demo\_cs\_spfli-cityfrom,
        cityto   TYPE demo\_cs\_spfli-cityto,
        fltime   TYPE demo\_cs\_spfli-fltime,
      END OF fli\_struc,
      "Internal table type
      flsch\_tab TYPE STANDARD TABLE OF demo\_cs\_spfli WITH EMPTY KEY.
    "Various instance method declarations
    "The selection for instance and static methods is irrelevant for
    "the example.
    "It is just meant to visualize that AMDP methods can be declared
    "as either of them.
    "AMDP procedure
    "It's a simple AMDP procedure having only an output parameter with
    "tabular type.
    "Note the parameter declaration that includes the mandatory
    "passing by value.
    "This is true for all of the AMDP method declarations.
    METHODS select\_carriers
      EXPORTING VALUE(carr\_tab) TYPE carr\_tab.
    "AMDP procedure to call an AMDP table function
    "As can be seen in the implementation part, this example method
    "calls the AMDP table function get\_carr\_fli. AMDP table functions
    "can only be called by other AMDP methods.
    METHODS select\_get\_carr\_fli
      IMPORTING VALUE(carrid)       TYPE demo\_cs\_spfli-carrid
      EXPORTING VALUE(carr\_fli\_tab) TYPE carr\_fli\_tab.
    "Various static method declarations
    "The purpose of the implementation of the static constructor in
    "this example is to fill a demo database table to have data to
    "work with in the example.
    METHODS constructor.
    "AMDP procedure
    "This method demonstrates the calling of an AMDP procedure from
    "SQLScript.
    "In this example, the selection of data is 'delegated' to another
    "AMDP method get\_flights\_amdp
    "in the same AMDP class. The method declaration includes the
    "addition RAISING with an exception class for AMDP-specific
    "exceptions.
    METHODS  get\_flights
      IMPORTING VALUE(carrid)  TYPE demo\_cs\_spfli-carrid
      EXPORTING VALUE(fli\_tab) TYPE fli\_tab
      RAISING   cx\_amdp\_execution\_error.
    "AMDP Table Function for CDS Table Function
    "Note that, in this case, a static method declaration is required
    "along with the special syntax FOR TABLE FUNCTION. Plus, there are
    "no parameters specified and the declaration is made in the PUBLIC
    "visibility section.
    CLASS-METHODS flight\_analysis FOR TABLE FUNCTION
        demo\_cs\_table\_function.
  PRIVATE SECTION.
    "AMDP procedure
    "This method demonstrates the calling of an AMDP procedure from
    "SQLScript as mentioned above.
    METHODS get\_flights\_amdp
      IMPORTING VALUE(carrid)  TYPE demo\_cs\_spfli-carrid
      EXPORTING VALUE(fli\_tab) TYPE fli\_tab
      RAISING   cx\_amdp\_execution\_error.
    "AMDP table function
    "AMDP table functions can only be called by other AMDP methods.
    "In this example, the AMDP procedure select\_get\_carr\_fli calls this
    "AMDP table function.
    METHODS get\_carr\_fli
      IMPORTING VALUE(carrid)       TYPE demo\_cs\_spfli-carrid
      RETURNING VALUE(carr\_fli\_tab) TYPE carr\_fli\_tab.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_cs\_amdp IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`Demo: AMDP\`
      )->line( ).
    out->write\_doc( \`1. AMDP procedure\` ).
    "Declaring an internal table to store the data that are
    "returned by the following method.
    "You could also choose to create the internal table inline
    "within the method call,
    "i. e. like ... IMPORTING carr\_tab = DATA(tab) ).
    DATA amdp\_proc\_res TYPE cl\_demo\_cs\_amdp=>carr\_tab.
    "Since the method is declared as an instance method, an instance
    "has to be created. Here, the instance constructor NEW is used
    "in a standalone method call that includes a chained method call.
    NEW cl\_demo\_cs\_amdp( )->select\_carriers(
      IMPORTING carr\_tab = amdp\_proc\_res ).
    out->write\_data( amdp\_proc\_res ).
    out->write\_doc( \`2. Calling an AMDP Procedure from SQLScript\` ).
    "As can be seen in the method implementation part, this AMDP
    "procedure includes an AMDP procedure call from SQLScript.
    "In this example, the AMDP procedure get\_flights\_amdp is called by
    "get\_flights which is meant to select data from a database table.
    "The returned result is displayed.
    TRY.
        me->get\_flights(
          EXPORTING carrid = 'LH'
          IMPORTING fli\_tab = DATA(call\_amdp\_res) ).
      CATCH cx\_amdp\_execution\_error INTO DATA(error1).
        out->write\_doc( error1->get\_text( ) ).
    ENDTRY.
    out->write\_data( call\_amdp\_res ).
    out->write\_doc( \`3. AMDP Table Function for AMDP Method\` ).
    "The AMDP procedure select\_get\_carr\_fli calls the AMDP table
    "function get\_carr\_fli in the implementation part. AMDP table
    "functions can only be called by other AMDP methods.
    TRY.
        NEW cl\_demo\_cs\_amdp( )->select\_get\_carr\_fli(
          EXPORTING carrid = 'LH'
          IMPORTING carr\_fli\_tab = DATA(amdp\_tab\_func) ).
      CATCH cx\_amdp\_execution\_error INTO DATA(error2).
        out->write\_doc( error2->get\_text( ) ).
    ENDTRY.
    out->write\_data( amdp\_tab\_func ).
    "Note: When commented in, the following code results in a runtime
    "error since you cannot call an AMDP function in ABAP directly.
\*        NEW cl\_demo\_cs\_amdp( )->get\_carr\_fli(
\*          EXPORTING carrid = 'LH' ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->write\_doc( \`4. AMDP Table Function for CDS Table Function\` ).
    "The example demonstrates that a CDS table function can be used as
    "a data source of ABAP SQL read statements.
    "You might want to navigate to the DDL source after FROM by holding
    "CTRL and clicking the DDL source name in ADT to see the details.
    "Or, just check out the F2 help.
    "In this example, the CDS table function is implemented in a way to
    "return accumulated data.
    "In the method implementation for flight\_analysis, first two kinds
    "of data sets from two database tables are gathered. These data
    "sets are joined using an inner join. There, some expressions are
    "included (strings are aggregated, average values are determined).
    SELECT \* FROM demo\_cs\_table\_function
      INTO TABLE @DATA(cds\_tab\_func).
    out->write\_data( cds\_tab\_func ).
  ENDMETHOD.
  METHOD flight\_analysis
         BY DATABASE FUNCTION
         FOR HDB
         LANGUAGE SQLSCRIPT
         OPTIONS READ-ONLY
         USING demo\_cs\_spfli demo\_cs\_scarr.
\* Reading data from two database tables
    itab\_cities =
     select DISTINCT
            demo\_cs\_spfli.mandt    as client,
            demo\_cs\_spfli.carrid   as carrier\_id,
            demo\_cs\_spfli.airpfrom as airport\_from,
            demo\_cs\_spfli.airpto   as airport\_to,
            demo\_cs\_spfli.fltime   as flight\_time,
            demo\_cs\_spfli.distance as flight\_distance,
            demo\_cs\_spfli.distid   as unit
       from demo\_cs\_spfli;
    itab\_carrier\_names =
     select distinct
            demo\_cs\_scarr.mandt    as client,
            demo\_cs\_scarr.carrid   as carrier\_id,
            demo\_cs\_scarr.carrname as carrier\_name
       from demo\_cs\_scarr;
\* Returning joined data using an inner join
   return
     select fl.client, fl.carrier\_id, ca.carrier\_name,
\* Departure and destination airports are concatenated;
\* then all results are joined by string aggregation
        string\_agg(
          concat(concat(fl.airport\_from,' -> '),fl.airport\_to), ', '
          ORDER BY fl.airport\_from) AS connections,
\* Retrieving the average flight time of all flights by carrier
        AVG( fl.flight\_time ) as avg\_flight\_time,
\* Retrieving the average flight distance of all flights by carrier;
\* miles are converted to kilometers
        avg( case 'MI'
             when fl.unit then fl.flight\_distance \* 1.609
             ELSE fl.flight\_distance
             END ) AS avg\_distance
       FROM :itab\_cities AS fl
       INNER JOIN :itab\_carrier\_names AS ca
       ON ca.client = fl.client
       AND ca.carrier\_id = fl.carrier\_id
       WHERE fl.client = ca.client AND fl.carrier\_id = ca.carrier\_id
       GROUP BY fl.client, ca.carrier\_name, fl.carrier\_id;
  ENDMETHOD.
  METHOD get\_carr\_fli
         BY DATABASE FUNCTION
         FOR HDB
         LANGUAGE SQLSCRIPT
         OPTIONS READ-ONLY
         USING demo\_cs\_scarr demo\_cs\_spfli.
\* AMDP table function to be called by other AMDP methods only.
\* In the example, joined data from two database table are returned.
    RETURN
      SELECT ca.carrname, fl.connid, fl.cityfrom, fl.cityto
        FROM demo\_cs\_scarr as ca
        INNER JOIN demo\_cs\_spfli as fl
        ON ca.carrid = fl.carrid
        WHERE fl.carrid = :carrid
        ORDER BY ca.mandt, ca.carrname, fl.connid;
  ENDMETHOD.
  METHOD get\_flights
         BY DATABASE PROCEDURE
         FOR HDB
         LANGUAGE SQLSCRIPT
         OPTIONS READ-ONLY
         USING cl\_demo\_cs\_amdp=>get\_flights\_amdp.
\* Another AMDP procedure is called from SQLScript
    CALL "CL\_DEMO\_CS\_AMDP=>GET\_FLIGHTS\_AMDP"(
      carrid => :carrid,
      fli\_tab => :fli\_tab );
  ENDMETHOD.
  METHOD get\_flights\_amdp
         BY DATABASE PROCEDURE
         FOR HDB
         LANGUAGE SQLSCRIPT
         OPTIONS READ-ONLY
         USING demo\_cs\_spfli.
\* Simple data selection
    fli\_tab = SELECT \*
                FROM "DEMO\_CS\_SPFLI"
                WHERE carrid = :carrid
                ORDER BY carrid;
  ENDMETHOD.
  METHOD select\_carriers
         BY DATABASE PROCEDURE
         FOR HDB
         LANGUAGE SQLSCRIPT
         OPTIONS READ-ONLY
         USING demo\_cs\_scarr.
\* Simple data selection
    carr\_tab = SELECT \*
                FROM "DEMO\_CS\_SCARR"
                ORDER BY carrid;
  ENDMETHOD.
  METHOD select\_get\_carr\_fli
         BY DATABASE PROCEDURE
         FOR HDB
         LANGUAGE SQLSCRIPT
         OPTIONS READ-ONLY
         USING cl\_demo\_cs\_amdp=>get\_carr\_fli.
\* AMDP procedure to call an AMDP table function
\* as specified after USING
    carr\_fli\_tab = SELECT \*
                     FROM "CL\_DEMO\_CS\_AMDP=>GET\_CARR\_FLI"(
                        carrid => :carrid );
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    "Initialize demo database tables.
    cl\_demo\_flight\_tables=>clear\_dbtabs( ).
    "Fill demo database tables.
    cl\_demo\_flight\_tables=>fill\_dbtabs( ).
  ENDMETHOD.
endclass.

Description   

The output shows the outcome of various AMDP procedures and functions. Find comments in the global class explaining the context and details. The following is covered:

-   AMDP procedure
-   Calling an AMDP procedure from SQLScript
-   AMDP Table Function for AMDP Method
-   AMDP Table Function for CDS Table Function